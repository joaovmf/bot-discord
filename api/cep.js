const axios = require('axios');

const getAddressByCepAsync = async (cep) => {
  const response = await axios.get('https://api.postmon.com.br/v1/cep/50710390')
  const { logradouro, cidade, bairro, estado } = response.data
  return { logradouro, cidade, bairro, estado }
}

const getAddressByCepThen = (cep) => {
  axios.get('https://api.postmon.com.br/v1/cep/50710390').then(response => {
    const { logradouro, cidade, bairro, estado } = response.data
    return { logradouro, cidade, bairro, estado }
  })
}

module.exports = getAddressByCepAsync