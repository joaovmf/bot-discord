const Discord = require("discord.js");
const movies = require("./movies.js");
const commands = require("./commands.js");
const textFooter = 'Desenvolvido por João Victor de Medeiros.'

const msgMovie = (movie) => {
  const msg = new Discord.MessageEmbed();
  msg.setTitle(movie.name);
  msg.setDescription(movie.synopsis);
  if (movie.type == 'classicos') {
    msg.setColor("#00de3f");
  } else if (movie.type == 'prequel') {
    msg.setColor("#021ef2");
  } else if (movie.type == 'novos') {
    msg.setColor("#9e005c");
  } else if (movie.type == 'spin') {
    msg.setColor("#d7eb00");
  }
  msg.setImage(movie.image);
  msg.setThumbnail(movie.image2);
  msg.setFooter(textFooter);
  return msg
}

/**
  * Função que faz o bot mostrar todos os filmes do array.
  */
showAll = (channel) => {
  movies.map((movie) => {
    channel.send(msgMovie(movie));
  });
};
/**
 * Função que filtra os filmes por ID e faz o bot mostrar apenas um.
 * @param {number} param - ID do filme.
 */
const filterById = (param, channel) => {
  channel.send(
    msgMovie
      (movies.find((movie) => movie.id == param))
  )
};
/**
 * Função que filtra os filmes por tipo e faz o bot mostrar apenas os que são do mesmo tipo.
 * @param {string} param - Tipo do filme.
 */
const filterByType = (param, channel) => {
  movies
    .filter((movie) => movie.type == param)
    .map((movie) => {
      channel.send(msgMovie(movie));
    });
};

/**
 * Função principal que recebe a mensagem do usuário.
 * @param {Discord.Message} message - Objeto mensagem recebido pelo BOT
 */
receiveMessage = (message) => {
  const { channel, content, author } = message;
  if (author.bot == false) {
    const authorMsg = author.username;
    if (content == "!iniciar") {
      channel.send(`Olá! Seja muito bem vindo, ${authorMsg}. Eu sou o bot do João. Abaixo você verá a minha lista completa de comandos:`);
      const msg = new Discord.MessageEmbed();
      msg.setTitle("LISTA DE COMANDOS");
      msg.setColor("#f20c0c");
      msg.setDescription(commands);
      channel.send(msg);
      console.log(content[9])
    } else if (content.indexOf('!starwars') == 0) {
      if (content == "!starwars") {
        channel.send("Essa é uma lista de todos os filmes em ordem de lançamento das trilogias e por ultimo os filmes Spin-off!");
        showAll(channel);
      } else {
        filterById(content[9], channel)
      }
    }    
    else if (content == "!classicos" || content == "!prequel" || content == "!novos" || content == "!spin") {    
      filterByType(content.substring(1,10000), channel);
    } else {
      channel.send(`Este comando não é válido, ${authorMsg}. Por favor digite "!iniciar" para ver minha lista completa de comandos. Que a força esteja com você!`);
    }
  }
};

module.exports = { receiveMessage };