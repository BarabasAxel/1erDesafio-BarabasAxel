class ProductManager {
    constructor() {
      this.products = [];
      this.lastProductId = 0;
    }
  
    addProduct(product) {
      // Validar que todos los campos sean obligatorios
      if (
        !product.title ||
        !product.description ||
        !product.price ||
        !product.thumbnail ||
        !product.code ||
        !product.stock
      ) {
        console.error("Todos los campos son obligatorios");
      }
  
      // Validar que el campo "code" no esté repetido
      const existingProduct = this.products.find((p) => p.code === product.code);
      if (existingProduct) {
        console.error("El código del producto ya está en uso");
      }
  
      // Agregar el producto al arreglo con un id autoincrementable
      const newProduct = {
        id: ++this.lastProductId,
        ...product,
      };
      this.products.push(newProduct);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find((p) => p.id === id);
      if (!product) {
        console.error("Producto no encontrado");
      }
      return product;
    }
  }
  
  // Crear una instancia de ProductManager
  const productManager = new ProductManager();
  
  // Ejemplo de como cargar la clase
  productManager.addProduct({
    title: "Producto 1",
    description: "Descripción del producto 1",
    price: 10,
    thumbnail: "url_1",
    code: "ABC123",
    stock: 50,
  });
  
  productManager.addProduct({
    title: "Producto 2",
    description: "Descripción del producto 2",
    price: 13,
    thumbnail: "url_2",
    code: "XYZ456",
    stock: 30,
  });
  
  console.log(productManager.getProducts());
  console.log(productManager.getProductById(1));
  console.log(productManager.getProductById(3)); // Debería mostrar "Producto no encontrado"
  