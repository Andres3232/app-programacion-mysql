"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.esAdminRole = void 0;
var esAdminRole = function (req, res, next) {
    if (!req.usuario) {
        return res.status(500).json({
            msg: 'Se quiere verificar el rol sin validar el token primero'
        });
    }
    var _a = req.usuario, Rol = _a.Rol, username = _a.username;
    if (Rol !== 'admin') {
        return res.render("noadmin");
    }
    next();
};
exports.esAdminRole = esAdminRole;
