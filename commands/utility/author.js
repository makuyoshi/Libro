const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

const authorInfo = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Some title')
    .setURL('https://discord.js.org/')
    .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
    .setDescription('Some description here')
    .setThumbnail('https://i.imgur.com/AfFp7pu.png')
    .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
    .setImage('https://i.imgur.com/AfFp7pu.png')
    .setTimestamp()
    .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });


module.exports = {
    data: new SlashCommandBuilder()
        .setName('author')
        .setDescription('Provides information about the author.'),
    async execute(interaction) {
        await interaction.reply({embeds: authorInfo});
    },
};