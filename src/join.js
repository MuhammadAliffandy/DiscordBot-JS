const voiceDiscord = require('@discordjs/voice')
const voiceHandle = require('./play')

module.exports.run = async ( client , message ) => {
    
    const messageSelection  = message.content.toLocaleLowerCase(); 
    const channel =  message.member.voice.channel;
    if(!channel) {
        message.channel.send('Chaewon belum bergabung ke channel')
    }else {

        const voiceChannelConfig = {
            channelId : channel.id,
            guildId : message.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator,
            selfDeaf: false,
            selfMute: false
        }
    
        if(messageSelection === '!join'){
            voiceDiscord.joinVoiceChannel(voiceChannelConfig)
            message.channel.send('Haloo chagiyaa , dengerin musik yuk 🎶')
        }else if(messageSelection === '!leave'){
            voiceDiscord.joinVoiceChannel(voiceChannelConfig).destroy()
            message.channel.send('Byebyeee~ ❤️')
        }else{
            voiceHandle.playAudio(message ,connection = voiceDiscord.joinVoiceChannel(voiceChannelConfig))
        }
        
    }
    
}

