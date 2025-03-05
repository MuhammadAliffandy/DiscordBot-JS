const axios = require('axios');
require('dotenv').config();

const youtubeSearch = async (keyword) => {
    const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${process.env.GOOGLE_TOKEN}&q=${keyword}&part=snippet`)

    if(res.status == 200){
        return res.data.items;
    }
    if(res.status == 400){
        return res.data.message
    }

}

module.exports = { youtubeSearch }