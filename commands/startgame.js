const { SlashCommandBuilder } = require("discord.js");
const PocketBase = require("pocketbase/cjs");
const pb = new PocketBase("http://127.0.0.1:8090");

const game = {
  voice_channel: "",
  phraseCards: [],
  jobCards: [],
};

const initGame = async () => {
  const authData = await pb.admins.authWithPassword(
    process.env.POCKETBASE_USER,
    process.env.POCKETBASE_PASS
  );
  game.jobCards = await pb.collection("jobs").getFullList();
  game.phraseCards = await pb.collection("phrases").getFullList();
};

initGame();

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
      const cards = [];

      for (let i = 0; i < 3; i++) {
        const card =
          game.phraseCards[Math.floor(Math.random() * game.phraseCards.length)];
        cards.push(card.value);
      }

      let message = "Your cards are: \n";

      cards.map((card) => {message += `${card} \n`});

      console.log(message);

      cardMessages.push(member.send(message));
    });

    await Promise.all(cardMessages);

    const job = game.jobCards[Math.floor(Math.random() * game.jobCards.length)].value;

    await interaction.reply(
      `Game is starting \n The Job is: ${job}! \n Check your direct messages for your cards`
    );
  },
};
