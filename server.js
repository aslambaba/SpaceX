const express = require('express');
const cors = require('cors');
const {graphqlHTTP} = require('express-graphql');
const SpaceXSchema = require('./schema/SpaceXSchema');
const app = express();

app.use(cors());
app.use('/graphql',graphqlHTTP({
    schema: SpaceXSchema,
    graphiql: true,
}))

const PORT = 1200;
app.listen(PORT, ()=>{console.log(`Server is Running on ${PORT}`)});