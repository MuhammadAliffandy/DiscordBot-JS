const Discord = require('discord.js');
require('dotenv').config();

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
    if (message.content === 'san join') {
        message.reply('Iya san, sini dong !!');
    } 
    if (message.content === 'ping') {
        message.reply('Pong~!');
    } 
})

client.once('ready', () => {
    console.log('The Discord Bot is Ready!');
})

client.login(process.env.BOT_TOKEN)