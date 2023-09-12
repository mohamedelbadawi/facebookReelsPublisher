const { fetchVideo, } = require('@prevter/tiktok-scraper');
const { writeFileSync } = require('fs');
const { v4: uuidv4 } = require('uuid')


const puppeteer = require('puppeteer')
const puppeteerExtra = require('puppeteer-extra');
const Stealth = require('puppeteer-extra-plugin-stealth');

puppeteerExtra.use(Stealth());

exports.getVideosUrl = async (profileUrl) => {
    const browser = await puppeteer.launch({ headless: false, executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe' });
    const page = await browser.newPage();
    await page.goto(profileUrl);
    // await page.waitForNetworkIdle();
    const Urls = await page.$$eval('div.tiktok-16ou6xi-DivTagCardDesc.eih2qak1 > a', options => {
        return options.map(option => option.href);
    });
    await browser.close();
    return Urls
}


exports.downloadVideoFromTiktok = async (folderName, videoLink) => {

    try {

        const video = await fetchVideo(videoLink);
        const buffer = await video.download();
        const name = uuidv4();

        writeFileSync(`./videos/${folderName}/${name}.mp4`, buffer);
        console.log(videoLink)
        return true
    }
    catch (err) {
        console.error(err)
    }
}


