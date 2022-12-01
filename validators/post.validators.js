const { body, param } = require("express-validator")
const validators = {};

validators.createPostValidator = [
  body("title")
    .notEmpty().withMessage("El titulo no debe de ser vacio"),
  body("description")
    .notEmpty().withMessage("La description no debe de ser vacia")
    .isLength({  max: 280}).withMessage("La description no debe superar los 240 caracteres"),
  body("image")
    .optional()
    .notEmpty().withMessage("Debes de enviar una imagen")
    .isURL().withMessage("La imagen debe de ser una URL")
];

validators.findPostByIdValidator = [
  param("identifier")
    .notEmpty().withMessage("El id no debe de ir vacio")
    .isMongoId().withMessage("El id debe de ser mongo")
]

module.exports = validators;