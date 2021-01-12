const Discord = require("discord.js")
module.exports = {
    name: 'embed',
    description: 'Embed / timetable test',
    execute (message, system, args) {
            const example_embed = new Discord.MessageEmbed()
        .setColor(system.config.embed_colors.other)
        .setTitle('Testing')
        .setURL('https://discordjs.guide/popular-topics/embeds.html#embed-preview/')
        .setAuthor('Dadakiki#1974', 'https://pcforum.hu/assets/site.pc/text/quicknews/17216/bill-gates-counting-to-10--dyn--fullwidth-tablet.jpg')
        .setDescription('Embed testing for timetable?')
        .setThumbnail('https://cloud9.edupage.org/cloud?z%3ACpSdfZ0GgsubWLnmlOMUO3eIdu0EK4LUAXSbGlKTp6SGbVyB2qcrANGuCJSOMufHMbBfB3eVEJrhYTIgBBXADQq9eD%2Bgo77WrczSVIEiUZ8%3D')
        .addFields(
            { name: `Regular field title`, value: `Some value here` },
            { name: `\u200B`, value: `\u200B` },
            { name: `Inline field title`, value: `Some value here`, inline: true },
            { name: `Inline field title`, value: `Some value here`, inline: true },
            { name: `Inline field title`, value: `Some value here`, inline: true },
        )
        .addField(`Inline field title`, `Some value here`, true)
        .setImage('https://i.imgur.com/wSTFkRM.png')
        .setTimestamp()
        .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
    
    message.channel.send(example_embed);
    }
}