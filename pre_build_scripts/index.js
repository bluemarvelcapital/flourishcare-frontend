require('dotenv').config();
const SeedBlogPostScript = require("./fetchBlogPosts.js");

async function startScripts() {
    const scripts = [SeedBlogPostScript]

    for (const script of scripts) {
        console.log(`Running script: ${script.name}`)
        await script.start()
    }
}

startScripts()