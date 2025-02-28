const { SlashCommandBuilder, MessageFlags } = require('discord.js');

function GetRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pick')
		.setDescription('Randomly selects from a list.')
		.addStringOption(option =>
			option.setName('list')
				.setDescription('The list of comma-separated items.')
				.setRequired(true)
		)
		.addIntegerOption(option =>
			option.setName('amount')
				.setDescription('The number of items to select.')
				.setMinValue(1)
		),
	
	async execute(interaction) {
		const options = interaction.options;
		const list = options.getString('list').split(',').map(str => str.trim());
		const amount = options.getInteger('amount') ?? 1;

		if (amount > list.length) {
			await interaction.reply({ content: '**Incompatible values:**  amount > items', flags: MessageFlags.Ephemeral });
			return;
		}

		const selected = [];
		for (let i = 0; i < amount; i++) {
			selected.push(list.splice(GetRandomInt(0, list.length - 1), 1)[0]);
		}
		await interaction.reply(selected.join(', '));
	}
};