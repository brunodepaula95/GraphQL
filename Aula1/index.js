const { gql, ApolloServer } = require('apollo-server');

/**
 * Scalar Types
 * Int
 * Float
 * String
 * Boolean
 * ID
 */

//Type Query é o tipo de consulta que sera feito

//Quando você entrar no apollo server para iniciar uma pesquisa comece da seguinte forma
//query{
//}
const typeDefs = gql`
    type Query { 
      idade: Int
      salario: Float
      nome: String
      ativo: Boolean
      id: ID
      tecnologias: [String]! #! é um tipo de dado que não pode ser nulo
    }

`;
//cada query acima precisa retornar um metodo abaixo no resolvers
//Resolvers tem que estar no mesmo contexto de tipos
const resolvers = {
  Query: {
    tecnologias(){
      return ["GraphQL", "React", "Node"]
    },

    idade() {
      return 25;
    },
    salario() {
      return 1234.56;
    },
    nome() {
      return "João";
    },
    ativo() {
      return true;
    },
    id() {
      return "123456789";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen();