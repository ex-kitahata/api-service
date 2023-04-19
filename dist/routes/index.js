"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieRouter = exports.moviesRouter = void 0;
var db_json_1 = __importDefault(require("../db/db.json"));
var moviesRouter = function (req, res) {
    return res.send(JSON.stringify(db_json_1.default.movies));
};
exports.moviesRouter = moviesRouter;
var movieRouter = function (req, res) {
    var params = req.params;
    var _a = params.id, id = _a === void 0 ? 0 : _a;
    return res.send(db_json_1.default.movies.find(function (v) { return v.id == id; }));
};
exports.movieRouter = movieRouter;
//# sourceMappingURL=index.js.map