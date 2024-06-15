// Fetch and display information about an author, including their most popular works, biography, and photo.
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('author')
        .setDescription('/author <author_name> | Get information about an author.'),
    async execute(interaction) {
        await interaction.reply("Reply under construction");
    },
};