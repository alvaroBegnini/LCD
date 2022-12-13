"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var fs_1 = __importDefault(require("fs"));
function setSilence(silenceIt, client) {
    if (silenceIt) {
        var silenced = JSON.parse(fs_1["default"].readFileSync("./src/files/silenced.json", { encoding: "utf8" }));
        var newSilencedArray = silenced.includes(client) ? __spreadArray([], silenced, true) : __spreadArray(__spreadArray([], silenced, true), [client], false);
        fs_1["default"].writeFileSync("./src/files/silenced.json", JSON.stringify(newSilencedArray), { encoding: "utf8" });
    }
    if (!silenceIt) {
        var silenced = JSON.parse(fs_1["default"].readFileSync("./src/files/silenced.json", { encoding: "utf8" }));
        var newSilencedArray = silenced.filter(function (x) { return x !== client; });
        fs_1["default"].writeFileSync("./src/files/silenced.json", JSON.stringify(newSilencedArray), { encoding: "utf8" });
    }
}
exports["default"] = setSilence;
