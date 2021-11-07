"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerCategory = void 0;
var express_1 = require("express");
var categoryController_1 = require("../controllers/categoryController");
var validar_jwt_1 = require("../middlewares/validar-jwt");
var validar_roles_1 = require("../middlewares/validar-roles");
var routerCategory = express_1.Router();
exports.routerCategory = routerCategory;
var categoryController = new categoryController_1.CategoryController();
routerCategory.get("/add-categoria", function (request, response) {
    response.render("add-categoria");
});
routerCategory.get("/lista-categoria", categoryController.listCategories);
routerCategory.post("/add-categoria", validar_jwt_1.validarJWT, validar_roles_1.esAdminRole, categoryController.createCategory);
routerCategory.get("/edit-categoria", validar_jwt_1.validarJWT, validar_roles_1.esAdminRole, categoryController.getCategoryData);
routerCategory.post("/edit-category", validar_jwt_1.validarJWT, validar_roles_1.esAdminRole, categoryController.updateCategory);
routerCategory.post("/delete-categoria", validar_jwt_1.validarJWT, validar_roles_1.esAdminRole, categoryController.deleteCategory);
