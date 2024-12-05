require('dotenv').config();
const mongoose = require('mongoose');
const redis = require('redis');

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{console.log('Conectado a MongoDB');})
    .catch((error)=>{console.error('Error al conetarse a MongoDB: ',error)})

const redisClient = redis.createClient({
    url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
});

redisClient.on('error', (err) => {
    console.error('Error en la conexión a Redis', err);
});

redisClient.connect().then(() => {
    console.log('Conectado a Redis');
}).catch((err) => {
    console.error('No se pudo conectar a Redis', err);
});

 module.exports = {redisClient, mongoose}