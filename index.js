//const parser = require('rss-parser')
/*** Discord, fs load ***/
const Discord = require('discord.js'), client = new Discord.Client(), cooldowns = new Discord.Collection(), fs = require('fs'), fsp = require('fs').promises, path = require('path')
client.commands = new Discord.Collection();
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

//Command handler
(async function registerCommands(dir = 'commands') {
    let files = await fsp.readdir(path.join(__dirname, dir));
    console.log(files)

    for(let file of files) {
        let stat = await fs.lstat(path.join(__dirname, dir, file));
        if(stat.isDirectory())
            registerCommands(path.join(dir, file));
        else{
            if(file.endsWith(".js")){
                
            }
        }
    }
})()