// Display covers of book based on a search query.
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('covers')
        .setDescription('/covers <book_name> | Display covers for given book(s).'),
    async execute(interaction) {
        await interaction.reply("Reply under construction");
    },
}