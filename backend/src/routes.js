
const { Router } = require('express');
const routes = Router();
const { stats, complete,specific_hero } = require('../controllers/owapi');

routes.get('/overwatch/stats/:plataform/:region/:battletag', stats);
routes.get('/overwatch/stats/:plataform/:region/:battletag/complete', complete);
routes.get('/overwatch/stats/:plataform/:region/:battletag/heroes/:heroes', specific_hero);


module.exports = routes;