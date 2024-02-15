require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.DATABASE_HOST || 'localhost',
    port: process.env.DATABASE_PORT || '5432',
    database: process.env.DATABASE_NAME || 'flocus_database',
    user: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASS,
});

module.exports = pool;