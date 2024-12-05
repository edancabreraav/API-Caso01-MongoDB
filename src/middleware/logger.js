const {redisClient} = require('../config/db');

module.exports = (req, res, next) => {
    res.on('finish', async () => {
        
        const fecha = new Date();
        const key = `${req.method}:${fecha.toLocaleDateString()}-${fecha.getHours()}-${fecha.getMinutes()}-${fecha.getSeconds()}:${req.originalUrl}`;

        const valor = JSON.stringify({
            clave: key,
            time: new Date(),
            req: {
                method: req.method,
                url: req.originalUrl,
                headers: req.headers,
                body: req.body
            },
            res: {
                statusCode: res.statusCode,
                statusMessage: res.statusMessage,
                response: req.method === 'GET' ? res.data : null
            }
        });

        await redisClient.set(key ,valor)
    });
    next();
};

