const Discord = require("discord.js");
const bot = new Discord.Client();
const mainFunction = require("./mainFunction.js");

bot.on("message", receiveMessage);

bot.login("ODYyMTEzMDE3MDc1ODU5NDU2.YOTnUA.G30bC3bZQgnHMQFp0p_7YG8fqmg");