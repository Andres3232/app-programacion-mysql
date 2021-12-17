"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var class_validator_1 = require("class-validator");
var User = /** @class */ (function () {
    function User() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], User.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], User.prototype, "username", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsEmail(),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsInt(),
        __metadata("design:type", Number)
    ], User.prototype, "Telefono", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsString(),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], User.prototype, "Ciudad", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsString(),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], User.prototype, "Estado", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsString(),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", Date)
    ], User.prototype, "fecha", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsString(),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], User.prototype, "Rol", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], User.prototype, "Password", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], User.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], User.prototype, "updated_at", void 0);
    User = __decorate([
        typeorm_1.Entity("users"),
        __metadata("design:paramtypes", [])
    ], User);
    return User;
}());
exports.User = User;
