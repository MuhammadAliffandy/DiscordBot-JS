const voiceDiscord = require('@discordjs/voice')
const ytdl = require('ytdl-core');
const NodeCache = require("node-cache");
const cache = new NodeCache();

const  createAudioResourceFromUrl = async (url) => {
    const stream = ytdl(url, { filter: 'audioonly',});
    const audioResource = voiceDiscord.createAudioResource(stream);
    return audioResource;
}

const playAudio = async (message , connection , audioUrl , audioTitle,) => {

    const messageSelection  = message.content.toLocaleLowerCase(); 

    const player = voiceDiscord.createAudioPlayer();
    
    const resource = await createAudioResourceFromUrl(audioUrl)

    player.play(resource);
    connection.subscribe(player);
    message.channel.send(`Sedang Memainkan Musik : ${audioTitle} `);
    cache.set('musicStatus' , 'played')

    if( messageSelection === '!stopp' ) { 
        player.stop(); 
        connection.subscribe(player);
        message.channel.send(`Lagunya berhenti yaa~ , 😘`);
    }
}

module.exports = { playAudio }