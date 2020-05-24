const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log('Pinging');
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const  { token, prefix } = require("./config.js");
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log('I am ready to uset');
});



client.on('message', async message => {
 if (message.content ==="hi") {
message.channel.send('hello');
 }
});

client.on('message', async message => {
 if (message.content ==="info") { //info create ad bot
message.channel.send('``saturday, october 12, 2019``');
 }
});





client.on('message', async message => {
 if (message.content ==="r.invite bot") {
message.channel.send('``☻cara nya copy dulu **https sampai bot** selanjutnya copy paste di google kalian✔``');
 }
});

client.on("guidMemberAdd", member => {
          
  let guild = member.guild; //member guild 
  let akun = guild.memberCount;//guild member count 


  let total = member.guild.channels.get(''); //channels voice total users
  let totalonline = member.guild.channels.get(''); //channels voice total online

  total.setName(`total user: ${akun}`); 
  totaloffline.setName(`Total online: ${guild.members.filter(m => m.user.bot).size}`);
       
              });

client.on("guidMemberRemove", member => {
          
  let guild = member.guild;  //member guild 
  let akun = guild.memberCount;//guild member count 


  let total = member.guild.channels.get(''); //channels voice total users
  let totaloffline = member.guild.channels.get('');//channels voice total online

  total.setName(`total user: ${akun}`); 
  totaloffline.setName(`Total offline: ${guild.members.filter(m => m.user.bot).size}`);
       
              });
  
client.login(token); //the bot token is switched in config.json
