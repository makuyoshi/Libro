const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');

const embed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Some title')
    .setDescription('')
    .setThumbnail('https://i.imgur.com/AfFp7pu.png')
    .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
    .setImage('https://i.imgur.com/AfFp7pu.png')
    .setTimestamp()
    .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

module.exports = {
    data: new SlashCommandBuilder()
        .setName('album')
        .setDescription('Provides information about the album.'),
    async execute(interaction) {
        await interaction.reply({embeds: [embed]});
    },
};