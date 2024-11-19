const fs = require('node:fs');
const { SlashCommandBuilder } = require('discord.js');

const buffer = fs.readFileSync('./content/fortunes.txt');
const fortuneArray = buffer.toString().split(/\n%/);
const fortuneCount = fortuneArray.length;

function GetRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function Default() {
	return (`> ${fortuneArray[GetRandomInt(0, fortuneCount - 1)].trim()}`);
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fortune')
		.setDescription('Generates your fortune.'),
	
	async execute(interaction) {
		await interaction.reply(Default());
	},

	default: Default
};