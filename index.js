/*
 * @copyright
 * Please keep the credits, respect the developers, this text didn't affect please respect..
 *
 * DarkWind - for bot and api script
 * 2013 Chris Churchwell for RCON class
 *
*/
const Discord = require("discord.js");
const client = new Discord.Client();
const axios = require("axios");

client.config = {
  prefix: "your_prefix",
  token: "your_bot_token",
  server_ip: "your_server_ip",
  server_port: "your_server_rcon_port",
  server_pw: "your_server_rcon_password"
}  

//ready
client.on("ready", () => {
  console.log(`${client.user.tag} - bot is working.`); 
});

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(client.config.prefix) !== 0) return;
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === "rcon") {      
    let cmdarg = args.join(" ")
    if(!cmdarg) return message.reply("Syntax: >rcon <command>");
    message.react('👍');  

    axios.get(`http://your_ip/api.php?&command=`+ cmdarg + `&server_ip=` + client.config.server_ip + `&server_port=` + client.config.server_port + `&server_pw=` + client.config.server_pw).then(response => {
      message.reply(response.data.slice(0, -2));           
    })
  }
});
client.login(client.config.token)