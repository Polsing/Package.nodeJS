const knex = require('knex');
const db = knex.default({
    client: 'mysql2',
    connection: {
        host: '',
        user: '',
        password: '',
        database: '',
        port: 9999
    }
});
module.exports = db;