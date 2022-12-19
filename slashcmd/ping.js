const { SlashCommandBuilder } = require('@discordjs/builders')
const { EmbedBuilder } = require('discord.js')
const Discord = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("ping"),

    async run (fur, interaction) {

      interaction.reply("pong!")
      
    }
}