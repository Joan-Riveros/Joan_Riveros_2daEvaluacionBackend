const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
require('dotenv').config();

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Microservicio GraphQL funcionando en http://localhost:${PORT}/graphql`);
});

console.log('Schema cargado:', schema);
