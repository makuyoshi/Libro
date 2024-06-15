const { SlashCommandBuilder } = require('discord.js');
const { googleBooksApiKey } = require('../../config.json');

const authorInfoTemplate = {
    color: 0x0099ff,
    title: '',
    url: '',
    description: '',
    fields: []
};

module.exports = {
    data: new SlashCommandBuilder()
        .setName('search')
        .setDescription('/search <query> | Search for books.')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('The input to echo back')
                .setRequired(true)),
    async execute(interaction) {
        const query = interaction.options.getString('input');
        const authorInfo = {...authorInfoTemplate };

        try {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${googleBooksApiKey}`);
            const data = await response.json();

            console.log(data)

            authorInfo.title = `Displaying results for: ${query}`;
            authorInfo.description = `Found ${data.totalItems} items.`

            const books = data.items.map(item => ({
                name: `${item.volumeInfo.title? item.volumeInfo.title : 'Unknown Title'}`,
                value: item.volumeInfo.authors.join(', ') || 'No date found',
                inline: true
            }));

            authorInfo.fields = books.slice(0, 9);

            await interaction.reply({ embeds: [authorInfo] });
        } catch (error) {
            console.error('Error fetching books:', error);
            await interaction.reply('Failed to fetch books.');
        }
    },
};
