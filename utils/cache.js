const cache = new Object();
const calc = require('./calc');
module.exports = {
    has: (name) => {
        console.log("has");
        console.log(cache);
        if (cache[name]) return true;
        return false;
    },
    set: async (name, url) => {
        console.log("set");
        let data = await calc.getSummary(url)
        cache[name] = data;
        return cache[name];
    },
    get: (name) => {
        console.log("get");
        return cache[name];
    }
}