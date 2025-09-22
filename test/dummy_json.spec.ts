const { getProducts, createProduct, updateProduct, deleteProduct } = require("../dummy_json.js");

// Mock do fetch tipado para Jest
global.fetch = jest.fn() as jest.Mock;

const mockFetch = fetch as jest.Mock;

describe("Testes CRUD DummyJSON", () => {

  beforeEach(() => {
    mockFetch.mockClear();
  });

  test("GET products deve retornar lista de produtos", async () => {
    mockFetch.mockResolvedValueOnce({
      json: async () => ({ products: [{ id: 1, title: "Produto Teste" }] }),
    });

    const result = await getProducts();
    expect(result.products).toHaveLength(1);
    expect(result.products[0].title).toBe("Produto Teste");
  });

  test("POST product deve criar um produto", async () => {
    mockFetch.mockResolvedValueOnce({
      json: async () => ({ id: 101, title: "Notebook Gamer" }),
    });

    const result = await createProduct();
    expect(result.id).toBe(101);
    expect(result.title).toBe("Notebook Gamer");
  });

  test("PUT product deve atualizar um produto", async () => {
    mockFetch.mockResolvedValueOnce({
      json: async () => ({ id: 1, title: "Notebook Gamer Atualizado" }),
    });

    const result = await updateProduct();
    expect(result.title).toBe("Notebook Gamer Atualizado");
  });

  test("DELETE product deve remover um produto", async () => {
    mockFetch.mockResolvedValueOnce({
      json: async () => ({ id: 1, isDeleted: true }),
    });

    const result = await deleteProduct();
    expect(result.isDeleted).toBe(true);
  });

});
