//Load constans if needed HERE
const Discord = require("discord.js")
//Whole command export
module.exports = {
    name: 'Name of the command',
    description: 'What can it be used for/as',
    aliases: ['Other names of the command with divided by a , '],
    //What minimum needed to use this command
    permissions: ["multiple", "permissions"],
    //After how many seconds you can activate this command again
    cooldown: 5,
    //Only useable inside a server and cannot be executed in DMs
    guildOnly: true,
    //If it has an arguement
    args: true,
    //What is the argument / proper usage
    usage: '<user>',
    //What is executed inside the command
    execute(/*Load message or args if needed in this program*/) {
        //anything can be placed here
    }
}

module.exports = {
    name: '',
    description: '',
    aliases: ['', ''],
    permissions: ["", ""],
    cooldown: 5,
    guildOnly: true,
    args: true,
    usage: '<user>',
    execute(message, system, args) {

    }
}

//Statement that has only 2 outcome
("statement only T/F" ? "true" : "false")

// get channel by ID or name
try{
    const channel = client.channels.cache.find(c => c.name === system.config.chan_nameID.v)
    channel.send("message");return
}catch{
    const channel2 = client.channels.cache.get(system.config.chan_nameID.v)
    channel2.send("message");
}

// get role by ID
let myRole = message.guild.roles.cache.get("694602957672415362");
// get role by name
let myRole = message.guild.roles.cache.find(role => role.name === "Moderators");


// Index.js >>> try{}
let role = message.channel.permissionsFor(message.member).has("ADMINISTRATOR")
if (role) {
	//...
}
else {
	message.channel.send("error!!!")
}
/*
{
  ADMINISTRATOR: true,
  CREATE_INSTANT_INVITE: true,
  KICK_MEMBERS: true,
  BAN_MEMBERS: true,
  MANAGE_CHANNELS: true,
  MANAGE_GUILD: true,
  ADD_REACTIONS: true,
  VIEW_AUDIT_LOG: true,
  PRIORITY_SPEAKER: true,
  STREAM: true,
  VIEW_CHANNEL: true,
  SEND_MESSAGES: true,
  SEND_TTS_MESSAGES: true,
  MANAGE_MESSAGES: true,
  EMBED_LINKS: true,
  ATTACH_FILES: true,
  READ_MESSAGE_HISTORY: true,
  MENTION_EVERYONE: true,
  USE_EXTERNAL_EMOJIS: true,
  VIEW_GUILD_INSIGHTS: true,
  CONNECT: true,
  SPEAK: true,
  MUTE_MEMBERS: true,
  DEAFEN_MEMBERS: true,
  MOVE_MEMBERS: true,
  USE_VAD: true,
  CHANGE_NICKNAME: true,
  MANAGE_NICKNAMES: true,
  MANAGE_ROLES: true,
  MANAGE_WEBHOOKS: true,
  MANAGE_EMOJIS: true
}

---general permissions---
ADMINISTRATOR
VIEW_AUDIT_LOG
MANAGE_GUILD
MANAGE_ROLES
MANAGE_CHANNELS
KICK_MEMBERS
BAN_MEMBERS
CREATE_INSTANT_INVITE
CHANGE_NICKNAME
MANAGE_NICKNAMES
MANAGE_EMOJIS
MANAGE_WEBHOOKS
VIEW_CHANNEL (?)
---text permissions---
SEND_MESSAGES
SEND_TTS_MESSAGES
MANAGE_MESSAGES
EMBED_LINKS
ATTACH_FILES
READ_MESSAGE_HISTORY
MENTION_EVERYONE
USE_EXTERNAL_EMOJIS
ADD_REACTIONS
---voice permissions---
CONNECT
SPEAK
STREAM
MUTE_MEMBERS
DEAFEN_MEMBERS
MOVE_MEMBERS
USE_VAD (?)
PRIORITY_SPEAKER


---what---
VIEW_GUILD_INSIGHTS: true,
*/