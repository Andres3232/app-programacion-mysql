"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerLogin = void 0;
var express_1 = require("express");
var login_1 = require("../controllers/login");
var routerLogin = express_1.Router();
exports.routerLogin = routerLogin;
routerLogin.get("/", function (request, response) {
    response.render("home");
});
routerLogin.post('/login', login_1.login);
routerLogin.get("/signup", function (request, response) {
    response.render("signup");
});
routerLogin.post("/signup", login_1.signup);
