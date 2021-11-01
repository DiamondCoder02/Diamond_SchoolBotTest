module.exports = {
    name: 'Server Info',
    aliases: ['si', 'server'],
    cooldown: 30,
    guildOnly: true,
    execute(message, system, args) {
            const si_embed = new system.Discord.MessageEmbed()
        .setColor(system.config.embed_colors.other)
        .setTitle("test")//system.lang.server_info.setTitle)
        .setThumbnail(`https://e7.pngegg.com/pngimages/574/586/png-clipart-discord-computer-icons-logo-computer-software-others-miscellaneous-blue.png`)
        /*.addFields(
            {name: system.lang.server_info.aF1_1, value: `${message.guild.name} / ${message.guild.nameAcronym}`, inline:true},
            {name: system.lang.server_info.aF1_2, value: message.guild.region, inline:true},
            {name: system.lang.server_info.aF1_3, value: message.guild.memberCount, inline:true},
            {name: system.lang.server_info.aF1_4, value: message.guild.owner, inline:true},
            {name: system.lang.server_info.aF1_5, value: message.guild.createdAt},
        )
        .addField(`\u200B`, `**${system.lang.server_info.aF2}**`)
        .addField(`${system.lang.server_info.aF22}`, `${message.guild.me} \n ${message.guild.joinedAt}`, true)
        .addField(`\u200B`, `**${system.lang.server_info.aF3}**`)
        .addFields(
            {name: system.lang.server_info.aF33_1, value: message.guild.premiumSubcriptionCount, inline:true},
            {name: system.lang.server_info.aF33_2, value: message.guild.premiumTier, inline:true},
        )
        .addField(`\u200B`, `**${system.lang.server_info.aF4}**`)
        .addFields(
            {name: system.lang.server_info.aF44_1, value: (message.guild.available ? system.lang.t : system.lang.f), inline:true},
            {name: `${system.lang.server_info.aF44_2}`, value: message.guild.systemChannel, inline:true},
            {name: '\u200B', value: '\u200B', inline:true},
            {name: system.lang.server_info.aF44_3, value: message.guild.mfaLevel, inline:true},
            {name: system.lang.server_info.aF44_4, value: message.guild.explicitContentFilter, inline:true},
            {name: system.lang.server_info.aF44_5, value: (message.guild.partnered ? system.lang.t : system.lang.f)},
        )*/
        .setTimestamp()
        .setFooter(`[]~(￣▽￣)~*`);

    message.channel.send(si_embed);
    }
}