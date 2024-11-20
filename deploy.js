const fs = require('node:fs');
const path = require('node:path');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');
const { clientId, token } = require('./config.js');

const commands = [];
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(token);
const route = process.argv.includes('--guild')
	? Routes.applicationGuildCommands(clientId, process.env.GUILD_ID)
	: Routes.applicationCommands(clientId);

switch (process.env.npm_lifecycle_event) {
	case 'deploy':
		rest.put(route, { body: commands })
			.then(data => console.log(`Successfully registered ${data.length} commands.`))
			.catch(console.error);
		break;
	case 'destroy':
		rest.put(route, { body: [] })
			.then(() => console.log('Successfully deleted all commands.'))
			.catch(console.error);
		break;
}