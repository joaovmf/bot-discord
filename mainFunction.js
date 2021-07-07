const Discord = require("discord.js");
const movies = require("./movies.js");
const commands = require("./commands.js");
const msg = new Discord.MessageEmbed();

receiveMessage = (message) => {
  const authorMsg = message.author.username;
  if (message.author.bot == false) {
    if (message.content == "!iniciar") {
      message.channel.send(
        `Olá! Seja muito bem vindo, ${authorMsg}. Eu sou o bot do João. Abaixo você verá a minha lista completa de comandos:`
      );
      msg.setTitle("LISTA DE COMANDOS");
      msg.setColor("#f20c0c");
      msg.setDescription(commands);
      message.channel.send(msg);
    } else if (message.content == "!starwars") {
      message.channel.send(
        "Essa é uma lista de todos os filmes em ordem de lançamento das trilogias e por ultimo os filmes Spin-off!"
      );
      movies.map((movie) => {
        msg.setTitle(movie.name);
        msg.setDescription(movie.synopsis);
        msg.setColor("#00de3f");
        msg.setThumbnail(movie.image);
        msg.setImage(movie.image);
        message.channel.send(msg);
      });
    } else if (message.content == "!starwars1") {
      message.channel.send(
        "Este é o primeiro filme lançado da primeira trilogia."
      );
      movies
        .filter((movie) => movie.id == 1)
        .map((movie) => {
          msg.setTitle(movie.name);
          msg.setDescription(movie.synopsis);
          msg.setColor("#2127d9");
          msg.setThumbnail(movie.image);
          msg.setImage(movie.image);
          message.channel.send(msg);
        });
    } else if (message.content == "!starwars2") {
      message.channel.send(
        "Este é o segundo filme lançado da primeira trilogia."
      );
      movies
        .filter((movie) => movie.id == 2)
        .map((movie) => {
          msg.setTitle(movie.name);
          msg.setDescription(movie.synopsis);
          msg.setColor("#2127d9");
          msg.setThumbnail(movie.image);
          msg.setImage(movie.image);
          message.channel.send(msg);
        });
    } else if (message.content == "!starwars3") {
      message.channel.send(
        "Este é o terceiro filme lançado da primeira trilogia."
      );
      movies
        .filter((movie) => movie.id == 3)
        .map((movie) => {
          msg.setTitle(movie.name);
          msg.setDescription(movie.synopsis);
          msg.setColor("#2127d9");
          msg.setThumbnail(movie.image);
          msg.setImage(movie.image);
          message.channel.send(msg);
        });
    } else if (message.content == "!starwars4") {
      message.channel.send(
        "Este é o primeiro filme lançado da segunda trilogia."
      );
      movies
        .filter((movie) => movie.id == 4)
        .map((movie) => {
          msg.setTitle(movie.name);
          msg.setDescription(movie.synopsis);
          msg.setColor("#e3dc12");
          msg.setThumbnail(movie.image);
          msg.setImage(movie.image);
          message.channel.send(msg);
        });
    } else if (message.content == "!starwars5") {
      message.channel.send(
        "Este é o segundo filme lançado da segunda trilogia."
      );
      movies
        .filter((movie) => movie.id == 5)
        .map((movie) => {
          msg.setTitle(movie.name);
          msg.setDescription(movie.synopsis);
          msg.setColor("#e3dc12");
          msg.setThumbnail(movie.image);
          msg.setImage(movie.image);
          message.channel.send(msg);
        });
    } else if (message.content == "!starwars6") {
      message.channel.send(
        "Este é o terceiro filme lançado da segunda trilogia."
      );
      movies
        .filter((movie) => movie.id == 6)
        .map((movie) => {
          msg.setTitle(movie.name);
          msg.setDescription(movie.synopsis);
          msg.setColor("#e3dc12");
          msg.setThumbnail(movie.image);
          msg.setImage(movie.image);
          message.channel.send(msg);
        });
    } else if (message.content == "!starwars7") {
      message.channel.send(
        "Este é o primeiro filme lançado da terceira trilogia"
      );
      movies
        .filter((movie) => movie.id == 7)
        .map((movie) => {
          msg.setTitle(movie.name);
          msg.setDescription(movie.synopsis);
          msg.setColor("#ed0ff5");
          msg.setThumbnail(movie.image);
          msg.setImage(movie.image);
          message.channel.send(msg);
        });
    } else if (message.content == "!starwars8") {
      message.channel.send(
        "Este é o segundo filme lançado da terceira trilogia"
      );
      movies
        .filter((movie) => movie.id == 8)
        .map((movie) => {
          msg.setTitle(movie.name);
          msg.setDescription(movie.synopsis);
          msg.setColor("#ed0ff5");
          msg.setThumbnail(movie.image);
          msg.setImage(movie.image);
          message.channel.send(msg);
        });
    } else if (message.content == "!starwars9") {
      message.channel.send(
        "Este é o terceiro filme lançado da terceira trilogia"
      );
      movies
        .filter((movie) => movie.id == 9)
        .map((movie) => {
          msg.setTitle(movie.name);
          msg.setDescription(movie.synopsis);
          msg.setColor("#ed0ff5");
          msg.setThumbnail(movie.image);
          msg.setImage(movie.image);
          message.channel.send(msg);
        });
    } else if (message.content == "!starwars10") {
      message.channel.send("Este é o primeiro filme Spin-off");
      movies
        .filter((movie) => movie.id == 10)
        .map((movie) => {
          msg.setTitle(movie.name);
          msg.setDescription(movie.synopsis);
          msg.setColor("#f58002");
          msg.setThumbnail(movie.image);
          msg.setImage(movie.image);
          message.channel.send(msg);
        });
    } else if (message.content == "!starwars11") {
      message.channel.send("Este é o segundo filme Spin-off");
      movies
        .filter((movie) => movie.id == 11)
        .map((movie) => {
          msg.setTitle(movie.name);
          msg.setDescription(movie.synopsis);
          msg.setColor("#f58002");
          msg.setThumbnail(movie.image);
          msg.setImage(movie.image);
          message.channel.send(msg);
        });
    } else if (message.content == "!classicos") {
      message.channel.send("Esta é a trilogia dos filmes clássicos, foram os três primeiros filmes lançados.");
      movies
        .filter((movie) => movie.type == 'classic')
        .map((movie) => {
          msg.setTitle(movie.name);
          msg.setDescription(movie.synopsis);
          msg.setColor("#2127d9");
          msg.setThumbnail(movie.image);
          msg.setImage(movie.image);
          message.channel.send(msg);
        });
    } else if (message.content == "!prequel") {
      message.channel.send("Esta é a trilogia dos filmes prequel, lançados após os clássicos, mas com história anterior a eles.");
      movies
        .filter((movie) => movie.type == 'prequel')
        .map((movie) => {
          msg.setTitle(movie.name);
          msg.setDescription(movie.synopsis);
          msg.setColor("#e3dc12");
          msg.setThumbnail(movie.image);
          msg.setImage(movie.image);
          message.channel.send(msg);
        });
    } else if (message.content == "!novos") {
      message.channel.send("Esta é a trilogia dos filmes mais novos");
      movies
        .filter((movie) => movie.type == 'new')
        .map((movie) => {
          msg.setTitle(movie.name);
          msg.setDescription(movie.synopsis);
          msg.setColor("#ed0ff5");
          msg.setThumbnail(movie.image);
          msg.setImage(movie.image);
          message.channel.send(msg);
        });
    } else if (message.content == "!spin") {
      message.channel.send("Esta é a trilogia dos filmes Spin-Off.");
      movies
        .filter((movie) => movie.type == 'spin')
        .map((movie) => {
          msg.setTitle(movie.name);
          msg.setDescription(movie.synopsis);
          msg.setColor("#e3dc12");
          msg.setThumbnail(movie.image);
          msg.setImage(movie.image);
          message.channel.send(msg);
        });
    }
  }
};

module.exports = { receiveMessage };