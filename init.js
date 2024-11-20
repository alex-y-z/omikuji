const fs = require('node:fs');
const path = require('node:path');
const util = require('node:util');
const readline = require('node:readline');

const prompt = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const ask = query => new Promise(resolve => 
	prompt.question(query, response => resolve(response))
);

(async () => {
	const clientId = await ask('Client ID: ');
	const token    = await ask('    Token: ');
	prompt.close();
	config = util.inspect({clientId: clientId, token: token});
	fs.writeFileSync(path.join(__dirname, 'config.js'), `module.exports = ${config}`);
})();