const { MessageEmbed } = require("discord.js");
const commands = require("../resources/commands.js");
const functions = require("./functions.js");
const api = require('../api/starwars')
const apiVariables = require ('../resources/apiVariables.json')

/**
 * Define a ação a ser executada com base no conteúdo da mensagem
 * @param {Discord.Message} message - A mensagem recebida pelo BOT do Discord
 */
const receiveMessage = async (message) => {
  const { channel, content, author } = message;
  const arrayContent = content.split(' ')
  if (author.bot == false) {
    const authorMsg = author.username;
    switch (arrayContent[0]) {
      case "!iniciar":
        channel.send(`Olá! Seja muito bem vindo, ${authorMsg}. Eu sou o bot do João. Abaixo você verá a minha lista completa de comandos:`);
        channel.send(functions.showCommands())
        break;
      case "!starwars":
        if (arrayContent.length == 2) {
          functions.findById(arrayContent[1], channel)
        } else {
          channel.send("Essa é uma lista de todos os filmes em ordem de lançamento das trilogias e por ultimo os filmes Spin-off!  🎞");
          functions.showAll(channel);
        }
        break;
      case "!classicos":
      case "!prequel":
      case "!novos":
      case "!spin":
        functions.filterByType(content.substring(1, 1000), channel);
        break;
      case '!personagens':
      case '!planetas':
      case '!naves':
      case '!especies':
      case '!veiculos':
        await api.getApiByPage(channel, arrayContent[0], arrayContent[1], apiVariables.image)
        break
      default:
        channel.send(`Este comando não é válido, ${authorMsg}. Por favor digite "!iniciar" para ver minha lista completa de comandos. Que a força esteja com você!`);
        break;
    }
  }
};

module.exports = { receiveMessage };