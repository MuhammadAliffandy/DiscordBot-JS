const voiceDiscord = require('@discordjs/voice')
const { createReadStream } = require('node:fs');
const { join } = require('node:path');

module.exports.run = async ( client , message , args , spotifyApi) => {

    const tracks = await spotifyApi.searchTracks('Smart');
    const firstTrack = tracks.body.tracks.items[0];
    const trackUrl = firstTrack.external_urls.spotify;

    const channel =  message.member.voice.channel;

    if(!channel) return message.channel.send('Nothing voice channel joined')

    const connection = voiceDiscord.joinVoiceChannel({
        channelId : channel.id,
        guildId : message.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator,
        selfDeaf: false,
        selfMute: false
    })

    const player = voiceDiscord.createAudioPlayer({
        behaviors: {
            noSubscriber: voiceDiscord.NoSubscriberBehavior.Play,
        },
    
    });

    
    resource = voiceDiscord.createAudioResource(join(__dirname, 'Smart.mp3'), { inlineVolume: true });
    resource.volume.setVolume(0.5);

    console.log(join(__dirname, 'smart.mp3'))
    
    player.play(resource);
    connection.subscribe(player);
    
    player.on(voiceDiscord.AudioPlayerStatus.Playing, () => {
        console.log('The audio player has started playing!');
        message.channel.send(`Sedang memutar lagu dari: ${trackUrl}`);
    });


}

