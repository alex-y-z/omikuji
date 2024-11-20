## Prerequisites

- [Node.js v20.6.0+](https://nodejs.org/en/download/prebuilt-installer)

## Instructions

Start by [setting up a bot application](https://discordjs.guide/preparations/setting-up-a-bot-application.html).
Make note of the following for configuration:
- **Client ID:** Developer Portal > General Information > Application ID
- **Token:** Developer Portal > Bot > Token

### Configuration

```sh
npm install  # Install dependencies
npm run init # Set credentials and deploy commands
```

### Execution

```sh
npm start # Bring the bot online
```

## Commands

```js
/cookie
/fortune
/numbers amount: [1, 12] min: [0, 1000] max: [0, 1000]
/roll amount: [1, 12] sides: [4, 256]
/flip call: 'heads' | 'tails'
```

## Attributions

- [ruanyf/fortunes](https://github.com/ruanyf/fortunes)
- [discord.js](https://github.com/discordjs/discord.js)