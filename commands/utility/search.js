const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('search')
        .setDescription('Search is currently under development ⚒️'),
    async execute(interaction) {
        await interaction.reply("Reply to search is currently under development ⚒️");
    },
};