const Discord = require("discord.js");
const commands = require("../resources/commands.js");
const functions = require("./functions.js");

receiveMessage = (message) => {
  const { channel, content, author } = message;
  if (author.bot == false) {
    const authorMsg = author.username;
    switch (content) {
      case "!iniciar":
        channel.send(
          `Olá! Seja muito bem vindo, ${authorMsg}. Eu sou o bot do João. Abaixo você verá a minha lista completa de comandos:`
        );
        const msg = new Discord.MessageEmbed();
        msg.setTitle("LISTA DE COMANDOS");
        msg.setColor("#4287f5");
        msg.setDescription(commands);
        channel.send(msg);
        console.log(content[9]);
        break;
      case content.indexOf("!starwars") == 0:
        if (content == "!starwars") {
          channel.send(
            "Essa é uma lista de todos os filmes em ordem de lançamento das trilogias e por ultimo os filmes Spin-off!"
          );
          functions.showAll(channel);
        } else {
          functions.filterById(content[9], channel);
        }
        break;
      case "!classicos":
      case "!prequel":
      case "!novos":
      case "!spin":
        functions.filterByType(content.substring(1, 1000), channel);
        break;
      default:
        channel.send(
          `Este comando não é válido, ${authorMsg}. Por favor digite "!iniciar" para ver minha lista completa de comandos. Que a força esteja com você!`
        );
    }
  }
};

module.exports = { receiveMessage };
