const voiceDiscord = require('@discordjs/voice')
const { join } = require('node:path');

const playAudio = (message , connection) => {

    const messageSelection  = message.content.toLocaleLowerCase(); 

    const player = voiceDiscord.createAudioPlayer();
    
    resource = voiceDiscord.createAudioResource(join(__dirname, 'Smart.mp3'), { inlineVolume: true });
    resource.volume.setVolume(0.5);

    if(messageSelection === '!play' ){
        
        player.play(resource);
        connection.subscribe(player);
        message.channel.send(`Sedang memutar lagu dari: LE SSERAFIM`);
        
        
    }else if( messageSelection === '!stop' ) { 
        player.stop(); 
        connection.subscribe(player);
        message.channel.send(`Lagunya berhenti yaa~ , 😘`);
    }
}

module.exports = { playAudio }