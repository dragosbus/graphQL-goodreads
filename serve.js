const express = require('express');
const grapthqlHTTP = require('express-graphql');
const app = express();

const schema = require('./schema');

app.use('/graphql', grapthqlHTTP({
    schema,
    graphiql: true
}));



app.listen(4000);
console.log('Listening');