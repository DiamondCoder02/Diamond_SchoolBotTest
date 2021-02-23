module.exports = (system) => {
    console.log('Ready!');
    system.client.user.setActivity("(^///^) Sticky wicky OwO")
        /*
    "\n\t" + system.lang.ready.login + system.client.user.tag
    + "\n\n\t" + system.lang.ready.bot_done + system.config.botdone
    + "\n\t" + system.lang.ready.last_edit + system.config.lastedit
    + "\n\n\t" + system.lang.ready.prefix + system.config.prefix
    + "\n\t" + system.lang.ready.start_lang + system.config.language
    + "\n\n\t" + system.lang.ready.start + system.client.readyAt
        )

    system.client.user.setActivity(system.lang.ready.set_activity + system.config.prefix + 'help')

    const ready_embed = new system.Discord.MessageEmbed()
    .setColor(system.config.embed_colors.blue)
    .addField(system.config.chan_message.system, 
        `${system.lang.ready.prefix}: ${system.config.prefix} \n${system.lang.ready.start_lang} ${system.config.language}`)

    system.config.get_channel(system.config.chan_nameID.system).send(ready_embed)
        */
}