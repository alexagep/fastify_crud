// const fastifyPlugin = require('fastify-plugin');
// const fastifyMongo = require('fastify-mongodb');
// const fastify = require('fastify')();

// // async function dbConnector(fastify, options) {
// //     fastify.register(fastifyMongo, {
// //         url: 'mongodb://localhost:27017/fastify_db',
// //         useUnifiedTopology: true,
// //         useNewUrlParser: true
// //     });
// // }


// // module.exports = fastifyPlugin(dbConnector);


// module.exports = async function application(fastify, opts) {
//     // ...

//     fastify.register(require('fastify-mongodb'), {
//         url: 'mongodb://localhost:27017/todo-list'
//     })

//     // our code..
// }