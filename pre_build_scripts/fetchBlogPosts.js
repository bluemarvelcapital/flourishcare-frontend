const { API_URL } = require('../constants/config.js')
const axios = require('axios')
const fs = require('fs')

module.exports = class SeedBlogPostScript {
    static start = async () => {
        const response = await axios.get(API_URL + '/blog')

        const jsonPath = __dirname + '/../db/data/posts.json'
        fs.writeFileSync(jsonPath, JSON.stringify(response.data.data.blogPosts))
    }
}

