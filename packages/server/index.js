const { ApolloServer, gql } = require("apollo-server-cloud-functions");
const {
  ApolloServerPluginLandingPageLocalDefault,
} = require("apollo-server-core");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type User {
    photoURL: String
    name: String
    bio: String
    phone: String
    email: String
  }

  input UpdateUserInput {
    photoURL: String!
    id: ID
    name: String!
    bio: String!
    phone: String!
    email: String!
  }

  type Query {
    user: User
  }

  type Mutation {
    updateUser(data: UpdateUserInput): User
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    user: () => {
      return {
        photoURL: "https://avatars2.githubusercontent.com/u/17098180?s=460&v=4",
        name: "Xanthe Neal",
        phone: "908249274292",
        bio: "I am a software developer and a big fan of devchallenges...",
        email: "xanthe.neal@gmail.com",
      };
    },
  },
  Mutation: {
    updateUser: (_, { user }) => {
      return user;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

exports.handler = server.createHandler();
