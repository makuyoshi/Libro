const { SlashCommandBuilder, EmbedBuilder} = require('discord.js')
const { googleBooksApiKey } = require('../../config.json');

const authorInfo = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle(`authorName`)
    .setDescription(`Found totalItems volumes.`)
    .setThumbnail('https://i.imgur.com/AfFp7pu.png')
    .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
    .setTimestamp()

module.exports = {
    data: new SlashCommandBuilder()
        .setName('sa')
        .setDescription('/sa <author> | Search by author name.'),
    async execute(interaction) {
        await interaction.reply({embeds: [authorInfo]});
    },
};