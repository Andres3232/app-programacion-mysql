import { Router } from "express";
import { UsuarioController } from "../controllers/usuarioController";
import { validarJWT } from '../middlewares/validar-jwt';
import { esAdminRole } from '../middlewares/validar-roles';


const router = Router();

const usuarioController = new UsuarioController();



router.get("/add",validarJWT, (request, response) => {
  response.render("add");
});

router.get("/lista",usuarioController.listUsers)

router.post("/add-user",validarJWT, usuarioController.createUser);

router.get("/search",usuarioController.searchUser);

router.get("/edit", validarJWT,esAdminRole,usuarioController.getUserData);

router.post("/edit-user",validarJWT,esAdminRole, usuarioController.updateUser);

router.post("/delete-user",validarJWT,esAdminRole, usuarioController.deleteUser);
router.delete("/delete-user/:id",validarJWT,esAdminRole, usuarioController.deleteUser);


export { router };
