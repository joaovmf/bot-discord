const axios = require('axios');

const getAddressByCep = async (channel, cep) => {
    const response = await axios.get(`https://api.postmon.com.br/v1/cep/${cep}`)
    const { logradouro, cidade, bairro, estado } = response.data
    channel.send(`
  Endereço: ${logradouro}
    Bairro: ${bairro}
    Cidade: ${cidade}
    Estado: ${estado}`)
}

module.exports = { getAddressByCep }