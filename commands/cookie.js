const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cookie')
		.setDescription('Opens a fortune cookie.'),
	async execute(interaction) {
		const fortune = interaction.client.commands.get('fortune').default();
		const nums = interaction.client.commands.get('numbers').default();
		await interaction.reply(fortune + '\n\n' + nums);
	}
};