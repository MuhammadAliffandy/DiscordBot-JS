const youtubeAPI = require('../api/youtubeApi')
const { EmbedBuilder } = require('discord.js')

const searchMusic = async (message , keyword) => {

    const ytList = await youtubeAPI.youtubeSearch(keyword)

    const ytSearchList = ytList.map((data , index) => {
        const jsonData = {
            id : data.id.videoId,
            number : `${index + 1}`,
            title : data.snippet.title,
            image : data.snippet.thumbnails.medium.url, 
            channel : data.snippet.channelTitle, 
            link : `https://www.youtube.com/watch?v=${data.id.videoId}`,
        }

        return jsonData;
    })

    const listTextSearch = ytSearchList.map( (data,  index) => {
        const jsonData = {
                name : data.channel,
                value: `${index + 1}. ${data.title}` 
            }
        return jsonData;
    })

    const exampleEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Hasil Pencarian :')
    .setURL('https://discord.js.org/')
    .setAuthor({ name: 'By Aliffandy', iconURL: 'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/916/2024/02/22/Kim-Chaewon-LE-SSERAFIM-4222524998.jpg', url: 'https://discord.js.org' })
    .setDescription('Pilih lagu sesuai dengan nomornya yahh!!')
    .setThumbnail('https://kpopping.com/documents/3f/5/240229-LE-SSERAFIM-Chaewon-EASY-and-Smart-at-M-Countdown-documents-17.jpeg?v=8b84f')
    .addFields(listTextSearch)
    .setTimestamp()
    .setImage(ytSearchList[0].image)
    .setFooter({ text: 'Chaewon Bot by Aliffandy', iconURL: 'https://o-cdn-cas.sirclocdn.com/parenting/images/kim-chaewon.width-800.format-webp.webp' });

    message.channel.send({ embeds: [exampleEmbed] });

    return ytSearchList;
}

module.exports = { searchMusic }