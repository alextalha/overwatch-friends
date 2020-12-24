const axios = require('axios')

module.exports = {

  async stats(request, response) {

    const { plataform, region, battletag } = request.params;

    console.log(`https://ow-api.com/v1/stats/${plataform}/${region}/${battletag}/profile`)
    const apiResponse = await axios.get(
      `https://ow-api.com/v1/stats/${plataform}/${region}/${battletag}/profile`)

    return response.json(apiResponse.data)
  },

  async complete(request, response) {

    const { plataform, region, battletag } = request.params;

    console.log(`https://ow-api.com/v1/stats/${plataform}/${region}/${battletag}/complete`)
    const apiResponse = await axios.get(
      `https://ow-api.com/v1/stats/${plataform}/${region}/${battletag}/complete`)

    return response.json(apiResponse.data)
  },

  async specific_hero(request, response) {

    const { plataform, region, battletag, heroes } = request.params;

    console.log(`https://ow-api.com/v1/stats/${plataform}/${region}/${battletag}/heroes/${heroes}`)
    const apiResponse = await axios.get(
      `https://ow-api.com/v1/stats/${plataform}/${region}/${battletag}/heroes/${heroes}`)

    return response.json(apiResponse.data)

  }

}