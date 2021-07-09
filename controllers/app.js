const Discord = require("discord.js");
const bot = new Discord.Client();
const mainFunction = require("./switchMainFunction.js");
//const mainFunction = require("./mainFunction.js");

bot.on("message", mainFunction.receiveMessage);

bot.login("ODYyMTEzMDE3MDc1ODU5NDU2.YOTnUA.xwFNSzHgUdaSgRcNv1HApz8hoFY");