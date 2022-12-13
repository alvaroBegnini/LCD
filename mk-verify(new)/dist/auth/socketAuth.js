"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dotenv_1 = require("dotenv");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
(0, dotenv_1.config)();
function socketAuth(token) {
    try {
        var key = process.env.PRIVATE_JWT_KEY;
        if (!key)
            return;
        var user = jsonwebtoken_1["default"].verify(token, key);
        return user.username;
    }
    catch (err) {
        return false;
    }
}
exports["default"] = socketAuth;
