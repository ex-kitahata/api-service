"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addData = exports.movieRouter = exports.moviesRouter = void 0;
var db_json_1 = __importDefault(require("../db/db.json"));
var moviesRouter = function (req, res) {
    var query = req.query;
    if (query.id != null) {
        return res.send(JSON.stringify(db_json_1.default.movies.find(function (v) { return v.id == Number.parseInt(query.id); }), null, '    '));
    }
    return res.send(JSON.stringify(db_json_1.default.movies, null, '    '));
};
exports.moviesRouter = moviesRouter;
var movieRouter = function (req, res) {
    var params = req.params;
    var _a = params.id, id = _a === void 0 ? 0 : _a;
    return res.send(JSON.stringify(db_json_1.default.movies.find(function (v) { return v.id == id; }), null, 10));
};
exports.movieRouter = movieRouter;
var addData = function (req, res, next) {
    var body = req.body;
    var movie = db_json_1.default.movies.find(function (v) { return v.id == body.id; });
    if (movie == null) {
        pushData(body);
    }
    else {
        refreshData(body);
    }
    next();
};
exports.addData = addData;
var pushData = function (data) {
    db_json_1.default.movies.push(data);
};
var refreshData = function (data) {
    var movie = db_json_1.default.movies.find(function (v) { return v.id == data.id; });
    movie.id = data.id;
    movie.name = data.name;
    movie.director = data.director;
    movie.rating = data.rating;
};
//# sourceMappingURL=index.js.map