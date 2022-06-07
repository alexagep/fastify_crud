
let {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../context.js');




let {
    getUserValidation,
    addUserValidation,
    updateUserValidation,
    deleteUserValidation
} = require('../validation.js');



const routes = [
    {
        method: 'GET',
        url: '/users',
        handler: getAllUsers
    },
    {
        method: 'GET',
        url: '/user/:id',
        handler: getUserById,
        schema: getUserValidation
    },
    {
        method: 'POST',
        url: '/user/create',
        handler: createUser,
        schema: addUserValidation
    },
    {
        method: 'PUT',
        url: '/user/update/:id',
        handler: updateUser,
        schema: updateUserValidation
    },
    {
        method: 'DELETE',
        url: '/user/delete/:id',
        handler: deleteUser,
        schema: deleteUserValidation
    }
];


module.exports = routes;