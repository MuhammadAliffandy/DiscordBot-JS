const voiceDiscord = require('@discordjs/voice')
const voiceHandle = require('./play')
const music = require('./search')
const NodeCache = require("node-cache");
const cache = new NodeCache();


module.exports.run = async ( client , message ) => {
    
    // handle voice channel

    const messageSelection  = message.content.toLocaleLowerCase(); 
    const channel =  message.member.voice.channel;

    const voiceChannelConfig = {
        channelId : channel.id,
        guildId : message.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator,
        selfDeaf: false,
        selfMute: false
    }

    if(!channel) {
        message.channel.send('Karinaa belum bergabung ke channel')
    }else {
        if(messageSelection === '!join'){
            voiceDiscord.joinVoiceChannel(voiceChannelConfig)
            message.channel.send('Haloo chagiyaa , dengerin musik yuk 🎶')
        }else if(messageSelection === '!leave'){
            voiceDiscord.joinVoiceChannel(voiceChannelConfig).destroy()
            message.channel.send('Byebyeee~ ❤️')
        }
        // else{
        //     voiceHandle.playAudio(message ,connection = voiceDiscord.joinVoiceChannel(voiceChannelConfig))
        // }
        
    }


    // handle search

    if(messageSelection.split(' ')[0] === '!cari'){

        const filterMessage = messageSelection.split('!cari');

        const searchKeyword  = filterMessage.join(' ')

        const listMusic = await music.searchMusic(message , searchKeyword)

        cache.set("listMusic", listMusic);
        cache.set("searchStatus", true);
    }

    const arrNumber = [ '1' , '2' , '3' , '4' , '5' ]
    const findMessageNumber = arrNumber.some(data => {
        if(messageSelection.split('!')[1] == data){
            return true;
        }
    })


    if(cache.get('searchStatus') === true && findMessageNumber ){
        const listMusic = cache.get('listMusic');

        const filterMessagePicked = messageSelection.split('!')[1]

        const musicPicked = listMusic.filter(data => {
            return filterMessagePicked === data.number
        })

        voiceHandle.playAudio(
            message ,
            connection = voiceDiscord.joinVoiceChannel(voiceChannelConfig) ,
            musicPicked[0].link,
            musicPicked[0].title,
        )
    }

    if( messageSelection == '!stop' ) { 
        console.log('TESTED  STOP')
            const connection = voiceDiscord.joinVoiceChannel(voiceChannelConfig);
            const player = voiceDiscord.createAudioPlayer();
            player.stop(); 
            connection.subscribe(player);
            message.channel.send(`Lagunya berhenti yaa~ , 😘`);
    }
    
}

