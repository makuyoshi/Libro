const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('book')
        .setDescription('Replies with info about the given book.'),
    async execute(interaction) {
        await interaction.reply('Reply to book is currently under development ⚒️');
    },
};