const Joi = require('joi');


const getUserValidation = {
    params: {
        id: {type: 'string'}
    },
    response:{
        200: {
            type: 'object',
            properties: {
                _id: {type: 'string'},
                name: {type: 'string'},
                description: {type: 'string'},
                qty: {type: 'integer'}
            }
        },
    }
}



const addUserValidation = {
    body: {
        type: 'object',
        required: ['name', 'description', 'qty'],
        properties: {
            name: {type: 'string'},
            description: {type: 'string'},
            qty: {type: 'integer'},
        }
    },
    response:{
        200: {
            type: 'object',
            properties: {
                message: {type: 'string'}
            }
        },
    }
}



const updateUserValidation = {
    params: {
        id: {type: 'string'}
    },
    body: {
        type: 'object',
        properties: {
            name: {type: 'string'},
            description: {type: 'string'},
            qty: {type: 'integer'},
        }
    },
    response:{
        200: {
            type: 'object',
            properties: {
                message: {type: 'string'}
            }
        },
    }
}



const deleteUserValidation = {
    params: {
        id: {type: 'string'}
    },
    response:{
        200: {
            type: 'object',
            properties: {
                message: {type: 'string'}
            }
        },
    }
}





module.exports = {
    getUserValidation,
    addUserValidation,
    updateUserValidation,
    deleteUserValidation
}