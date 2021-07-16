const axios = require('axios')
const { MessageEmbed } = require('discord.js')

getGitHubByName = async () => {
    const response = await axios.get(`https://api.github.com/users/${username}`)
    const { data } = response
    channel.send(new MessageEmbed()
    .setTitle(username)
    .setURL(data.html_url)
    .setDescription(data.bio)
    .setFooter(`Repositórios Públicos:${data.public_repos}
🗼 ${data.location}`)
    .setImage(data.avatar_url))
}

module.exports = { getGitHubByName }