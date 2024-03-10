const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client({ intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages
]});

client.on('message', message => {
    if (message.content === 'hello') {
        message.reply('Hello World~!');
    }
    if (message.content === 'testbot') {
        message.reply("Hi! I'm up and Running~!");
    }
    if (message.content === 'ping') {
        message.reply('Pong~!');
    } 
})

client.once('ready', () => {
    console.log('The Discord Bot is Ready!');
})

client.login(process.env.BOT_TOKEN)