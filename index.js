require('dotenv').config();
const Discord = require('discord.js');
const badWord = require('./badword.json')

const client = new Discord.Client({ intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent,
]});

client.on('messageCreate', message => {

    if (message.content === 'hello') {
        message.reply('Anyeong !!');
    }
    if (message.content === 'oi') {
        message.reply("oi ~~");
    }
    if (message.content === 'ping') {
        message.reply('Pong~!');
    }
    
    const sentence =  message.content.split(' ');
    
    if (sentence.length > 1 ) {
        const isMatch = badWord.some(word => sentence.includes(word));
        if(isMatch){
            message.reply('Uhh, Jangan berkata kasar ya ~!'); 
        }
    }  


})

client.once('ready', () => {
    console.log('The Discord Bot is Ready!');
})


client.login(process.env.BOT_TOKEN)

console.log(badWord[1])