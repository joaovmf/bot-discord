  
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
  const arrayContent = content.split(' ')
  if (author.bot == false) {
    const authorMsg = author.username;
    switch (arrayContent[0]) {
      case "!iniciar":
        channel.send(`Olá! Seja muito bem vindo, ${authorMsg}. Eu sou o bot do João. Abaixo você verá a minha lista completa de comandos:`);
        const msg = new MessageEmbed();
        msg.setTitle("LISTA DE COMANDOS  📖");
        msg.setColor("#4287f5");
        msg.setDescription(commands);
        msg.setThumbnail('https://imagensemoldes.com.br/wp-content/uploads/2020/09/Imagem-de-Livros-PNG.png')
        channel.send(msg);
        break;
      case "!starwarstodos":
          channel.send("Essa é uma lista de todos os filmes em ordem de lançamento das trilogias e por ultimo os filmes Spin-off!  🎞");
          functions.showAll(channel);
        break;
      case "!starwars":
        functions.findById(arrayContent[1], channel)
        break;
      case "!classicos":
      case "!prequel":
      case "!novos":
      case "!spin":
        functions.filterByType(content.substring(1, 1000), channel);
        break;
        case '!personagenstodos':
          await api.getPeople(channel)     
          break
        case '!personagens':
          await api.getPeopleByPage(channel, arrayContent[1])
          break;
        case '!planetastodos':
          await api.getPlanets(channel)     
          break
        case '!planetas':
          await api.getPlanetsByPage(channel, arrayContent[1])     
          break
        case '!navestodas':
          await api.getStarships(channel)     
          break
        case '!naves':
          await api.getStarshipsByPage(channel, arrayContent[1])     
          break
        case '!especiestodas':
          await api.getSpecies(channel)     
          break
        case '!especies':
          await api.getSpeciesByPage(channel, arrayContent[1])     
          break
        case '!veiculostodos':
          await api.getVehicles(channel)     
          break
        case '!veiculos':
          await api.getVehiclesByPage(channel, arrayContent[1])     
          break
      default:
        channel.send(`Este comando não é válido, ${authorMsg}. Por favor digite "!iniciar" para ver minha lista completa de comandos. Que a força esteja com você!`);
        break;
    }
  }
};

module.exports = { receiveMessage };