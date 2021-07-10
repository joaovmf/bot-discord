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
        msg.setTitle("LISTA DE COMANDOS  📖");
        msg.setColor("#4287f5");
        msg.setDescription(commands);
        channel.send(msg);
        break;
      case "!starwars":
          channel.send("Essa é uma lista de todos os filmes em ordem de lançamento das trilogias e por ultimo os filmes Spin-off!  🎞");
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
        case '!personagens2':
          await api.getPeopleByPage(channel, 2)     
          break
        case '!personagens3':
          await api.getPeopleByPage(channel, 3)     
          break
        case '!personagens4':
          await api.getPeopleByPage(channel, 4)     
          break
        case '!personagens5':
          await api.getPeopleByPage(channel, 5)     
          break
        case '!personagens6':
          await api.getPeopleByPage(channel, 6)     
          break
        case '!personagens7':
          await api.getPeopleByPage(channel, 7)     
          break
        case '!personagens8':
          await api.getPeopleByPage(channel, 8)     
          break
        case '!personagens9':
          await api.getPeopleByPage(channel, 9)     
          break
        case '!planetas':
          await api.getPlanets(channel)     
          break
        case '!planetas2':
          await api.getPlanetsByPage(channel, 2)     
          break
        case '!planetas3':
          await api.getPlanetsByPage(channel, 3)     
          break
        case '!planetas4':
          await api.getPlanetsByPage(channel, 4)     
          break
        case '!planetas5':
          await api.getPlanetsByPage(channel, 5)     
          break
        case '!planetas6':
          await api.getPlanetsByPage(channel, 6)     
          break
        case '!naves':
          await api.getStarships(channel)     
          break
        case '!naves2':
          await api.getStarshipsByPage(channel, 2)     
          break
        case '!naves3':
          await api.getStarshipsByPage(channel, 3)     
          break
        case '!naves4':
          await api.getStarshipsByPage(channel, 4)     
          break
        case '!especies':
          await api.getSpecies(channel)     
          break
        case '!especies2':
          await api.getSpeciesByPage(channel, 2)     
          break
        case '!especies3':
          await api.getSpeciesByPage(channel, 3)     
          break
        case '!especies4':
          await api.getSpeciesByPage(channel, 4)     
          break
        case '!veiculos':
          await api.getVehicles(channel)     
          break
        case '!veiculos2':
          await api.getVehiclesByPage(channel, 2)     
          break
        case '!veiculos3':
          await api.getVehiclesByPage(channel, 3)     
          break
        case '!veiculos4':
          await api.getVehiclesByPage(channel, 4)     
          break
      default:
        channel.send(`Este comando não é válido, ${authorMsg}. Por favor digite "!iniciar" para ver minha lista completa de comandos. Que a força esteja com você!`);
    }
  }
};

module.exports = { receiveMessage };