// crud.js
async function request(url, options = {}) {
  const response = await fetch(url, options);
  return await response.json();
}

async function getProducts() {
  return await request("https://dummyjson.com/products?limit=5");
}

async function createProduct() {
  return await request("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "Notebook Gamer",
      price: 4500,
      category: "electronics",
    }),
  });
}

async function updateProduct() {
  return await request("https://dummyjson.com/products/1", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "Notebook Gamer Atualizado",
      price: 4000,
    }),
  });
}

async function deleteProduct() {
  return await request("https://dummyjson.com/products/1", {
    method: "DELETE",
  });
}

// Export CommonJS
module.exports = { getProducts, createProduct, updateProduct, deleteProduct };
