const axios = require('axios');
const base_url = 'https://swapi.dev/api/'
const { MessageEmbed } = require('discord.js')
const apiVariables = require('../resources/apiVariables.json')

/**
 * Função assíncrona que consome API do starwars.
 * @param {Discord.Message} channel - A mensagem enviada pelo BOT do Discord.
 * @param {string} endpoint - A palavra que substitui o fim da url para fazer a consulta
 * @param {string} title - Título que aparece na mensagem do bot. 
 * @param {string} emoji - Emoji que aparece ao lado do título.
 * @param {string} image - Imagem que aparece no inicio de cada categoria.
 * @param {string} color - Cor de cada categoria.
 */
const getApiStarWars = async (channel, endpoint, title, emoji, image, color) => {
  const response = await axios.get(`${base_url}${endpoint}`)
  const { data } = response
  const msg = new MessageEmbed();
    msg.setTitle(`${title} ${emoji}`)
    msg.setDescription(`
  Total de ${title}: ${data.count}
${title}:
${data.results.map(result => ` - ${result.name || result.title}
`).join('')}  
  `)
  msg.setColor(color);
  msg.setThumbnail(image);
  channel.send(msg);
}

const getPeople = async (channel) => await getApiStarWars(channel, 'people', 'Personagens', '🦹‍♂️' , apiVariables.imagePeople, apiVariables.colorPeople)
const getPlanets = async (channel) => await getApiStarWars(channel, 'planets', 'Planetas', '🪐', apiVariables.imagePlanets, apiVariables.colorPlanets)
const getStarships = async (channel) => await getApiStarWars(channel, 'starships', 'Naves', '🚀', apiVariables.imageStarship, apiVariables.colorStarship)
const getVehicles = async (channel) => await getApiStarWars(channel, 'vehicles', 'Veículos','🚎', apiVariables.imageVehicles, apiVariables.colorVehicles)
const getSpecies = async (channel) => await getApiStarWars(channel, 'species', 'Espécies', '🧟‍♂️', apiVariables.imageSpecies, apiVariables.colorSpecies)

module.exports = { getPeople, getPlanets, getStarships, getVehicles, getSpecies }
