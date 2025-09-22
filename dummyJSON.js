// CRUD com DummyJSON API (https://dummyjson.com)
// Execute: node crud.js

// Importa fetch se usar Node < 18 (descomente se precisar)
// import fetch from "node-fetch";

async function request(url, options = {}) {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log("✅ Resposta:", data);
  } catch (error) {
    console.error("❌ Erro:", error);
  }
}

// 1. GET - Buscar lista de produtos
async function getProducts() {
  console.log("\n📌 GET - Lista de produtos:");
  await request("https://dummyjson.com/products?limit=5");
}

// 2. POST - Criar novo produto
async function createProduct() {
  console.log("\n➕ POST - Criar produto:");
  await request("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "Notebook Gamer",
      price: 4500,
      category: "electronics",
    }),
  });
}

// 3. PUT - Atualizar produto existente
async function updateProduct() {
  console.log("\n✏️ PUT - Atualizar produto (id=1):");
  await request("https://dummyjson.com/products/1", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "Notebook Gamer Atualizado",
      price: 4000,
    }),
  });
}

// 4. DELETE - Excluir produto
async function deleteProduct() {
  console.log("\n🗑️ DELETE - Remover produto (id=1):");
  await request("https://dummyjson.com/products/1", {
    method: "DELETE",
  });
}

// Executa todos em sequência
async function main() {
  await getProducts();
  await createProduct();
  await updateProduct();
  await deleteProduct();
}

main();
