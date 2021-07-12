const { MessageEmbed } = require("discord.js");
const movies = require("../resources/movies.json");
const commands = require("../resources/commands.js");

const textFooter = "Desenvolvido por João Victor de Medeiros.";

/**
 * Função que faz o bot enviar a mensagem.
 * @param {string} movie - Filme.
 */
const msgMovie = (movie) => {
  const msg = new MessageEmbed();
  msg.setURL(movie.trailer)
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

/**
 * Função que faz o bot mostrar a lista de comandos.
 */
const showCommands = () => {
  const msg = new MessageEmbed();
  msg.setTitle("LISTA DE COMANDOS  📖");
  msg.setColor("#4287f5");
  msg.setDescription(commands);
  msg.setThumbnail(
    "https://imagensemoldes.com.br/wp-content/uploads/2020/09/Imagem-de-Livros-PNG.png"
  );
  msg.setFooter(`Todos os filmes possuem links em seus títulos, redirecionando para seus trailers.
Todas as listas possuem links em seus titulos, redirecionando para uma página relacionada.`
)
  return msg;
};

module.exports = { msgMovie, filterByType, findById, showAll, showCommands };
