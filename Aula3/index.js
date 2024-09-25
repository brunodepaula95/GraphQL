const { gql, ApolloServer } = require('apollo-server');

/**
 * Arguments
 */

const produtos = [
  {
    id: 1,
    nome: 'Notebook',
    preco: 123.45
  },
  {
    id: 2,
    nome: 'TV',
    preco: 12345.45
  }

]

const usuarios = [
  {
    nome: 'Bruno',
    idade: 25,
    salario: 123.45,
    ativo: true,
    id: 1
  },
  {
    nome: 'Rafael',
    idade: 25,
    salario: 123.45,
    ativo: true,
    id: 2
  }

]

const typeDefs = gql`
    type Usuario {
      nome: String
      idade: Int
      salario: Float
      ativo: Boolean
      id: ID
    }

    type Query { 
      usuarios: [Usuario]
      produtos: [Produto]
      usuario(id: int): Usuario #Aqui você passa o argumento que seria o id do tipo int
    }

`;
//esse usuario é um schema, você cria o objeto Usuario e o torna disponivel para consulta dentro de Query
//Abaixo em resolvers quando for passar as informações, será quase da mesma forma quando for realizar a consulta
/*
query{
  usuario{
    nome
    idade
    salario
    ativo
    id
  }
}

*/
const resolvers = {
  Query: {
    usuarios() {
      return usuarios;
    },
    usuario(_, args){
      const {id, nome} = args;
      if (id) return usuarios.find((usuarios) => usuario.id == id);
      return usuarios.find((usuarios) => usuario.nome == nome);
    },
    produtos() {
      return produtos; 
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen();