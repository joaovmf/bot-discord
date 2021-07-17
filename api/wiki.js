const wiki = require('wikijs').default;
const { MessageEmbed } = require('discord.js')

const getWiki = async (channel, search) => {

  try {
    const page = await wiki().page(search)
    const content = await page.content()
    const info = await page.info()
    const images = await page.images()
    const imageName = encodeURI(info.image.split(' ').join('_')).replace(/\(/g, '%28').replace(/\)/g, '%29')
    channel.send(new MessageEmbed().setFooter(`Font: ${page.raw.fullurl}`).setURL(page.raw.fullurl).setTitle(info.name).setDescription(`${content[0].content.substring(0,3000)}...`).setImage(images.find(image => image.includes(imageName))))
  } catch (error) {
    channel.send(new MessageEmbed().setTitle('Resultado não encontrado').setDescription('Tente novamente com uma nova pesquisa'))
  }

}

module.exports = { getWiki }