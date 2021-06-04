const express = require("express");
const mongoose = require("mongoose");
const Producto = require("./models/Producto");
const ProductosRoute = require("../api/routes/products.routes");
const cors = require("cors");
const app = express();
mongoose.connect(
  "mongodb+srv://root:root@cluster0.gd8ws.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.connection.on("open", (_) => {
  console.log("Base de datos conectada");
});
app.use(cors());
app.use("/api/", ProductosRoute);
// const producto = new Producto({
//   name: "Wiggle Room",
//   store: "Tamango",
//   price: 15600,
//   units_in_pack: 6,
//   fast_shipping: false,
//   description:
//     "Considerada la hermana grande de nuestra clásica Green Room. West Coast IPA de aspecto cristalino pero profundamente aromática. Es comer pomelo en un bosque de secuoyas mirando el mar… Puro equilibrio.\n\n6 Pack\n6% ABV\n355 ml",
//   image: "https://www.tamango.cl/img/uploads/fzy2b3ada.jpeg",
// }); //
// producto.save()
app.listen(9000);
