const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('album')
        .setDescription('Provides information about the album.'),
    async execute(interaction) {
        await interaction.reply(`Reply to "album" works ✅`);
    },
};