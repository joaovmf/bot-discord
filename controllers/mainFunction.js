const Discord = require("discord.js");
const commands = require("../resources/commands.js");
const functions = require("./functions.js");

receiveMessage = (message) => {
  const { channel, content, author } = message;
  if (author.bot == false) {
    const authorMsg = author.username;
    switch (content) {
      case "!iniciar":
        channel.send(`Olá! Seja muito bem vindo, ${authorMsg}. Eu sou o bot do João. Abaixo você verá a minha lista completa de comandos:`);
        const msg = new Discord.MessageEmbed();
        msg.setTitle("LISTA DE COMANDOS");
        msg.setColor("#4287f5");
        msg.setDescription(commands);
        channel.send(msg);
        console.log(content[9]);
        break;
      case "!starwars":
          channel.send("Essa é uma lista de todos os filmes em ordem de lançamento das trilogias e por ultimo os filmes Spin-off!");
          functions.showAll(channel);
        break;
      case "!starwars1":
        functions.filterById(1, channel)
        break;
      case "!starwars2":
        functions.filterById(2, channel)
        break;
      case "!starwars3":
        functions.filterById(3, channel)
        break;
      case "!starwars4":
        functions.filterById(4, channel)
        break;
      case "!starwars5":
        functions.filterById(5, channel)
        break;
      case "!starwars6":
        functions.filterById(6, channel)
        break;
      case "!starwars7":
        functions.filterById(7, channel)
        break;
      case "!starwars8":
        functions.filterById(8, channel)
        break;
      case "!starwars9":
        functions.filterById(9, channel)
        break;
      case "!starwars10":
        functions.filterById(10, channel)
        break;
      case "!starwars11":
        functions.filterById(11, channel)
        break;
      case "!classicos":
      case "!prequel":
      case "!novos":
      case "!spin":
        functions.filterByType(content.substring(1, 1000), channel);
        break;
      default:
        channel.send(`Este comando não é válido, ${authorMsg}. Por favor digite "!iniciar" para ver minha lista completa de comandos. Que a força esteja com você!`);
    }
  }
};

module.exports = { receiveMessage };