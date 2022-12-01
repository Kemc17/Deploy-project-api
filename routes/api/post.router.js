const express = require("express");
const router = express.Router();

const ROLES = require("../../data/roles.constants.json");

const postController = require("../../controllers/post.controller");

const postValidators = require("../../validators/post.validators");
const runValidations = require("../../validators/index.middleware");

const {authentication, authorization} = require("../../middleware/auth.middleware");

router.get("/", postController.findAll);
router.get("/own", authentication, postController.findOwn);
// router.get("/user/:identifier",
//   postValidators.findPostByIdValidator,
//   runValidations,
//   postController.findPostByUser
// );
router.get("/:identifier",
  postValidators.findPostByIdValidator,
  runValidations,
  postController.findOneById);

router.post("/", 
  authentication,
  authorization(ROLES.ADMIN),
  postValidators.createPostValidator,
  runValidations,
  postController.create)

  router.patch("/visibility/:identifier",
    authentication,
     authorization(ROLES.ADMIN),
    postValidators.findPostByIdValidator,
    runValidations,
    postController.togglePostVisibility
  );

  router.patch("/like/:identifier",
    authentication,
    authorization(ROLES.USER),
    postValidators.findPostByIdValidator,
    runValidations,
    postController.togglePostLike
  );

module.exports = router;