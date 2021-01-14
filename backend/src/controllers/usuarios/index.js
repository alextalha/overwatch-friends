const knex = require('./../../database')


module.exports = {

     getAllUsers(request,response){
       knex('usuarios').then(results =>  response.json(results));     
    } 
}