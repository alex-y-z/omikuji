const { SlashCommandBuilder } = require('discord.js');

const answers = [
	'It is certain', 'It is decidedly so', 'Without a doubt', 'Yes definitely', 'You may rely on it',
	'As I see it, yes', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes', 'Reply hazy, try again',
	'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again',
	'Don\'t count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful'
];
const bound = answers.length - 1;

function GetRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function Default() {
	return `:8ball: ${answers[GetRandomInt(0, bound)]}`;
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('shake')
		.setDescription('Shakes the Magic 8 Ball.'),
	
	async execute(interaction) {
		await interaction.reply(Default());
	},
	
	default: Default
};