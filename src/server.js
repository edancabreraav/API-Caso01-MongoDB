require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const logger = require('./middleware/logger');
const PORT = process.env.PORT || 3000

//Conexión a redis y mongo
const {redisClient, mongoose} = require('./config/db');

//Importar las rutas
const oficinaRoutes = require('./routes/oficinaRoutes')
const clienteRoutes = require('./routes/clienteRoutes')


const app = express();




//middlewares
app.use(express.json()); //Middleware para parsear solicitudes a JSON
app.use(cors());         //Middleware para permitir solicitudes de recursos cruzados
app.use(morgan('dev'));  //Middleware para registrar las solicitudes HTTP
app.use(logger);         //Middleware personalizado para registrar las solicitudes en Redis

app.use('/api/oficinas', oficinaRoutes);
app.use('/api/clientes', clienteRoutes);

app.listen(PORT, () => {console.log(`Server corriendo en puerto ${PORT}`)})


