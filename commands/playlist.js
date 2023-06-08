const { SlachCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlachCommandBuilder()
        .setName("playlist")
        .setDescription("Ouça ágora a melhor playlist para estudos"),

    async execute(interaction) {
        await interaction.reply("https://open.spotify.com/artist/0Y5tJX1MQlPlqiwlOH1tJY?si=IVw17zPzTOuXi0Q_39_FJQ")
        await interaction.reply("https://open.spotify.com/artist/13ubrt8QOOCPljQ2FL1Kca?si=N3sNNhwaSNmaYq_5TXR3gw")
    }
}