const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLBoolean,
} = require('graphql');
const axios = require('axios');
require('dotenv').config();

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLInt },
        email: { type: GraphQLString },
        is_active: { type: GraphQLBoolean },
    }),
});

const RootQuery = new GraphQLObjectType({
    name: 'Query',
    fields: {
        _empty: {
            type: GraphQLString,
            resolve: () => 'Servidor activo ✔️',
        },
    },
});

const RootMutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: {
            type: UserType,
            args: {
                email: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: async (_, args) => {
                try {
                    console.log('FASTAPI_URL:', process.env.FASTAPI_URL);
                    const res = await axios.post(`${process.env.FASTAPI_URL}/users/register`, {
                        email: args.email,
                        password: args.password,
                    });
                    return res.data;
                } catch (error) {
                    console.error('Error en createUser:', error?.response?.data || error.message);
                    throw new Error('Error al crear usuario');
                }
                },
        },
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation,
});
