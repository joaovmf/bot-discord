const axios = require('axios')
const { MessageEmbed } = require('discord.js')

getGitHubByName = async (channel, username) => {
    try {
    const response = await axios.get(`https://api.github.com/users/${username}`)
    const { data } = response
    channel.send(new MessageEmbed()
    .setTitle(data.name)
    .setURL(data.html_url)
    .setDescription(data.bio)
    .setFooter(`Repositórios Públicos:${data.public_repos}
🗼 ${data.location}`)
    .setImage(data.avatar_url))
    }catch (error) {
        channel.send(new MessageEmbed().setTitle('Resultado não encontrado').setDescription('Tente novamente com uma nova pesquisa'))
    }
}

module.exports = { getGitHubByName }