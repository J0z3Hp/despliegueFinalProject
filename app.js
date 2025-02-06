import express from "express";
import dotenv from "dotenv"; 
// Importamos todas nuestras funciones
import { connectionMongo } from "./src/config/dataBase.js"; 
import { productRouter } from "./src/routes/product.routes.js";
import { usersRouter } from "./src/routes/user.routes.js";
import { loginUserRouter } from "./src/routes/loginUser.routes.js";
import { adminRouter } from "./src/routes/admin.routes.js";
import { orderRouter } from "./src/routes/orders.routes.js";
import { loginAdminRouter } from "./src/routes/loginAdmin.routes.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";


// Configurar el uso de nuestro servidor 
export const app = express();
dotenv.config(); 
connectionMongo (); 
// const port = process.env.PORT   
app.use(cors()); 

//Configuracciones para acceder al front
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//RUTAS QUE DEBE UTILIZAR 
app.use(express.json()); 
app.use("/productos", productRouter);
app.use("/usuarios", usersRouter);
app.use("/iniciarSesion", loginUserRouter);
app.use("/administradores", adminRouter);
app.use("/ordenes", orderRouter);
app.use("/inicarSesionAdmin", loginAdminRouter);


// Ejecutar el servidor en nuestro computador
// app.listen(port, () => {
//     console.log("El servidor se esta ejecutando coreectamente, en el puerto", port);
// });      

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, "public")));

// Ruta principal para servir index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

