"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addData = exports.movieRouter = exports.moviesRouter = void 0;
var db_json_1 = __importDefault(require("../db/db.json"));
var moviesRouter = function (req, res) {
    return res.send(JSON.stringify(db_json_1.default.movies, null, 10));
};
exports.moviesRouter = moviesRouter;
var movieRouter = function (req, res) {
    var params = req.params;
    var _a = params.id, id = _a === void 0 ? 0 : _a;
    return res.send(db_json_1.default.movies.find(function (v) { return v.id == id; }));
};
exports.movieRouter = movieRouter;
var addData = function (req, res) {
    var params = req.params;
    var _a = params.id, id = _a === void 0 ? 0 : _a, _b = params.name, name = _b === void 0 ? "name" : _b, _c = params.director, director = _c === void 0 ? "director" : _c, _d = params.rating, rating = _d === void 0 ? 0 : _d;
    var movie = db_json_1.default.movies.find(function (v) { return v.id == id; });
    if (movie != null) {
        movie.id = id;
        movie.name = name;
        movie.director = director;
        movie.rating = rating;
        return res.send(db_json_1.default.movies.find(function (v) { return v.id == id; }));
    }
    var jsonData = { id: id, "name": name, "director": director, "rating": rating };
    db_json_1.default.movies.push(jsonData);
    return res.send(db_json_1.default.movies.find(function (v) { return v.id == id; }));
};
exports.addData = addData;
//# sourceMappingURL=index.js.map