//const parser = require('rss-parser')
/*** Discord, fs load ***/
const Discord = require('discord.js')//, fs = require('fs')
const client = new Discord.Client();
client.commands = new Discord.Collection();
const cooldowns = new Discord.Collection();
/*** config and language load ***/
let config = require('./config.json');
//const lang = require('./languages/' + config.language + '.json');
const system = {Discord, client, config};//, lang, fs};
/*** Console logs ***/
console.log(client);
//client.on("error", (e) => console.error(e))
//client.on("warn", (e) => console.warn(e))
//client.on("debug", (e) => console.info(e))
client.login(config.token);