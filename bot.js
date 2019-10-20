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


const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log('saya siap digunakan');
});

client.on('message', async message => {
 if (message.content ==="r.admin") {
message.channel.send('maaf sekarang saya lagi sibuk @アディティアの友達♛');
 }
});

client.on('message', async message => {
 if (message.content ==="r.hi") {
message.channel.send('selamat anda sudah bergabung di server kamu harap baca peraturannya dulu');
 }
});

client.on('message', async message => {
 if (message.content ==="r.bot info") {
message.channel.send('created by アディティアの友達♛');
 }
});

client.on('message', async message => {
 if (message.content ==="r.bot info") {
message.channel.send('``saturday, october 12, 2019``');
 }
});

client.on('message', async message => {
 if (message.content ==="r.help") {
message.channel.send('**――――Commands BOT————**');
 }
});

client.on('message', async message => {
 if (message.content ==="r.help") {
message.channel.send('> Music▶ r.play r.stop r.pause r.resume');
 }
});

client.on('message', async message => {
 if (message.content ==="r.help") {
message.channel.send('``➡r.hi``');
 }
});

client.on('message', async message => {
 if (message.content ==="r.help") {
message.channel.send('``➡r.bot info``');
 }
});

client.on('message', async message => {
 if (message.content ==="r.help") {
message.channel.send('``➡r.invite bot``');
 }
});

client.on('message', async message => {
 if (message.content ==="r.help") {
message.channel.send('``➡r.admin``');
 }
});

client.on('message', async message => {
 if (message.content ==="r.invite bot") {
message.channel.send('``➡https://discordapp.com/oauth2/authorize?client_id=632252966564397107&scope=bot♥``');
 }
});

client.on('message', async message => {
 if (message.content ==="r.invite bot") {
message.channel.send('``☻cara nya copy dulu **https sampai bot** selanjutnya copy paste di google kalian✔``');
 }
});

client.on("guidMemberAdd", member => {
          
  let guild = member.guild;
  let akun = guild.memberCount;


  let total = member.guild.channels.get('');
  let totaloffline = member.guild.channels.get('');

  total.setName(`total user: ${akun}`); 
  totaloffline.setName(`Total offline: ${guild.members.filter(m => m.user.bot).size}`);
       
              });

client.on("guidMemberRemove", member => {
          
  let guild = member.guild;
  let akun = guild.memberCount;


  let total = member.guild.channels.get('');
  let totaloffline = member.guild.channels.get('');

  total.setName(`total user: ${akun}`); 
  totaloffline.setName(`Total offline: ${guild.members.filter(m => m.user.bot).size}`);
       
              });
  
client.login(procces.env.BOT_TOKEN);
