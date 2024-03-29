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
exports.categoryService = void 0;
var typeorm_1 = require("typeorm");
var Category_1 = require("../entities/Category");
var CategoriesRepository_1 = require("../repositories/CategoriesRepository");
;
var CategoryService = /** @class */ (function () {
    function CategoryService() {
    }
    //Método para listar categorias
    CategoryService.prototype.listCategory = function () {
        return __awaiter(this, void 0, void 0, function () {
            var categoriesRepository, category;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        categoriesRepository = typeorm_1.getCustomRepository(CategoriesRepository_1.CategoryRepository);
                        return [4 /*yield*/, categoriesRepository.find()];
                    case 1:
                        category = _a.sent();
                        return [2 /*return*/, category];
                }
            });
        });
    };
    ;
    //Método para crear categoria
    CategoryService.prototype.createCategory = function (_a) {
        var name = _a.name;
        return __awaiter(this, void 0, void 0, function () {
            var categoriesRepository, nameAlreadyExists, category;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!name) {
                            throw new Error("Por favor complete el campo de categoría");
                        }
                        categoriesRepository = typeorm_1.getCustomRepository(CategoriesRepository_1.CategoryRepository);
                        return [4 /*yield*/, categoriesRepository.findOne({ name: name })];
                    case 1:
                        nameAlreadyExists = _b.sent();
                        if (nameAlreadyExists) {
                            throw new Error("La categoría ya está registrada.");
                        }
                        category = categoriesRepository.create({ name: name });
                        return [4 /*yield*/, categoriesRepository.save(category)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, category];
                }
            });
        });
    };
    ;
    //Método para buscar categoria
    CategoryService.prototype.searchCategory = function (search) {
        return __awaiter(this, void 0, void 0, function () {
            var categoriesRepository, category;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!search) {
                            throw new Error("Por favor complete el campo de búsqueda");
                        }
                        categoriesRepository = typeorm_1.getCustomRepository(CategoriesRepository_1.CategoryRepository);
                        return [4 /*yield*/, categoriesRepository
                                .createQueryBuilder()
                                .where("name like :search", { search: "%" + search + "%" })
                                .getMany()];
                    case 1:
                        category = _a.sent();
                        return [2 /*return*/, category];
                }
            });
        });
    };
    ;
    //Método para traer data categoria
    CategoryService.prototype.getDataCategory = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var categoriesRepository, category;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        categoriesRepository = typeorm_1.getCustomRepository(CategoriesRepository_1.CategoryRepository);
                        return [4 /*yield*/, categoriesRepository.findOne(id)];
                    case 1:
                        category = _a.sent();
                        console.log('servicio', id);
                        return [2 /*return*/, category];
                }
            });
        });
    };
    ;
    //Método para actualizar categoria
    CategoryService.prototype.updateCategory = function (_a) {
        var name = _a.name, id = _a.id;
        return __awaiter(this, void 0, void 0, function () {
            var categoriesRepository, category;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        categoriesRepository = typeorm_1.getCustomRepository(CategoriesRepository_1.CategoryRepository);
                        return [4 /*yield*/, categoriesRepository
                                .createQueryBuilder()
                                .update(Category_1.Category)
                                .set({ name: name })
                                .where("id = :id", { id: id })
                                .execute()];
                    case 1:
                        category = _b.sent();
                        return [2 /*return*/, category];
                }
            });
        });
    };
    ;
    //Método para borrar categoria
    CategoryService.prototype.deleteCategory = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var categoriesRepository, category;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        categoriesRepository = typeorm_1.getCustomRepository(CategoriesRepository_1.CategoryRepository);
                        return [4 /*yield*/, categoriesRepository
                                .createQueryBuilder()
                                .delete()
                                .from(Category_1.Category)
                                .where("id = :id", { id: id })
                                .execute()];
                    case 1:
                        category = _a.sent();
                        return [2 /*return*/, category];
                }
            });
        });
    };
    ;
    return CategoryService;
}());
;
exports.categoryService = new CategoryService();
exports.default = { CategoryService: CategoryService };
