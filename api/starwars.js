  
const axios = require('axios');
const base_url = 'https://swapi.dev/api/'
const { MessageEmbed } = require('discord.js')

const getApiStarWars = async (channel, endpoint, title) => {
  const response = await axios.get(`${base_url}${endpoint}`)
  const { data } = response
  channel.send(new MessageEmbed()
    .setTitle(`${title} de Star Wars`)
    .setDescription(`
  Total de ${title}: ${data.count}
${title}:
${data.results.map(result => ` - ${result.name || result.title}
`).join('')}  
  `))
}

const getPeople = async (channel) => await getApiStarWars(channel, 'people', 'Personagens')
const getPlanets = async (channel) => await getApiStarWars(channel, 'planets', 'Planetas')
const getStarships = async (channel) => await getApiStarWars(channel, 'starships', 'Naves')
const getFilms = async (channel) => await getApiStarWars(channel, 'films', 'Filmes')
const getVehicles = async (channel) => await getApiStarWars(channel, 'vehicles', 'Veículos')
const getSpecies = async (channel) => await getApiStarWars(channel, 'species', 'Espécies')

module.exports = { getPeople, getPlanets, getStarships, getFilms, getVehicles, getSpecies }