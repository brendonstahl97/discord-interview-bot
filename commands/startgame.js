const { SlashCommandBuilder } = require("discord.js");

const game = {
  voice_channel: "",
};

module.exports = {
  data: new SlashCommandBuilder()
    .setName("startgame")
    .setDescription("Begin the interview game"),
  async execute(interaction) {
    if (!interaction.member.voice.channel) {
      return await interaction.reply({
        content: "You need to enter a voice channel before use the command",
        ephemeral: true,
      });
    }

    game.voice_channel = interaction.member.voice.channel;

    const cardMessages = [];
    
    game.voice_channel.members.map(async (member) => {
        cardMessages.push(member.send("Your Cards are: \n The Big Black One \n Gooble Gobble \n Your mom's a hoe"));
    })

    await Promise.all(cardMessages);

    await interaction.reply("Game is starting \n The Job is: Hairdresser! \n Check your direct messages for your cards");
  },
};
