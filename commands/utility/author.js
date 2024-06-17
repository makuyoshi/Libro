const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('author')
        .setDescription('/author <author_name> | Get information about an author.')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('The input to echo back')
                .setRequired(true)),
    async execute(interaction) {
        const authorName = interaction.options.getString('input');
        try {
            const url = `https://openlibrary.org/search/authors.json?q=${encodeURIComponent(authorName)}`;

            const response = await fetch(url);
            const data = await response.json();
            const authors = data.docs;

            if (authors.length > 0) {
                const author = authors[0];

                const embed = new EmbedBuilder()
                    .setColor('#0099ff')
                    .setTitle(`${author.name}`)
                    .setURL(`https://openlibrary.org/search?q=${encodeURIComponent(authorName)}`)
                    .setDescription(`**Genre:** ${author.top_subjects[0]}`)
                    .addFields({name: "**Most famous work:**", value: `${author.top_work}`, inline: true})
                    .setFooter({ text: 'The /author command is under development ⚠️', iconURL: 'https://i.imgur.com/op3Vq3Q.jpeg' }); // remove later


                await interaction.reply({ embeds: [embed] });
            } else {
                await interaction.reply(`Author "${authorName}" not found.`);
            }
        } catch (error) {
            console.error(error);
            await interaction.reply('An error occurred while fetching author information.');
        }
    },

};
