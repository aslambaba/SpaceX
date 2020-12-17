const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const SpaceXSchema = require('./schema/SpaceXSchema');
const app = express();

app.use('/graphql',graphqlHTTP({
    schema: SpaceXSchema,
    graphiql: true,
}))

const PORT = 1100;
app.listen(PORT, ()=>{console.log(`Server is Running on ${PORT}`)});