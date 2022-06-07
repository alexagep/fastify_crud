//run a fastify server
const app = require('fastify')({
    logger: true
});

const fastifyEnv = require('@fastify/env')


app.register(require('@fastify/routes'))   // Add and register plugin

app.register(require('middie'))    //for using middlewares

const userRoutes = require('./routes/users.js');




// hooks
app.addHook("onRoute", routeOptions => {

    console.log(`>>> New HOOK: Registered route: ${routeOptions.url}`);

});

app.decorateRequest('user', '')

// Update our property
app.addHook('preHandler', (req, reply, done) => {
    req.user = 'Bob Dylan'

    done()
})


const schema = {
    type: 'object',
    required: ['PORT'],
    properties: {
        PORT: {
            type: 'string',
            default: 3000
        },
        MONGO_URL: {
            type: 'string',
            default: 'todo-list'
        }
    }
}

const options = {
    schema: schema,
    dotenv: true,
}


const initialize = async () => {
    app
    .register(fastifyEnv, options)
    .ready((err) => {
        if (err) console.error(err)

        console.log(app.config)

    // Require external modules
    const mongoose = require('mongoose')

    // Connect to DB
    mongoose.connect(app.config.MONGO_URL)
        .then(() => console.log('MongoDB connected …'))
        .catch(err => console.log(err))
        
    })
}

initialize()




// app.register(require('@fastify/mongodb'), {
//     url: 'mongodb://localhost:27017/test'
// })

// app.post('/user/getByName', function (req, reply) {
//     const users = this.mongo.db.collection('items')

//     users.findOne({ name: req.body.name }, (err, user) => {
//         if (err) {
//             reply.send(err)
//             return
//         }
//         reply.send(user)
//     })
// })


// app.get('/user/getById/:id', function (req, reply) {
//     const users = this.mongo.db.collection('items')

//     // if the id is an ObjectId format, you need to create a new ObjectId
//     const id = this.mongo.ObjectId(req.params.id)
//     users.findOne({ _id: id }, (err, user) => {
//         if (err) {
//             reply.send(err)
//             return
//         }
//         reply.send(user)
//     })
// })





// Declare a route
app.get("/", function (req, reply) {

    reply.send(`Hello, ${req.user}!`)

});


// Register routes to handle user posts
userRoutes.forEach(route => {
    app.route(route);
});




// app.register(require('fastify-swagger'), {
//     routePrefix: '/documentation',
//     swagger: {
//         info: {
//             title: 'Fastify API',
//             description: 'API Documentation',
//             version: '1.0.0'
//         },
//         externalDocs: {
//             url: 'https://swagger.io',
//             description: 'Find more info here'
//         },
//         host: 'localhost',
//         schemes: ['http'],
//         consumes: ['application/json'],
//         produces: ['application/json']
//     },
//     exposeRoute: true
// });




// app.addHook('onRoute', (routeOptions) => {

//     //Some code

//     routeOptions.method

//     routeOptions.schema

//     routeOptions.url // the complete URL of the route, it will inclued the prefix if any

//     routeOptions.path // `url` alias

//     routeOptions.routePath // the URL of the route without the prefix

//     routeOptions.bodyLimit

//     routeOptions.logLevel

//     routeOptions.logSerializers

//     routeOptions.prefix

//     console.log(routeOptions);
// })





(async () => {
    try {
        await app.ready()
        await app.listen(app.config.PORT)
        app.log.info(`server listening on PORT ${app.config.PORT}`);
    } catch (error) {
        app.log.error(error)
        process.exit(1)
    }
})()