const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('author')
        .setDescription('Provides information about the author.'),
    async execute(interaction) {
        await interaction.reply("Reply under construction");
    },
};