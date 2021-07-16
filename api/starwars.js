const axios = require('axios');
const base_url = 'https://swapi.dev/api/'
const { MessageEmbed } = require('discord.js')
const apiVariables = require('../resources/apiVariables.json')

/**
 * Função assíncrona que consome API do starwars retornando os filmes por página.
 * @param {Discord.Message} channel - A mensagem enviada pelo BOT do Discord.
 * @param {string} endpoint - A palavra que substitui o fim da url para fazer a consulta
 * @param {string} title - Título que aparece na mensagem do bot. 
 * @param {string} emoji - Emoji que aparece ao lado do título.
 * @param {string} image - Imagem que aparece no inicio de cada categoria.
 * @param {string} color - Cor de cada categoria.1
 */
const getApiByPage = async (channel, comando, page, image) => {
  try {
  const param = getParam(comando)
  const response = await axios.get(`${base_url}${`${param.endpoint}/?page=${page ? page : 1}`}`)
  const { data } = response
  const msg = new MessageEmbed();
  msg.setURL(param.url)
  msg.setTitle(`${param.title}    ${param.emoji}`)
  msg.setDescription(`
  ${page ? '' : `Total de ${param.title}: ${data.count}`}
  ${param.title}:
  ${data.results.map(result => ` - ${result.name || result.title}
  `).join('')}  
  `)
  msg.setColor(param.color);
  msg.setThumbnail(image)
  if (page) {    
    msg.setFooter(`Página: ${page}`)
  }
  channel.send(msg);
  }catch (error) {
  channel.send(new MessageEmbed().setTitle('Resultado não encontrado').setDescription('Tente novamente com uma nova pesquisa'))
  }
}

const getParam = (comando) => apiVariables.find(variable => variable.comando == comando)

module.exports = { getApiByPage }