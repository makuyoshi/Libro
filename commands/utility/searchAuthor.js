const { SlashCommandBuilder } = require('discord.js');
const { googleBooksApiKey } = require('../../config.json');

const authorInfoTemplate = {
    color: 0x0099ff,
    title: 'Book Titles',
    url: 'https://discord.js.org',
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
        const query = "" /*interaction.options.getString('query');*/
        const authorInfo = {...authorInfoTemplate };

        try {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=Brandon%20Sanderson&key=${googleBooksApiKey}`);
            const data = await response.json();

            console.log(data)

            const books = data.items.map(item => ({
                name: `${item.volumeInfo.title? item.volumeInfo.title : 'Unknown Title'}`,
                value: item.volumeInfo.publishedDate.join(', ') || 'No authors found',
                inline: true
            }));

            authorInfo.fields = books.slice(0, 5);

            await interaction.reply({ embeds: [authorInfo] });
        } catch (error) {
            console.error('Error fetching books:', error);
            await interaction.reply('Failed to fetch books.');
        }
    },
};
