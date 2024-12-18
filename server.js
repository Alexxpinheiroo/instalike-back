// Importa o framework Express, essencial para criar aplicações web.
import express from "express";
import routes from "./src/routes/postsRoutes.js";

// Cria uma instância do aplicativo Express, que será o núcleo da aplicação.
const app = express();
routes(app)
// Inicia o servidor na porta 3000 e exibe uma mensagem no console.
app.listen(3000, () => {
    console.log("Servidor escutando...");
});



