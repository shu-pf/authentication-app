const { ApolloServer, gql } = require("apollo-server");

// スキーマは型定義の集合体である（だから "typeDefs"）．
// に対して実行されるクエリの "形 "を定義するものである。
// あなたのデータです。
const typeDefs = gql`
  # GraphQL文字列のコメント（このようなもの）は、ハッシュ（#）記号で始まります。

  # この "Book "タイプは、データソースのすべての本のクエリ可能なフィールドを定義します。
  type Book {
    title: String
    author: String
  }

  # "Query "タイプは特別で、以下のような利用可能なクエリをすべてリストアップします。
  # クライアントが実行できることと、それぞれの戻り値の型を示します。この中で
  # の場合、"books "クエリは0個以上のBooks（上で定義）の配列を返します。
  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

const {
  ApolloServerPluginLandingPageLocalDefault,
} = require("apollo-server-core");

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
  /**
   * What's up with this embed: true option?
   * These are our recommended settings for using AS;
   * they aren't the defaults in AS3 for backwards-compatibility reasons but
   * will be the defaults in AS4. For production environments, use
   * ApolloServerPluginLandingPageProductionDefault instead.
   **/
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

// listen` メソッドは、ウェブサーバーを起動します。
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
