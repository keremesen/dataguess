"use client";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/graphql",
  cache: new InMemoryCache(),
});

const ApolloProviderWrapper = ({ children }) => {
  return <ApolloProvider client={client}> {children} </ApolloProvider>;
};

export default ApolloProviderWrapper;
// bu şekilde kullanmayı denedim fakat hydrate hatası aldığım için kullanamadım.