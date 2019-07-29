const axios = require('axios')

module.exports = {

    
    async cpf(cpf) {
        const result = await axios.get(`https://api.cpfcnpj.com.br/${process.env.CPFCNPJ_KEY}/1/json/${cpf}`)
            .then(
                (response) => {
                    // console.log(response.data)
                    return response.data
                }
            ).catch((err) => {
                // console.log(err)
                // console.log(err.response.data)
                return { "error": err.response.data}
            })
        return result
    }
}