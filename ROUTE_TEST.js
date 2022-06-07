module.exports = function todoRoutes (app, opts, next) {
  app.post('/todos', async function createTodo (request, reply) {
    const todosCollection = app.mongo.db.collection('todos')
    const result = await todosCollection.insertOne(request.body)
    reply.code(201)
    return { id: result.insertedId }
  })
  next()
}
