const pool = require('../../config/db.js');

async function getTasks() {
    const getQuery = `
    SELECT
        *
    FROM
        tasks`

    const client = await pool.connect();
    const result = await client.query(getQuery);
    const data = result.rows;
    client.release();

    return data;
}

module.exports = {
    getTasks,
}