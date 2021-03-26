const express = require('express');
const cache = require('./utils/cache');
const axios = require('axios');
const app = express();
const cors = require('cors');
require('dotenv').config();
app.use(cors());

app.get('/', async (req, res) => {
    let response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    res.send(response.data);
})
app.get('/cache', async (req, res) => {
    if (cache.has('Summary')) {
        const data = await cache.get('Summary');
        return res.json({ data });
    }
    const payload = "https://jsonplaceholder.typicode.com/posts";
    const data = await cache.set('Summary', payload);
    res.json({ data });
})

app.listen(process.env.PORT || 3000, () => {
    console.log("server started...");
})