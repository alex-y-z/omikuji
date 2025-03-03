const { SlashCommandBuilder, MessageFlags } = require('discord.js');

function GetRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function Default() {
	const nums = [];
	for (let i = 0; i < 6; i++) {
		nums[i] = GetRandomInt(1, 56);
	}
	return `**Lucky Numbers:**  ${nums.join(',  ')}`;
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('numbers')
		.setDescription('Generates your lucky numbers.')
		.addIntegerOption(option => 
			option.setName('amount')
				.setDescription('The amount to generate.')
				.setMinValue(1)
				.setMaxValue(12)
		)
		.addIntegerOption(option => 
			option.setName('min')
				.setDescription('The lower bound.')
				.setMinValue(0)
				.setMaxValue(1000)
		)
		.addIntegerOption(option => 
			option.setName('max')
				.setDescription('The upper bound.')
				.setMinValue(0)
				.setMaxValue(1000)
		),
	
	async execute(interaction) {
		const options = interaction.options;
		const amount = options.getInteger('amount') ?? 6;
		const min = options.getInteger('min') ?? 1;
		const max = options.getInteger('max') ?? (min + 55);

		if (max < min) {
			await interaction.reply({ content: '**Incompatible bounds:**  max < min', flags: MessageFlags.Ephemeral });
			return;
		}

		const nums = [];
		for (let i = 0; i < amount; i++) {
			nums[i] = GetRandomInt(min, max);
		}
		await interaction.reply(`**Lucky Numbers:**  ${nums.join(',  ')}`);
	},
	
	default: Default
};