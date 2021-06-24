<h1 align="center">
  <br>
  <a href="https://github.com/sabattle/CalypsoBot"><img src="./data/images/Calypso_Title.png"></a>
  <br>
  MCManagement Discord Bot
  <br>
</h1>

<h3 align=center>A Discord bot for interacting with Minecraft RCON commands built with <a href=https://github.com/discordjs/discord.js>discord.js</a></h3>


<div align=center>

  <a href="https://discord.gg/z553PjxyUM">
    <img src="https://discordapp.com/api/guilds/857648533201223750/widget.png?style=shield" alt="shield.png">
  </a>

  <a href="https://github.com/discordjs">
    <img src="https://img.shields.io/badge/discord.js-v12.3.1-blue.svg?logo=npm" alt="shield.png">
  </a>

  <a href="https://github.com/darkwind01/mcmanagement/blob/develop/LICENSE">
    <img src="https://img.shields.io/badge/license-GNU%20GPL%20v3-green" alt="shield.png">
  </a>

</div>

<p align="center">
  <a href="#about">About</a>
  •
  <a href="#features">Features</a>
  •
  <a href="#installation">Installation</a>
  •
  <a href="#setting-up">Setting Up</a>
  •
  <a href="#license">License</a>
  •
  <a href="#credits">Credits</a>
</p>

## About

MCManagement is an open source, Discord bot that is constantly growing. With this bot you can connect to your minecraft servers and ran commands from discord.

If you liked this repository, feel free to leave a star ⭐!

## Features

**Free** version:
  * Acces to execute command on a single server.
  * No logs
  * API without licence key (protection for api steal).
  * Simple bot (only index.js)
  * No updates

**Paid** version:
  * Cooldown commands
  * Multi servers support
  * Database connection (for Logs & multi servers)
  * Include future updates



## Installation

You can clone this repo and host the bot yourself.
```
git clone https://github.com/darkwind01/mcmanagement.git
```
After cloning, run an
```
npm install discord.js & axios
```
to snag all of the dependencies. Of course, you need [node](https://nodejs.org/en/) installed.
## Setting Up

(BOT) On `index.js` you have 'client.config' where need to edit like this:
```
client.config = {
  prefix: "Your prefix",
  token: "Your discord dev token",
  server_ip: "Server ip",
  server_port: "Server port",
  server_pw: "Server rcon password"
} 
```
(MINECRAFT SERVER)
On `server_properties` you need to edit like this:
```
enable-rcon=false to enable-rcon=true
rcon.password= to rcon.password=my_rcon_password
rcon.port=25575 to rcon.port=your_port (you can leave default)
```
Visit the Discord [developer portal](https://discordapp.com/developers/applications/) to create an app and use the client token you are given for the `token` option.

Once done, feel free to launch bot using the command `node index.js`.

![Alt Text](https://i.imgur.com/SLJCN6y.gif)

## To-Do

McManagement is in a continuous state of development. New features/updates may come at any time for paid version. Some pending ideas are:

  * Check host
  * check online members
  * and more.

## License

Released under the [GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0.en.html) license.

## Credits

* **Chris Churchwell** - *RCON class*
* **DarkWind#6969** - *api and d.js bot* - [github](https://github.com/darkwind01)
* **xIonut#9999** - *Beta tester* - [github](https://github.com/xIonut)
