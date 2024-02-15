const PromiseRouter = require('express-promise-router');
const tasksQueries = require('../db/tasks/read.js');

const router = PromiseRouter();

router.get('/tasks', async (_req, res, _next) => {
    try {
        const data = await tasksQueries.getTasks();

        res.json(data);
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;