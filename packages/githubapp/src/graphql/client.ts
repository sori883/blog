import { ApolloClient, InMemoryCache } from "@apollo/client";

const APOLLO_URI = process.env.APOLLO_URI;

export const client = new ApolloClient({
  uri: `${APOLLO_URI}/graphql`,
  cache: new InMemoryCache(),
});