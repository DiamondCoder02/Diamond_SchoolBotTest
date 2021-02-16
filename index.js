//const parser = require('rss-parser')
/*** Discord, fs load ***/
const Discord = require('discord.js'), client = new Discord.Client(), cooldowns = new Discord.Collection(), fs = require('fs'), fsp = require('fs').promises, path = require('path')
client.commands = new Discord.Collection();
client.commands= new Map();
/*** config and language load ***/
let config = require('./config.json');
const lang = require('./languages/' + config.language + '.json');
const system = {Discord, client, config, lang, fs};
/*** Console logs ***/
//console.log(client);
//client.on("error", (e) => console.error(e))
//client.on("warn", (e) => console.warn(e))
//client.on("debug", (e) => console.info(e))
client.login(config.token);

//Event reader
fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      const event = require(`./events/${file}`);
      // Get just the event name from the file name
      let eventName = file.split(".")[0];
      // super-secret recipe to call events with all their proper arguments *after* the `client` var.
      // this means each event will be called with the client argument
      client.on(eventName, event.bind(null, system));
      delete require.cache[require.resolve(`./events/${file}`)];
    });
});

client.on('message', async function(message){
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;
    const cmdArgs = message.content.slice(config.prefix.length).trim().split(/ +/);
    let cmdName = cmdArgs.shift().toLowerCase();
    console.log(cmdName, cmdArgs)
});

//Command handler
(async function registerCommands(dir = 'commands') {
    //read directory
    let files = await fsp.readdir(path.join(__dirname, dir));
    //loop through each file
    for(let file of files) {
        let stat = await fsp.lstat(path.join(__dirname, dir, file));
        if(stat.isDirectory())
            registerCommands(path.join(dir, file));
        else{
            if(file.endsWith(".js")){
                let cmdName = file.substring(0, file.indexOf(".js"));
                let cmdModule = require(path.join(__dirname, dir, file));
                client.commands.set(cmdName, cmdModule);
                //console.log(client.commands)
            }
        }
    }
})()

