import express from 'express'
import 'reflect-metadata'
import mongoose from 'mongoose'
import { ListaResolver } from './Domain/domain/Resolver/Lista'

import graphqlHTTP from 'express-graphql'
import { buildSchema } from 'type-graphql'
const app = express()
mongoose.connect('', { useNewUrlParser: true })

const main = async () => {
  const schema = await buildSchema({
    resolvers: [ListaResolver],
  })

  app.use(
    '/graphql',
    graphqlHTTP({
      schema: schema,
      graphiql: true,
    }),
  )

  app.listen(3000, () => {
    console.log('run')
  })
}

main()
