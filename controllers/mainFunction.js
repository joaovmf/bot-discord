const functions = require("./functions.js");
const apiStarWars = require("../api/starwars");
const apiCep = require("../api/cep");
const apiGitHub = require("../api/github");
const wiki = require('../api/wiki');

/**
 * Define a ação a ser executada com base no conteúdo da mensagem
 * @param {Discord.Message} message - A mensagem recebida pelo BOT do Discord
 */
const receiveMessage = async (message) => {
  const { channel, content, author } = message;
  const arrayContent = content.split(" ");
  if (author.bot == false) {
    const authorMsg = author.username;
    switch (arrayContent[0]) {
      case "!iniciar":
        channel.send(`Olá! Seja muito bem vindo, ${authorMsg}. Eu sou o bot do João. Abaixo você verá a minha lista completa de comandos:`);
        channel.send(functions.showCommands());
        break;
      case "!starwars":
        if (arrayContent.length == 2) {
          functions.findById(arrayContent[1], channel);
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
      case "!personagens":
        if (arrayContent.length == 2) {
          await apiStarWars.getPeopleByPage(channel, arrayContent[1]);
        } else {
          await apiStarWars.getPeople(channel);
        }
        break;
      case "!planetas":
        if (arrayContent.length == 2) {
          await apiStarWars.getPlanetsByPage(channel, arrayContent[1]);
        } else {
          await apiStarWars.getPlanets(channel);
        }
        break;
      case "!naves":
        if (arrayContent.length == 2) {
          await apiStarWars.getStarshipsByPage(channel, arrayContent[1]);
        } else {
          await apiStarWars.getStarships(channel);
        }
        break;
      case "!especies":
        if (arrayContent.length == 2) {
          await apiStarWars.getSpeciesByPage(channel, arrayContent[1]);
        } else {
          await apiStarWars.getSpecies(channel);
        }
        break;
      case "!veiculos":
        if (arrayContent.length == 2) {
          await apiStarWars.getVehiclesByPage(channel, arrayContent[1]);
        } else {
          await apiStarWars.getVehicles(channel);
        }
        break;
      case "!cep":
        await apiCep.getAddressByCep(channel, arrayContent[1]);
        break;
      case "!github":
        await apiGitHub.getGitHubByName(channel, arrayContent[1]);
        break;
      case '!wiki':
        await wiki.getWiki(channel, arrayContent.splice(1).join(' '))
        break
      default:
        channel.send(`Este comando não é válido, ${authorMsg}. Por favor digite "!iniciar" para ver minha lista completa de comandos. Que a força esteja com você!`);
        break;
    }
  }
};
