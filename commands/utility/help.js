const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');

const helpEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('List of Commands')
    .setDescription('Here are all available commands.')
    .setFields([
        { name: '/help ✅', value: 'Displays this help menu.' },
        { name: '/search 🟨', value: 'Searches for content.' },
        { name: '/author ❌', value: 'Shows author information.' },
        { name: '/covers ❌', value: 'Provides cover images.' },
        { name: '/genre ❌', value: 'Lists genres.' }
    ]);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('/help | Show list of commands.'),
    async execute(interaction) {
        await interaction.reply({embeds: [helpEmbed]});
    },
}