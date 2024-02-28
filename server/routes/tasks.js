const PromiseRouter = require('express-promise-router');
const taskCreatQueries = require('../db/tasks/create.js');
const taskReadQueries = require('../db/tasks/read.js');
const taskUpdateQueries = require('../db/tasks/update.js');
const taskDeleteQueries = require('../db/tasks/delete.js');

const router = PromiseRouter();

router.post('/tasks', async (req, res, next) => {
    try {
        await taskCreatQueries.createTask(req.body);

        res.status(200).json({ success: true });
    } catch (err) {
        console.log(err);

        res.status(500).json({ success: false });
    }
});

router.post('/tasks/:taskId/edit', async (req, res, next) => {
    try {
        await taskUpdateQueries.updateTask(req.body);
    } catch (err) {
        console.log(err);
    }
});

router.get('/tasks', async (_req, res, _next) => {
    try {
        const response = await taskReadQueries.getTasks();

        res.status(200).send(response);
    } catch (err) {
        console.log(err);

        res.status(500);
    }
});

router.get('/tasks/:taskId', async (req, res, _next) => {
    try {
        const response = await taskReadQueries.getTask(req.params.taskId);

        res.status(200).send(response);
    } catch (err) {
        console.log(err);

        res.status(500);
    }
});

router.get('/tasks/:taskId/delete', async (req, res, _next) => {
    try {
        await taskDeleteQueries.deleteTask(req.params.taskId);

        res.status(200).json({ success: true });
    } catch (err) {
        console.log(err);

        res.status(500).json({ success: false });
    }
});

module.exports = router;