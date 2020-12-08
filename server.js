const express = require('express')
const graphqlHTTP = require('express-graphql')
const MyGraphQLSchema = require('./schema.js');

const app = express()

app.use('/graphql', graphqlHTTP({
    schema: MyGraphQLSchema,
    graphiql: true
}))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('server started on port ' + PORT)
})