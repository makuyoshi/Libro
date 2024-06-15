const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ganre')
        .setDescription('/genre <genre_name> | Explore popular books in a specific genre.'),
    async execute(interaction) {
        await interaction.reply('Reply to book is currently under development ⚒️');
    },
};