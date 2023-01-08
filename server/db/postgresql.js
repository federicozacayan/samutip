const { Pool } = require('pg')

const pool = new Pool({
    host: 'db',
    port: 5432,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD, 
})


module.exports = {
    pool
}