const pool = require('../../config/db.js');

async function createTask({ name, tags, description, date, time, priority }) {
    const creatQuery = `
    INSERT INTO
        task_data (name, tags, description, due_date, due_time, priority)
    VALUES
        ($1, $2, $3, $4, $5, $6)`

    const client = await pool.connect();
    await client.query(creatQuery, [
        name,
        tags,
        description,
        date,
        time,
        priority
    ]);
    client.release();
}

module.exports = {
    createTask,
}