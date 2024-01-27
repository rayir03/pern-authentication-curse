const {Router} = require("express");
const { getUsers, register, login, protected, logout} = require("../controllers/auth");
const { registerValidation, loginValidation } = require("../validators/auth");
const { validationMiddelware, } = require("../middlewares/validations-middleware");
const { userAuth } = require("../middlewares/auth-middleware");
const router = Router();

router.get("/get-users", getUsers);
router.get("/protected",userAuth ,protected);

router.post("/register", registerValidation, validationMiddelware, register);

router.post("/login", loginValidation, validationMiddelware, login);

router.get("/logout", userAuth, logout);




module.exports = router;