const express = require("express");
const router = express.Router();

//import todos los enrutadores
const postRouter = require("./post.router");
const authRouter = require("./auth.router");

//Definir las ruta de las
router.use("/auth", authRouter);
router.use("/post", postRouter);

module.exports = router;