"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
var usuarioService_1 = require("../services/usuarioService");
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var UsuarioController = /** @class */ (function () {
    function UsuarioController() {
    }
    //metodo para listar usuarios
    UsuarioController.prototype.listUsers = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var users, options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, usuarioService_1.userService.list()];
                    case 1:
                        users = _a.sent();
                        options = {
                            year: 'numeric', month: 'numeric', day: 'numeric',
                            /* hour: 'numeric', minute: 'numeric', second: 'numeric', */
                            hour12: true,
                        };
                        users.map(function (user) {
                            //@ts-ignore
                            user.fecha = new Intl.DateTimeFormat(options).format(user.fecha);
                        });
                        return [2 /*return*/, response.render("index", {
                                users: users
                            })];
                }
            });
        });
    };
    //metodo para agregar usuario
    UsuarioController.prototype.createUser = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, username, email, Telefono, Ciudad, Estado, Rol, Password, fecha, salt, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, username = _a.username, email = _a.email, Telefono = _a.Telefono, Ciudad = _a.Ciudad, Estado = _a.Estado, Rol = _a.Rol, Password = _a.Password, fecha = _a.fecha;
                        Telefono = parseInt(Telefono);
                        salt = bcryptjs_1.default.genSaltSync();
                        Password = bcryptjs_1.default.hashSync(Password, salt);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, usuarioService_1.userService.create({
                                username: username,
                                email: email,
                                Telefono: Telefono,
                                Ciudad: Ciudad,
                                Estado: Estado,
                                Rol: Rol,
                                Password: Password,
                                fecha: fecha
                            }).then(function () {
                                response.render("message", {
                                    message: "Usuario creado con exito"
                                });
                            })];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _b.sent();
                        response.render("message", {
                            message: "Error al crear el usuario: " + err_1.message
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //metodo para buscar usuario
    UsuarioController.prototype.searchUser = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var search, users, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        search = request.query.search;
                        search = search.toString();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, usuarioService_1.userService.search(search)];
                    case 2:
                        users = _a.sent();
                        response.render("search", {
                            users: users,
                            search: search
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        response.render("message", {
                            message: "Error al buscar el usuario: " + err_2.message
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //traer la data del usuario
    UsuarioController.prototype.getUserData = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, user, date, options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.query.id;
                        id = id.toString();
                        return [4 /*yield*/, usuarioService_1.userService.getData(id)];
                    case 1:
                        user = _a.sent();
                        date = new Date();
                        options = {
                            year: 'numeric', month: 'numeric', day: 'numeric',
                            /* hour: 'numeric', minute: 'numeric', second: 'numeric', */
                            hour12: true,
                        };
                        //@ts-ignore
                        user.fecha = new Intl.DateTimeFormat(options).format(date);
                        console.log(user.fecha);
                        return [2 /*return*/, response.render("edit", {
                                user: user
                            })];
                }
            });
        });
    };
    //editar el usuario
    UsuarioController.prototype.updateUser = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, id, username, email, Telefono, Ciudad, Estado, Rol, fecha, err_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, id = _a.id, username = _a.username, email = _a.email, Telefono = _a.Telefono, Ciudad = _a.Ciudad, Estado = _a.Estado, Rol = _a.Rol, fecha = _a.fecha;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, usuarioService_1.userService.update({ id: id, username: username, email: email, Telefono: Telefono, Ciudad: Ciudad, Estado: Estado, Rol: Rol, fecha: fecha }).then(function () {
                                response.render("message", {
                                    message: "Usuario actualizado"
                                });
                            })];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_3 = _b.sent();
                        response.render("message", {
                            message: "Error al actualizar el usuario: " + err_3.message
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //borrar usuario
    UsuarioController.prototype.deleteUser = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.body.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, usuarioService_1.userService.delete(id).then(function () {
                                response.render("message", { message: "Usuario eliminado" });
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_4 = _a.sent();
                        response.render("message", {
                            message: "Error al eliminar el usuario: " + err_4.message
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return UsuarioController;
}());
exports.UsuarioController = UsuarioController;
