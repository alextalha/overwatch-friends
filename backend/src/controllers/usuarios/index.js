
const { response } = require('express');
const knex = require('./../../database')


module.exports = {

     getAllUsers(request,response){
       knex('usuarios').then(results =>  response.json(results));     
    },

    async getUser(request,response, next){
            const {id} = request.params

            console.log('id =======>', id)
        try{
            const user = await knex('usuarios')
            .where({id})

            return response.json(user)

        }catch(error){
            next(error)
        }
    },

    async createUser(request,response,next){
        try{
            const { email , battletag, plataforma } = request.body
        
            await knex('usuarios').insert({
                email,
                battletag,
                plataforma
             })
        
            return response.status(201).send()

        }catch(error){
            next(error)
        }
           
    },

    async updateUser(request,response,next){
        try{
            const {email} = request.body
            const {id} = request.params

            await knex('usuarios')
            .update({email})
            .where({id})

            return response.send();

        }catch(error){
            next(error)
        }

    },

    async deleteUser(request,response,next){

        try{
            const { id } = request.params
            await knex('usuarios')
            .where({id})
            .del()

            return response.send();
            
        }catch(error){
            next(error)
        }

    }
}