const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', async() => {
var server = "473564894625529868"; // ايدي السررفر
var channel = "510058639684272130";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**.ِAnas .ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas.ِAnas**')
    },305);
})

client.login(process.env.BOT_TOKEN);