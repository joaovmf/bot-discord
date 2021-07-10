const { MessageEmbed } = require("discord.js");
const commands = require("../resources/commands.js");
const functions = require("./functions.js");
const api = require('../api/starwars')

/**
 * Define a ação a ser executada com base no conteúdo da mensagem
 * @param {Discord.Message} message - A mensagem recebida pelo BOT do Discord
 */
const receiveMessage = async (message) => {
  const { channel, content, author } = message;
  if (author.bot == false) {
    const authorMsg = author.username;
    switch (content) {
      case "!iniciar":
        channel.send(`Olá! Seja muito bem vindo, ${authorMsg}. Eu sou o bot do João. Abaixo você verá a minha lista completa de comandos:`);
        const msg = new MessageEmbed();
        msg.setTitle("LISTA DE COMANDOS");
        msg.setColor("#4287f5");
        msg.setDescription(commands);
        channel.send(msg);
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
        case '!personagens':
          await api.getPeople(channel)     
          break
        case '!planetas':
          await api.getPlanets(channel)     
          break
        case '!naves':
          await api.getStarships(channel)     
          break
        case '!especies':
          await api.getSpecies(channel)     
          break
        case '!veiculos':
          await api.getVehicles(channel)     
          break
      default:
        channel.send(`Este comando não é válido, ${authorMsg}. Por favor digite "!iniciar" para ver minha lista completa de comandos. Que a força esteja com você!`);
    }
  }
};

module.exports = { receiveMessage };