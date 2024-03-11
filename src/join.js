const voiceDiscord = require('@discordjs/voice')
const voiceHandle = require('./play')

module.exports.run = async ( client , message , args ) => {

    const messageSelection  = message.content.toLocaleLowerCase(); 

    const channel =  message.member.voice.channel;

    if(!channel) return message.channel.send('Chaewon belum bergabung ke channel')

    const connection = voiceDiscord.joinVoiceChannel({
        channelId : channel.id,
        guildId : message.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator,
        selfDeaf: false,
        selfMute: false
    })

    if(messageSelection === '!join'){
        connection;
        message.channel.send('Haloo chagiyaa , dengerin musik yuk 🎶')
    }else if(messageSelection === '!leave'){
        connection.destroy();
        message.channel.send('Byebyeee~ ❤️')
    }

    voiceHandle.playAudio(message , connection)


}

