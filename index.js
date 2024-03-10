require('dotenv').config();
const Discord = require('discord.js');
const badWord = require('./badword.json')

const client = new Discord.Client({ intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent,
]});

client.on('messageCreate', message => {

    const messageSelection  = message.content.toLocaleLowerCase(); 

    if (messageSelection === 'chaewon') {
        message.reply('Hallo~ , jadilah temanku ehe');
    }
    if (messageSelection === 'hello') {
        message.reply('Anyeong !!');
    }
    if (messageSelection === 'oi') {
        message.reply("oi ~~");
    }
    if (messageSelection === 'ping') {
        message.reply('Pong~!');
    }
    
    if(badWord.some(data => { return data === messageSelection } )) {
        message.reply('Uhh, Jangan berkata kasar ya ~!'); 
    }

    const sentence =  messageSelection.split(' ');
    
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