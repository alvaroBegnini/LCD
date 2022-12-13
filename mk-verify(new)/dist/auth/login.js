"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dotenv_1 = require("dotenv");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var bcrypt_1 = __importDefault(require("bcrypt"));
(0, dotenv_1.config)();
function login(username, password) {
    var hashUsername = "$2b$10$8.R6HCYfxLpbfc4pkwAXi.7fPNn0wZd.S1t2ap6.OHUWS9yCR9dEq";
    var hashPassword = "$2b$10$KRNhhksSMZPsratuKL0s9OBQR1rgRKheMGkt74soPuQctz.k.Cs7O";
    if (bcrypt_1["default"].compareSync(username, hashUsername) && bcrypt_1["default"].compareSync(password, hashPassword)) {
        var jwtKey = process.env.PRIVATE_JWT_KEY;
        if (!jwtKey)
            return;
        var token = jsonwebtoken_1["default"].sign({ username: username }, jwtKey, { expiresIn: "24h" });
        return { token: token };
    }
}
exports["default"] = login;
