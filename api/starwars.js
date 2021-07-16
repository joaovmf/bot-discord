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
const getAllApi = async (channel, endpoint, title, emoji, url, color, image) => {
  try {
  const response = await axios.get(`${base_url}${endpoint}`)
  const { data } = response
  const msg = new MessageEmbed();
    msg.setURL(url)
    msg.setTitle(`${title} ${emoji}`)
    msg.setDescription(`
  Total de ${title}: ${data.count}
  As páginas sãos de 10 em 10. 
  Digite o tipo e o numero da página para ver a lista.
  `)
  msg.setThumbnail(image);
  msg.setColor(color);
  channel.send(msg);
  }catch (error) {
    channel.send(new MessageEmbed().setTitle('Resultado não encontrado').setDescription('Tente novamente com uma nova pesquisa'))
  }
}

const getPeople = async (channel) => await getAllApi(channel, apiVariables.endpointPeople, apiVariables.titlePeople, apiVariables.emojiPeople, apiVariables.urlPeople, apiVariables.colorPeople, apiVariables.imagePeople)
const getPlanets = async (channel) => await getAllApi(channel, apiVariables.endpointPlanet, apiVariables.titlePlanet, apiVariables.emojiPlanet, apiVariables.urlPlanet, apiVariables.colorPlanet, apiVariables.imagePlanet)
const getStarships = async (channel) => await getAllApi(channel, apiVariables.endpointStarship, apiVariables.titleStarship, apiVariables.emojiStarship, apiVariables.urlStarship, apiVariables.colorStarship, apiVariables.imageStarship)
const getVehicles = async (channel) => await getAllApi(channel, apiVariables.endpointVehicle, apiVariables.titleVehicle,apiVariables.emojiVehicle, apiVariables.urlVehicle, apiVariables.colorVehicle, apiVariables.imageVehicle)
const getSpecies = async (channel) => await getAllApi(channel, apiVariables.endpointSpecie, apiVariables.titleSpecie, apiVariables.emojiSpecie, apiVariables.urlSpecie, apiVariables.colorSpecie, apiVariables.imageSpecie)

/**
 * Função assíncrona que consome API do starwars retornando os filmes por página.
 * @param {Discord.Message} channel - A mensagem enviada pelo BOT do Discord.
 * @param {string} endpoint - A palavra que substitui o fim da url para fazer a consulta
 * @param {string} title - Título que aparece na mensagem do bot. 
 * @param {string} emoji - Emoji que aparece ao lado do título.
 * @param {string} image - Imagem que aparece no inicio de cada categoria.
 * @param {string} color - Cor de cada categoria.
 */
const getApiByPage = async (channel, endpoint, title, emoji, url, color, image) => {
  try {
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
  }catch (error) {
    channel.send(new MessageEmbed().setTitle('Resultado não encontrado').setDescription('Tente novamente com uma nova pesquisa'))
  }
}

const getPeopleByPage = async (channel, param) => await getApiByPage(channel, `people/?page=${param}`, apiVariables.titlePeople, apiVariables.emojiPeople, apiVariables.urlPeople, apiVariables.colorPeople, apiVariables.imagePeople)
const getPlanetsByPage = async (channel, param) => await getApiByPage(channel, `planets/?page=${param}`, apiVariables.titlePlanet, apiVariables.emojiPlanet, apiVariables.urlPlanet, apiVariables.colorPlanet, apiVariables.imagePlanet)
const getStarshipsByPage = async (channel, param) => await getApiByPage(channel, `starships/?page=${param}`, apiVariables.titleStarship, apiVariables.emojiStarship, apiVariables.urlStarship, apiVariables.colorStarship, apiVariables.imageStarship)
const getVehiclesByPage = async (channel, param) => await getApiByPage(channel, `vehicles/?page=${param}`,  apiVariables.titleVehicle,apiVariables.emojiVehicle, apiVariables.urlVehicle, apiVariables.colorVehicle, apiVariables.imageVehicle)
const getSpeciesByPage = async (channel, param) => await getApiByPage(channel, `species/?page=${param}`, apiVariables.titleSpecie, apiVariables.emojiSpecie, apiVariables.urlSpecie, apiVariables.colorSpecie, apiVariables.imageSpecie)

module.exports = { getPeople, getPlanets, getStarships, getVehicles, getSpecies, getPeopleByPage, getPlanetsByPage, getStarshipsByPage, getVehiclesByPage, getSpeciesByPage}  