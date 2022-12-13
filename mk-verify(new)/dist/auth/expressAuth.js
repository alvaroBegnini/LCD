"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dotenv_1 = require("dotenv");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
(0, dotenv_1.config)();
function expressAuth(req, res, next) {
    var _a;
    var token = (_a = req.headers["authorization"]) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    var key = process.env.PRIVATE_JWT_KEY;
    if (!key)
        throw new Error("JWT KEY MISSING");
    if (!token)
        return res.sendStatus(403);
    if (!key)
        return;
    jsonwebtoken_1["default"].verify(token, key, function (err) {
        if (err)
            return res.sendStatus(403);
        next();
    });
}
exports["default"] = expressAuth;
