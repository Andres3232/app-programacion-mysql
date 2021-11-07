"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("reflect-metadata");
require("express-async-errors");
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var routesUser_1 = require("./routes/routesUser");
var routesProduct_1 = require("./routes/routesProduct");
var routerCategory_1 = require("./routes/routerCategory");
var auth_1 = require("./routes/auth");
var express_ejs_layouts_1 = __importDefault(require("express-ejs-layouts"));
var typeorm_1 = require("typeorm");
var app = express_1.default();
typeorm_1.createConnection();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//RUTAS
app.use(routesUser_1.router);
app.use(routesProduct_1.routerProduct);
app.use(routerCategory_1.routerCategory);
app.use(function (err, request, response, next) {
    if (err instanceof Error) {
        return response.status(400).json({
            error: err.message,
        });
    }
    return response.status(500).json({
        status: "error",
        message: "Internal Server Error",
    });
});
app.use(express_1.default.static('public'));
app.use(express_1.default.static(path_1.default.join(__dirname, "..", "public")));
app.use(express_ejs_layouts_1.default);
app.set("view engine", "ejs");
app.set("views", path_1.default.join(__dirname, "../views"));
app.use(auth_1.routerLogin);
app.listen(3000, function () {
    console.log("Server is running at port 3000");
});
