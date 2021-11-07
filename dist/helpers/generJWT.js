"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generarJWT = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var generarJWT = function (id) {
    if (id === void 0) { id = ''; }
    return new Promise(function (resolve, reject) {
        var payload = { id: id };
        jsonwebtoken_1.default.sign(payload, '123', {
            expiresIn: '4h'
        }, function (err, token) {
            if (err) {
                console.log(err);
                reject('No se pudo gener el token');
            }
            else {
                resolve(token);
            }
        });
    });
};
exports.generarJWT = generarJWT;
