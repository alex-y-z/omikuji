const { SlashCommandBuilder } = require('discord.js');

function Default() {
	const outcome = (Math.random() < 0.5) ? 'Heads' : 'Tails';
	return `:coin: ${outcome}`;
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('flip')
		.setDescription('Flips a coin.')
		.addStringOption(option =>
			option.setName('call')
				.setDescription('The favored outcome.')
				.addChoices(
					{ name: 'heads', value: 'Heads' },
					{ name: 'tails', value: 'Tails' }
				)
		),
	
	async execute(interaction) {
		const options = interaction.options;
		const call = options.getString('call');
		const outcome = (Math.random() < 0.5) ? 'Heads' : 'Tails';
		let response = `:coin: ${outcome}`;

		if (call) {
			response += (call === outcome) ? ' :trophy:' : ' :sob:';
		}
		await interaction.reply(response);
	},

	default: Default
};