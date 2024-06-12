const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('artist')
        .setDescription('Provides information about the artist.'),
    async execute(interaction) {
        await interaction.reply(`Reply to "artist" works ✅`);
    },
};