const { SlashCommandBuilder } = require('discord.js');
const { googleBooksApiKey } = require('../../config.json');

const authorInfoTemplate = {
    color: 0x0099ff,
    title: '',
    url: '',
    description: 'Found books matching query.',
    thumbnail: {
        url: 'https://i.imgur.com/AfFp7pu.png',
    },
    fields: []
};

module.exports = {
    data: new SlashCommandBuilder()
        .setName('sa')
        .setDescription('/sa <query> | Search for books.'),
    async execute(interaction) {
        const query = "Brandon%20Sanderson" /*interaction.options.getString('query');*/
        const authorInfo = {...authorInfoTemplate };

        try {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${googleBooksApiKey}`);
            const data = await response.json();

            console.log(data)

            authorInfo.title = query;

            const books = data.items.map(item => ({
                name: `${item.volumeInfo.title? item.volumeInfo.title : 'Unknown Title'}`,
                value: item.volumeInfo.publishedDate || 'No date found',
                inline: true
            }));

            authorInfo.fields = books.slice(0, 7);

            await interaction.reply({ embeds: [authorInfo] });
        } catch (error) {
            console.error('Error fetching books:', error);
            await interaction.reply('Failed to fetch books.');
        }
    },
};
