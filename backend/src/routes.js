
const { Router } = require('express');
const knex = require('./database')

const routes = Router();
const { stats, complete,specific_hero } = require('./controllers/owapi');
const { getAllUsers, getUser, createUser, updateUser, deleteUser } = require('./controllers/usuarios');

// usuarios 
routes.get('/users', getAllUsers );
routes.get('/user/:id', getUser );
routes.post('/user/create', createUser)
routes.put('/user/update/:id', updateUser)
routes.put('/user/update/:id', updateUser)
routes.delete('/user/delete/:id', deleteUser)



// owapi
routes.get('/overwatch/stats/:plataform/:region/:battletag', stats);
routes.get('/overwatch/stats/:plataform/:region/:battletag/complete', complete);
routes.get('/overwatch/stats/:plataform/:region/:battletag/heroes/:heroes', specific_hero);




module.exports = routes;