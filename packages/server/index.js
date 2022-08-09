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
   * このembed: trueのオプションはどうしたんだ？
   * ASを使用する際の推奨設定です。
   * AS3では後方互換性のためにデフォルトではありません。
   * はAS4でのデフォルトになります。本番環境では
   * 代わりに ApolloServerPluginLandingPageProductionDefault を使用します。
   **/
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

// listen` メソッドは、ウェブサーバーを起動します。
exports.handler = server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
