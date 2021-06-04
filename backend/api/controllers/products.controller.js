const Producto = require("../models/Producto");
class ProductController {
  constructor() {}

  async ObtenerProductos(req, res) {
    const productos = await Producto.find();
    if (!productos) {
      res.json({ msg: "No existen productos dentro de esta BD" });
    }

    res.json({ items: productos });
  }
  ObtenerProducto(req, res) {}
}

module.exports = new ProductController();
