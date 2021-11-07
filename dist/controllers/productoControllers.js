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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
var productService_1 = require("../services/productService");
var categoryService_1 = require("../services/categoryService");
var ProductController = /** @class */ (function () {
    function ProductController() {
    }
    //metodo para listar usuarios
    ProductController.prototype.listProducts = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var products;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, productService_1.productService.list()];
                    case 1:
                        products = _a.sent();
                        return [2 /*return*/, response.render('lista-producto', { products: products
                            })];
                }
            });
        });
    };
    //metodo para agregar usuario
    ProductController.prototype.createProduct = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, productname, price, type, name, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, productname = _a.productname, price = _a.price, type = _a.type, name = _a.name;
                        price = parseInt(price);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, productService_1.productService.create({
                                productname: productname,
                                price: price,
                                type: type,
                                name: name
                            }).then(function () {
                                response.render("messageProducto", {
                                    message: "Producto creado con éxito",
                                });
                            })];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _b.sent();
                        response.render("messageProducto", {
                            message: "Error al crear el producto: " + err_1.message
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //metodo para listar las cateegorias al momento de crear un producto
    ProductController.prototype.searchCategory = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var category;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, categoryService_1.categoryService.listCategory()];
                    case 1:
                        category = _a.sent();
                        return [2 /*return*/, response.render('add-producto', { category: category })];
                }
            });
        });
    };
    //metodo para buscar Product
    ProductController.prototype.searchProduct = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var search, products, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        search = request.query.search;
                        search = search.toString();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, productService_1.productService.search(search)];
                    case 2:
                        products = _a.sent();
                        response.render("search", {
                            products: products,
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
    //traer la data del producto
    ProductController.prototype.getProductData = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.query.id;
                        id = id.toString();
                        return [4 /*yield*/, productService_1.productService.getData(id)];
                    case 1:
                        product = _a.sent();
                        return [2 /*return*/, response.render("edit-producto", {
                                product: product
                            })];
                }
            });
        });
    };
    //editar el producto
    ProductController.prototype.updateProduct = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, id, productname, price, type, categoriaId, err_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, id = _a.id, productname = _a.productname, price = _a.price, type = _a.type, categoriaId = _a.categoriaId;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, productService_1.productService.update({ id: id, productname: productname, price: price, type: type, categoriaId: categoriaId }).then(function () {
                                response.render("messageProducto", {
                                    message: "producto actualizado"
                                });
                            })];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_3 = _b.sent();
                        response.render("messageProducto", {
                            message: "Error al actualizar el producto: " + err_3.message
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //borrar product
    ProductController.prototype.deleteProduct = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.body.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, productService_1.productService.delete(id).then(function () {
                                response.render("messageProducto", { message: "Producto eliminado" });
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_4 = _a.sent();
                        response.render("messageProducto", {
                            message: "Error al eliminar el producto: " + err_4.message
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return ProductController;
}());
exports.ProductController = ProductController;
