import { ApolloClient, InMemoryCache } from "@apollo/client";

// Apolloクライアントの作成
export const client = new ApolloClient({
  uri: "https://asia-northeast1-steady-ether-356216.cloudfunctions.net/authentication-app",
  cache: new InMemoryCache(),
});
