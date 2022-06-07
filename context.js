
const userSchema = require('./model')



//get all users
const getAllUsers = async (request, reply) => {
    let user = await userSchema.find({});
    reply.send(user);
};



//get user by id
const getUserById = async (request, reply) => {
    let id = request.params.id;
    let user = await userSchema.findOne({ _id: id });

    reply.send(user);
};

//create user
const createUser = async (request, reply) => {
    let body = request.body;
    await userSchema.create(body);

    reply.send({
        message: 'User created successfully',
    });
};

//update user
const updateUser = async (request, reply) => {
    let id = request.params.id;
    let body = request.body;
    let user = await userSchema.findByIdAndUpdate(id, {
        name: body.name,
        description: body.description,
        qty: body.qty,

    }, { new: true });

    if (!user) {
        reply.send({
            message: 'User not found',
        });
    } else {
        reply.send({
            message: 'User updated successfully',
        });
    }
};

//delete user
const deleteUser = async (request, reply) => {
    let id = request.params.id;
    const user = await userSchema.findByIdAndRemove(id)
    if (!user) {
        reply.send({
            message: 'User not found',
        });
    }
    else {
        reply.send({
            message: 'User deleted successfully',
        });
    }
};



module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};