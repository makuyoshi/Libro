const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('song')
        .setDescription('Replies with info about the given song'),
    async execute(interaction) {
        await interaction.reply('Reply to "/book" works ✅');
    },
};