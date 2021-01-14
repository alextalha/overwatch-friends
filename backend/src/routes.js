
const { Router } = require('express');
const knex = require('./database')

const routes = Router();
const { stats, complete,specific_hero } = require('./controllers/owapi');
const { getAllUsers } = require('./controllers/usuarios');

// usuarios 
routes.get('/users', getAllUsers );

// owapi
routes.get('/overwatch/stats/:plataform/:region/:battletag', stats);
routes.get('/overwatch/stats/:plataform/:region/:battletag/complete', complete);
routes.get('/overwatch/stats/:plataform/:region/:battletag/heroes/:heroes', specific_hero);




module.exports = routes;