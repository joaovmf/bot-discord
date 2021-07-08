const Discord = require("discord.js");
const movies = require("./movies.js");
const commands = require("./commands.js");
const msg = new Discord.MessageEmbed();

/**
 * Função principal que recebe a mensagem do usuário.
 */
receiveMessage = (message) => {
  /**
   * Função que faz o bot mostrar todos os filmes do array.
   */
  showAll = () => {
    movies.map((movie) => {
      msg.setTitle(movie.name);
      msg.setDescription(movie.synopsis);
      if (movie.type == 'classic') {
        msg.setColor("#00de3f");
      } else if (movie.type == 'prequel') {
        msg.setColor("#021ef2");
      } else if (movie.type == 'new') {
        msg.setColor("#9e005c");
      }  else if (movie.type == 'spin') {
        msg.setColor("#d7eb00");
      }
      msg.setImage(movie.image);
      msg.setThumbnail(movie.image2);
      msg.setFooter('Desenvolvido por João Victor de Medeiros.');
      message.channel.send(msg);
    });
  };
  /**
   * Função que filtra os filmes por ID e faz o bot mostrar apenas um.
   * @param {number} param - ID do filme.
   */
  filterById = (param) => {
    movies
      .filter((movie) => movie.id == param)
      .map((movie) => {
        msg.setTitle(movie.name);
        msg.setDescription(movie.synopsis);
        if (movie.type == 'classic') {
          msg.setColor("#00de3f");
        } else if (movie.type == 'prequel') {
          msg.setColor("#021ef2");
        } else if (movie.type == 'new') {
          msg.setColor("#9e005c");
        }  else if (movie.type == 'spin') {
          msg.setColor("#d7eb00");
        }
        msg.setImage(movie.image);
        msg.setThumbnail(movie.image2);
        msg.setFooter('Desenvolvido por João Victor de Medeiros.');
        message.channel.send(msg);
      });
  };
  /**
   * Função que filtra os filmes por tipo e faz o bot mostrar apenas os que são do mesmo tipo.
   * @param {string} param - Tipo do filme.
   */
  filterByType = (param) => {
    movies
      .filter((movie) => movie.type == param)
      .map((movie) => {
        msg.setTitle(movie.name);
        msg.setDescription(movie.synopsis);
        if (movie.type == 'classic') {
          msg.setColor("#00de3f");
        } else if (movie.type == 'prequel') {
          msg.setColor("#021ef2");
        } else if (movie.type == 'new') {
          msg.setColor("#9e005c");
        }  else if (movie.type == 'spin') {
          msg.setColor("#d7eb00");
        }
        msg.setImage(movie.image);
        msg.setFooter('Desenvolvido por João Victor de Medeiros.')
        message.channel.send(msg);
      });
  };
  if (message.author.bot == false) {
    const authorMsg = message.author.username;
    if (message.content == "!iniciar") {
      message.channel.send(`Olá! Seja muito bem vindo, ${authorMsg}. Eu sou o bot do João. Abaixo você verá a minha lista completa de comandos:`);
      msg.setTitle("LISTA DE COMANDOS");
      msg.setColor("#f20c0c");
      msg.setDescription(commands);
      message.channel.send(msg);
    } else if (message.content == "!starwars") {
      message.channel.send("Essa é uma lista de todos os filmes em ordem de lançamento das trilogias e por ultimo os filmes Spin-off!");
      showAll();
    } else if (message.content == "!starwars1") {
      message.channel.send("Este é o primeiro filme lançado da primeira trilogia.");
      filterById(1);
    } else if (message.content == "!starwars2") {
      message.channel.send("Este é o segundo filme lançado da primeira trilogia.");
      filterById(2);
    } else if (message.content == "!starwars3") {
      message.channel.send("Este é o terceiro filme lançado da primeira trilogia.");
      filterById(3);
    } else if (message.content == "!starwars4") {
      message.channel.send("Este é o primeiro filme lançado da segunda trilogia.");
      filterById(4);
    } else if (message.content == "!starwars5") {
      message.channel.send("Este é o segundo filme lançado da segunda trilogia.");
      filterById(5);
    } else if (message.content == "!starwars6") {
      message.channel.send("Este é o terceiro filme lançado da segunda trilogia.");
      filterById(6);
    } else if (message.content == "!starwars7") {
      message.channel.send("Este é o primeiro filme lançado da terceira trilogia.");
      filterById(7);
    } else if (message.content == "!starwars8") {
      message.channel.send("Este é o segundo filme lançado da terceira trilogia.");
      filterById(8);
    } else if (message.content == "!starwars9") {
      message.channel.send("Este é o terceiro filme lançado da terceira trilogia.");
      filterById(9);
    } else if (message.content == "!starwars10") {
      message.channel.send("Este é o primeiro filme Spin-off.");
      filterById(10);
    } else if (message.content == "!starwars11") {
      message.channel.send("Este é o segundo filme Spin-off.");
      filterById(11);
    } else if (message.content == "!classicos") {
      message.channel.send("Esta é a trilogia dos filmes clássicos, foram os três primeiros filmes lançados.");
      filterByType("classic");
    } else if (message.content == "!prequel") {
      message.channel.send("Esta é a trilogia dos filmes prequel, lançados após os clássicos, mas com história anterior a eles.");
      filterByType("prequel");
    } else if (message.content == "!novos") {
      message.channel.send("Esta é a trilogia dos filmes mais novos.");
      filterByType("new");
    } else if (message.content == "!spin") {
      message.channel.send("Esta é a trilogia dos filmes Spin-Off.");
      filterByType("spin");
    } else {
      message.channel.send(`Este comando não é válido, ${authorMsg}. Por favor digite "!iniciar" para ver minha lista completa de comandos. Que a força esteja com você!`);
    }
  }
};

module.exports = { receiveMessage };