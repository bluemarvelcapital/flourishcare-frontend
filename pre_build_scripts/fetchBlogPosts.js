const { API_URL } = require('../constants/config.js')
const axios = require('axios')
const fs = require('fs')

module.exports = class SeedBlogPostScript {
    static start = async () => {
        const response = await axios.get(API_URL + '/blog')

        const sortedBlogPostsById = response.data.data.blogPosts.sort((a, b) => a.id - b.id)

        const jsonPath = __dirname + '/../db/data/posts.json'
        // Create a new file if it doesn't exist
        
        if (!fs.existsSync(jsonPath)) {
            // Create directory
            fs.mkdirSync(__dirname + '/../db/data', { recursive: true })
        }

        fs.writeFileSync(jsonPath, JSON.stringify({ blogPosts: sortedBlogPostsById }))
    }
}

