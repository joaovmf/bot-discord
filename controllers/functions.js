const Discord = require("discord.js");
const movies = require("../resources/movies.json");

const textFooter = "Desenvolvido por João Victor de Medeiros.";

/**
 * Função que faz o bot enviar a mensagem.
 * @param {string} movie - Filme.
 */
 const msgMovie = (movie) => {
    const msg = new Discord.MessageEmbed();
    msg.setTitle(movie.name);
    msg.setDescription(movie.synopsis);
    msg.setColor(movie.color);
    msg.setImage(movie.image);
    msg.setThumbnail(movie.image2);
    msg.setFooter(textFooter);
    return msg;
  };

/**
 * Função que faz o bot mostrar todos os filmes do arquivo JSON. 
 * @param {string} channel - Canal da mensagem.
 */
 const showAll = (channel) => {
    movies.map((movie) => {
      channel.send(msgMovie(movie));
    });
  };
  
  /**
   * Função que filtra os filmes por ID e faz o bot mostrar apenas um.
   * @param {number} param - ID do filme.
   * @param {string} channel - Canal da mensagem.
   */
  const findById = (param, channel) => {
    channel.send(msgMovie(movies.find((movie) => movie.id == param)));
  };
  
  /**
   * Função que filtra os filmes por tipo e faz o bot mostrar apenas os que são do mesmo tipo.
   * @param {string} param - Tipo do filme.
   * @param {string} channel - Canal da mensagem.
   */
  const filterByType = (param, channel) => {
    movies
      .filter((movie) => movie.type == param)
      .map((movie) => {
        channel.send(msgMovie(movie));
      });
  };

  module.exports = {msgMovie, filterByType, findById, showAll}