const { getVideosUrl, downloadVideoFromTiktok } = require('./tiktokDownloader')
const { uploadToFacebook } = require('./facebook');
const fs = require('fs');
const path = require('path')
const { createInterface } = require('readline')

const readline = createInterface({
    input: process.stdin,
    output: process.stdout
});

const readLineAsync = msg => {
    return new Promise(resolve => {
        readline.question(msg, userRes => {
            resolve(userRes);
        });
    });
}





async function main() {

    const tiktokLink = await readLineAsync('Tiktok link ? ');
    const pageId = await readLineAsync('Page Id ? ');
    const accessToken = await readLineAsync('AccessToken ? ');

    const folderName = getFolderName(tiktokLink);

    createFolder(folderName)

    downloadVideos(folderName, tiktokLink);

    console.log('videos downloaded successfully');


    const fullPath = path.join(__dirname, `videos/${folderName}`)
    fs.readdir(fullPath, async (error, files) => {
        if (error) console.log(error)
        for (let file of files) {
            await uploadToFacebook(pageId, accessToken, `videos/${folderName}/${file}`)
            setTimeout(() => { console.log('uploaded'); }, 6000);
        }

    })
    console.warn('Done!')

}
async function downloadVideos(folderName, tiktokLink) {

    const videosLink = await getVideosUrl(tiktokLink);
    console.log(videosLink)

    for (let link of videosLink) {
        await downloadVideoFromTiktok(folderName, link);
        setTimeout(() => { console.log('Waiting'); }, 20000);
    }
}

function createFolder(folderName) {
    if (!fs.existsSync(`.\\videos\\${folderName}`)) {
        fs.mkdirSync(`.\\videos\\${folderName}`);
    }
}
function getFolderName(link) {
    const start = link.indexOf('@')
    return link.substring(start + 1)
}


main();