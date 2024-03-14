const PromiseRouter = require('express-promise-router');
const axios = require('axios').default;

const router = PromiseRouter();

router.get('/settings/profile/oauth/token', async (_req, res, _next) => {
    var options = {
        method: 'POST',
        url: `https://${process.env.AUTH0_DOMAIN}/oauth/token`,
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: process.env.AUTH0_API_CLIENT_ID,
            client_secret: process.env.AUTH0_API_CLIENT_SECRET,
            audience: process.env.AUTH0_API_AUDIENCE,
        })
    };

    axios.request(options)
        .then(function (response) {
            console.error(response);
            res.status(200).send(response.data);
        }).catch(function (error) {

            res.status(500).json({ success: false });
        });
});

module.exports = router;