import { ApolloServer } from 'apollo-server-lambda'
import { schema } from './_lib/schema'
import { createContext } from './_lib/context'

const server = new ApolloServer({
  schema,
  context: createContext,
})

export const handler = server.createHandler()
