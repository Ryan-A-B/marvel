const md5 = require('md5');
const lodash = require('lodash');
const async = require('async');
const https = require('https');
const fs = require('fs');

exports.handler = (event, context, callback) => {
    const total = 1491;
    const limit = 100;

    var tasks = [];
    for (var offset = 0; offset < total; offset += limit) {
        tasks.push(fetch.bind(null, {limit, offset}));
    }

    async.series(tasks, function (err, responses) {
        if (err) {
            callback(err, null);
        } else {
            var characters = lodash.reduce(responses, function (characters, response) {
                return Object.assign(characters, reduceResponse(response));
            }, {});

            fs.writeFile("characters.json", JSON.stringify(characters), function (err) {
                if (err) {
                    callback(err, null);
                } else {
                    callback(null, "done");
                }
            })
        }
    });
};

function reduceResponse (response) {
    return lodash.reduce(response.data.results, function (characters, character) {
        const {id, name, description, thumbnail} = character;
        return Object.assign(characters, {
            [id]: {id, name, description, thumbnail}
        });
    }, {});
}

function fetch ({limit, offset}, callback) {
    const timestamp = Date.now();
    const hash = md5(`${timestamp}${process.env.PRIVATE_KEY}${process.env.PUBLIC_KEY}`);

    const query = getQueryString({
        ts: timestamp,
        apikey: process.env.PUBLIC_KEY,
        hash,
        limit, offset
    });

    const url = `${process.env.ENDPOINT}${process.env.RESOURCE}${query}`;

    https.get(url, response => {
        let data = '';

        response.on('data', (chunk) => {
            data += chunk;
        });

        response.on('end', () => {
            callback(null, JSON.parse(data));
        });
    }).on('error', (err) => {
        callback(`Error: ${err.message}`, null);
    });
}

function getQueryString (query) {
    var queryString = lodash.reduce(query, function (result, value, key) {
        result += `&${key}=${value}`;
        return result;
    }, "");

    return `?${queryString.substr(1)}`;
}


