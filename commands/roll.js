const { SlashCommandBuilder } = require('discord.js');

function GetRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function Default() {
	const nums = [];
	for (let i = 0; i < 2; i++) {
		nums[i] = GetRandomInt(1, 6);
	}
	return `:game_die: ${nums.join('   :game_die: ')}`;
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roll')
		.setDescription('Rolls a set of dice.')
		.addIntegerOption(option => 
			option.setName('amount')
				.setDescription('The amount to roll.')
				.setMinValue(1)
				.setMaxValue(12)
		)
		.addIntegerOption(option => 
			option.setName('sides')
				.setDescription('The number of sides.')
				.setMinValue(4)
				.setMaxValue(256)
		),
	
	async execute(interaction) {
		const options = interaction.options;
		const amount = options.getInteger('amount') ?? 2;
		const sides = options.getInteger('sides') ?? 6;

		const nums = [];
		for (let i = 0; i < amount; i++) {
			nums[i] = GetRandomInt(1, sides);
		}
		await interaction.reply(`:game_die: ${nums.join('   :game_die: ')}`);
	},
	
	default: Default
};