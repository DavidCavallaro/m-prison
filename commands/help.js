// Dependencies
let Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
    name: 'help',
    execute(client, message){
        if (message.guild) {
            message.channel.send('guarda i tuoi dm :pushpin:');
            message.delete();
            let embed = new Discord.MessageEmbed()
                .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }), 'https://discord.com/api/oauth2/authorize?client_id=781103301138710559&permissions=8&scope=bot')
            .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setTitle('Help')
            .setColor('7289da')
                .setDescription(`vuoi invitarmi nel tuo server?\n[clicca qua!](https://discord.com/api/oauth2/authorize?client_id=781103301138710559&permissions=8&scope=bot)`)
                .addField(`${prefix}giveaway [duration] [prize]`, 'per creare giveaway belli e di successo')
            .addField('Example:', `${prefix}giveaway 10 clicca sulla reazione per ricevere il nitro`)
                .setFooter('bot creato da Ale78', client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            message.author.send(embed);
            }
        if (!message.guild) {
            const embed = new Discord.MessageEmbed()
                .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }), 'https://discord.com/api/oauth2/authorize?client_id=781103301138710559&permissions=8&scope=bot')
            .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setTitle('Help')
            .setColor('7289da')
                .setDescription(`vuoi invitarmi nel tuo server?\n[Clicca qua!](https://discord.com/api/oauth2/authorize?client_id=781103301138710559&permissions=8&scope=bot)`)
            .addField(`${prefix}giveaway [duration] [prize]`, 'per creare giveaway belli e di successo')
            .addField('Example:', `${prefix}giveaway 10 clicca sulla reazione per ricevere il nitro!`)
            .setFooter('bot creato da Ale78', client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            message.author.send(embed);
        }
    }
}
