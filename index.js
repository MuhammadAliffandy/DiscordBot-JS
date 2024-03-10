const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages
    ] 
});

client.on('message', message => {
    if (message.content === 'hello') {
        message.channel.send('Hello World~!');
    }
    if (message.content === 'testbot') {
        message.channel.send("Hi! I'm up and Running~!");
    }
    if (message.content === 'ping') {
        message.channel.send('Pong~!');
    } 
})

client.once('ready', () => {
    console.log('The Discord Bot is Ready!');
})

client.login('MTIxNjMzNTE2ODYwMDgwNTUxNg.GVIkNj.Gwsp8vvzR0judFzSx4oWgS6Qfz7r3A_4fSLWm4')