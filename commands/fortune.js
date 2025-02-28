const fs = require('node:fs');
const { SlashCommandBuilder } = require('discord.js');

const buffer = fs.readFileSync('./content/fortunes.txt');
const fortunes = buffer.toString().split(/\n%/);
const bound = fortunes.length - 1;

function GetRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function Default() {
	return `> ${fortunes[GetRandomInt(0, bound)].trim().replaceAll('\n', '\n> ')}`;
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