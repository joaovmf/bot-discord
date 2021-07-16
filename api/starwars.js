const axios = require('axios');
const base_url = 'https://swapi.dev/api/'
const { MessageEmbed } = require('discord.js')
const apiVariables = require('../resources/apiVariables.json')

/**
 * Função assíncrona que consome API do starwars retornando todos os filmes.
 * @param {Discord.Message} channel - A mensagem enviada pelo BOT do Discord.
 * @param {string} endpoint - A palavra que substitui o fim da url para fazer a consulta
 * @param {string} title - Título que aparece na mensagem do bot. 
 * @param {string} emoji - Emoji que aparece ao lado do título.
 * @param {string} image - Imagem que aparece no inicio de cada categoria.
 * @param {string} color - Cor de cada categoria.
 */
const getAllMovies = async (channel, endpoint, title, emoji, url, color, image) => {
  const response = await axios.get(`${base_url}${endpoint}`)
  const { data } = response
  const msg = new MessageEmbed();
    msg.setURL(url)
    msg.setTitle(`${title} ${emoji}`)
    msg.setDescription(`
  Total de ${title}: ${data.count}
${title}:
${data.results.map(result => ` - ${result.name || result.title}
`).join('')}  
  `)
  msg.setThumbnail(image);
  msg.setColor(color);
  channel.send(msg);
}

const getPeople = async (channel) => await getAllMovies(channel, 'people', 'Personagens', ' 🦹‍♂️' , apiVariables.urlPeople, apiVariables.colorPeople, apiVariables.imagePeople)
const getPlanets = async (channel) => await getAllMovies(channel, 'planets', 'Planetas', ' 🪐', apiVariables.urlPlanets, apiVariables.colorPlanets, apiVariables.imagePlanets)
const getStarships = async (channel) => await getAllMovies(channel, 'starships', 'Naves', ' 🚀', apiVariables.urlStarships, apiVariables.colorStarship, apiVariables.imageStarship)
const getVehicles = async (channel) => await getAllMovies(channel, 'vehicles', 'Veículos',' 🚗', apiVariables.urlVehicles, apiVariables.colorVehicles, apiVariables.imageVehicles)
const getSpecies = async (channel) => await getAllMovies(channel, 'species', 'Espécies', ' 🧟‍♂️', apiVariables.urlSpecies, apiVariables.colorSpecies, apiVariables.urlSpecies)

/**
 * Função assíncrona que consome API do starwars retornando os filmes por página.
 * @param {Discord.Message} channel - A mensagem enviada pelo BOT do Discord.
 * @param {string} endpoint - A palavra que substitui o fim da url para fazer a consulta
 * @param {string} title - Título que aparece na mensagem do bot. 
 * @param {string} emoji - Emoji que aparece ao lado do título.
 * @param {string} image - Imagem que aparece no inicio de cada categoria.
 * @param {string} color - Cor de cada categoria.
 */
const getMoviesByPage = async (channel, endpoint, title, emoji, url, color, image) => {
  const response = await axios.get(`${base_url}${endpoint}`)
  const { data } = response
  const msg = new MessageEmbed();
    msg.setURL(url)
    msg.setTitle(`${title} ${emoji}`)
    msg.setDescription(`
${data.results.map(result => ` - ${result.name || result.title}
`).join('')}  
  `)
  msg.setThumbnail(image);
  msg.setColor(color);
  msg.setFooter(`Página: ${endpoint.split("").filter(n => (Number(n) || n == 0)).join("")}. `)
  channel.send(msg);
}

const getPeopleByPage = async (channel, param) => await getMoviesByPage(channel, `people/?page=${param}`, 'Personagens', ' 🦹‍♂️' , apiVariables.urlPeople, apiVariables.colorPeople, apiVariables.imagePeople)
const getPlanetsByPage = async (channel, param) => await getMoviesByPage(channel, `planets/?page=${param}`, 'Planetas', ' 🪐', apiVariables.urlPlanets, apiVariables.colorPlanets, apiVariables.imagePlanets)
const getStarshipsByPage = async (channel, param) => await getMoviesByPage(channel, `starships/?page=${param}`, 'Naves', ' 🚀', apiVariables.urlStarships, apiVariables.colorStarship, apiVariables.imageStarship)
const getVehiclesByPage = async (channel, param) => await getMoviesByPage(channel, `vehicles/?page=${param}`, 'Veículos',' 🚗', apiVariables.urlVehicles, apiVariables.colorVehicles, apiVariables.imageVehicles)
const getSpeciesByPage = async (channel, param) => await getMoviesByPage(channel, `species/?page=${param}`, 'Espécies', ' 🧟‍♂️', apiVariables.urlSpecies, apiVariables.colorSpecies, apiVariables.urlSpecies)

module.exports = { getPeople, getPlanets, getStarships, getVehicles, getSpecies, getPeopleByPage, getPlanetsByPage, getStarshipsByPage, getVehiclesByPage, getSpeciesByPage}
