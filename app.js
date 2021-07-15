const Discord = require("discord.js");
const bot = new Discord.Client();
const mainFunction = require("./controllers/mainFunction.js");
require('dotenv/config');

bot.on("message", mainFunction.receiveMessage);

bot.login(process.env.DISCORD_TOKEN);