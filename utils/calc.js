const axios = require('axios');
module.exports = {
    getSummary: async (url) => {
        let response = await axios.get(url);
        console.log(response);
        let unique = response.data.map(item => item.userId)
            .filter((value, index, self) => self.indexOf(value) === index)
        return unique;
    }
}