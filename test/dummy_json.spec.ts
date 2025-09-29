import pactum from 'pactum';

const BASE_URL = 'https://dummyjson.com';

describe('DummyJSON API - PactumJS Tests', () => {

  // 1 - Listar produtos (GET)
  it('Deve retornar uma lista de produtos', async () => {
    await pactum.spec()
      .get(`${BASE_URL}/products`)
      .expectStatus(200)
      .expectJsonLike({
        products: [{ id: 1 }]
      });
  });

  // 2 - Buscar um produto específico (GET by ID)
  it('Deve retornar um produto pelo ID', async () => {
    await pactum.spec()
      .get(`${BASE_URL}/products/1`)
      .expectStatus(200)
      .expectJsonLike({
        id: 1,
        title: "Essence Mascara Lash Princess"
      });
  });

  // 3 - Criar produto (POST)
  it('Deve criar um novo produto', async () => {
    await pactum.spec()
      .post(`${BASE_URL}/products/add`)
      .withJson({
        title: "Notebook Gamer",
        price: 4500,
        category: "electronics"
      })
      .expectStatus(201)
      .expectJsonLike({
        title: "Notebook Gamer"
      });
  });

  // 4 - Atualizar produto (PUT)
  it('Deve atualizar um produto existente', async () => {
    await pactum.spec()
      .put(`${BASE_URL}/products/1`)
      .withJson({
        title: "iPhone 9 atualizado",
        price: 499
      })
      .expectStatus(200)
      .expectJsonLike({
        title: "iPhone 9 atualizado"
      });
  });

  // 5 - Deletar produto (DELETE)
  it('Deve deletar um produto', async () => {
    await pactum.spec()
      .delete(`${BASE_URL}/products/1`)
      .expectStatus(200)
      .expectJsonLike({
        isDeleted: true
      });
  });

  // 6 - Buscar usuários (GET)
  it('Deve retornar lista de usuários', async () => {
    await pactum.spec()
      .get(`${BASE_URL}/users`)
      .expectStatus(200)
      .expectJsonLike({
        users: [{ id: 1 }]
      });
  });

  // 7 - Buscar um usuário específico
  it('Deve retornar um usuário pelo ID', async () => {
    await pactum.spec()
      .get(`${BASE_URL}/users/1`)
      .expectStatus(200)
      .expectJsonLike({
        id: 1,
        firstName: "Emily"
      });
  });

  // 8 - Buscar posts
  it('Deve retornar lista de posts', async () => {
    await pactum.spec()
      .get(`${BASE_URL}/posts`)
      .expectStatus(200)
      .expectJsonLike({
        posts: [{ id: 1 }]
      });
  });

  // 9 - Buscar comentários
  it('Deve retornar lista de comentários', async () => {
    await pactum.spec()
      .get(`${BASE_URL}/comments`)
      .expectStatus(200)
      .expectJsonLike({
        comments: [{ id: 1 }]
      });
  });

  // 10 - Buscar carrinhos
  it('Deve retornar lista de carrinhos', async () => {
    await pactum.spec()
      .get(`${BASE_URL}/carts`)
      .expectStatus(200)
      .expectJsonLike({
        carts: [{ id: 1 }]
      });
  });

});