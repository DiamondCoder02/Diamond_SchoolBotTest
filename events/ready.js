module.exports = (system) => {
    console.log('Ready!');
    system.client.user.setActivity("(^///^) I love the D cheese OwO")
        /*
    "\n\t" + system.lang.ready.login + system.client.user.tag
    + "\n\n\t" + system.lang.ready.prefix + system.config.prefix
    + "\n\t" + system.lang.ready.start_lang + system.config.language
    + "\n\n\t" + system.lang.ready.start + system.client.readyAt
        )
        */
    const ready_embed = new system.Discord.MessageEmbed()
    .setColor(system.config.embed_colors.blue)
    .addField("Bot started! \n" 
    + "Starting prefix:" + `${system.config.prefix}` + "\nLanguage: " + `${system.config.language}`)

    const channel2 = system.client.channels.cache.get(699883301627887657)    
    const channel = system.client.channels.cache.find(c => c.name === "bot-test-and-fun")
    try{
        channel.send(ready_embed);return
    }catch{  
        channel2.send(ready_embed);return
    }
}