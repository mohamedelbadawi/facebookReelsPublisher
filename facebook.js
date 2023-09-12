const request = require('request-promise');
const axios = require('axios')
const fs = require('fs');
exports.uploadToFacebook = async (pageId, accessToken, videoPath) => {
    console.log(videoPath)
    // const pageId = `104595038485033`
    // const accessToken = 'EAAPPT067meoBOZC65TkrOMBOZAZALenznNPZBYgEwG9QB1ZCmAQkexy7Nv5Yn2L3Oi52ZAs4PhRUE7bcDPHRZAZBTbRQgqnr1Pqz06sMpxWoJwk0Rvw9kZCG8eDwO9ix4j38ZCkb4Mdxb04k48Q0VRb6659VZBnJy5gTDpnIXNOZB3hJ2ZC1TnFe44l22T1cZAZAcLDzpoZD'


    const startUploadUrl = `https://graph.facebook.com/${pageId}/video_reels?upload_phase=start&access_token=${accessToken}`;

    const response = await axios.post(startUploadUrl);

    const videoId = response.data.video_id;

    const uploadUrl = response.data.upload_url;


    const videoBuffer = fs.statSync(videoPath)

    const video = fs.readFileSync(videoPath)

    console.log(video);

    const config = {
        headers: {
            Authorization: `OAuth ${accessToken}`,
            offset: '0',
            file_size: videoBuffer.size,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    }

    const uploadResponse = await axios.post(uploadUrl, video, config);

    const published = await axios.post(`https://graph.facebook.com/v17.0/${pageId}/video_reels?access_token=${accessToken}&video_id=${videoId}&upload_phase=finish&video_state=PUBLISHED&description=#fzakeer`);
    console.log(published)
}

