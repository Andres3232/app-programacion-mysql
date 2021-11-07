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
exports.productService = void 0;
var typeorm_1 = require("typeorm");
var Product_1 = require("../entities/Product");
var ProductsRepository_1 = require("../repositories/ProductsRepository");
var CategoriesRepository_1 = require("../repositories/CategoriesRepository");
var ProductService = /** @class */ (function () {
    function ProductService() {
    }
    //listar productos
    ProductService.prototype.list = function () {
        return __awaiter(this, void 0, void 0, function () {
            var productsRepository, products;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        productsRepository = typeorm_1.getCustomRepository(ProductsRepository_1.ProductsRepository);
                        return [4 /*yield*/, productsRepository.find()];
                    case 1:
                        products = _a.sent();
                        return [2 /*return*/, products];
                }
            });
        });
    };
    //crear producto
    ProductService.prototype.create = function (_a) {
        var productname = _a.productname, price = _a.price, type = _a.type, name = _a.name;
        return __awaiter(this, void 0, void 0, function () {
            var productsRepository, productnameAlreadyExists, categoryRepository, categoria, newProduct, nuevoproducto;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        productsRepository = typeorm_1.getCustomRepository(ProductsRepository_1.ProductsRepository);
                        return [4 /*yield*/, productsRepository.findOne({ productname: productname })];
                    case 1:
                        productnameAlreadyExists = _b.sent();
                        if (productnameAlreadyExists) {
                            throw new Error("Producto ya esta registrado");
                        }
                        categoryRepository = typeorm_1.getCustomRepository(CategoriesRepository_1.CategoryRepository);
                        return [4 /*yield*/, categoryRepository.findOne({ name: name })];
                    case 2:
                        categoria = _b.sent();
                        if (!categoria) {
                            throw new Error("No existe esa categoria");
                        }
                        newProduct = new Product_1.Product();
                        newProduct.productname = productname;
                        newProduct.price = price;
                        newProduct.type = type;
                        //@ts-ignore
                        newProduct.categoriaId = categoria.name;
                        return [4 /*yield*/, productsRepository.save(newProduct)];
                    case 3:
                        nuevoproducto = _b.sent();
                        console.log(nuevoproducto);
                        return [2 /*return*/];
                }
            });
        });
    };
    //buscar producto
    ProductService.prototype.search = function (search) {
        return __awaiter(this, void 0, void 0, function () {
            var productsRepository, product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!search) {
                            throw new Error("Por favor complete el campo de busca");
                        }
                        productsRepository = typeorm_1.getCustomRepository(ProductsRepository_1.ProductsRepository);
                        return [4 /*yield*/, productsRepository
                                .createQueryBuilder()
                                .where("productname like :search", { search: "%" + search + "%" })
                                .orWhere("price like :search", { search: "%" + search + "%" })
                                .orWhere(" type :search", { search: "%" + search + "%" })
                                .orWhere(" categoriaId :search", { search: "%" + search + "%" })
                                .getMany()];
                    case 1:
                        product = _a.sent();
                        return [2 /*return*/, product];
                }
            });
        });
    };
    //traer data del producto
    ProductService.prototype.getData = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var productsRepository, product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        productsRepository = typeorm_1.getCustomRepository(ProductsRepository_1.ProductsRepository);
                        return [4 /*yield*/, productsRepository.findOne(id)];
                    case 1:
                        product = _a.sent();
                        return [2 /*return*/, product];
                }
            });
        });
    };
    ProductService.prototype.update = function (_a) {
        var id = _a.id, productname = _a.productname, price = _a.price, type = _a.type, categoriaId = _a.categoriaId;
        return __awaiter(this, void 0, void 0, function () {
            var productsRepository, product;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        productsRepository = typeorm_1.getCustomRepository(ProductsRepository_1.ProductsRepository);
                        return [4 /*yield*/, productsRepository
                                .createQueryBuilder()
                                .update(Product_1.Product)
                                .set({ productname: productname, price: price, type: type, categoriaId: categoriaId })
                                .where("id = :id", { id: id })
                                .execute()];
                    case 1:
                        product = _b.sent();
                        return [2 /*return*/, product];
                }
            });
        });
    };
    //delete
    ProductService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var productsRepository, product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        productsRepository = typeorm_1.getCustomRepository(ProductsRepository_1.ProductsRepository);
                        return [4 /*yield*/, productsRepository
                                .createQueryBuilder()
                                .delete()
                                .from(Product_1.Product)
                                .where("id = :id", { id: id })
                                .execute()];
                    case 1:
                        product = _a.sent();
                        return [2 /*return*/, product];
                }
            });
        });
    };
    return ProductService;
}());
exports.productService = new ProductService();
exports.default = { ProductService: ProductService };
