"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addData = exports.moviesRouter = void 0;
var db_json_1 = __importDefault(require("../db/db.json"));
var moviesRouter = function (req, res) {
    var query = req.query;
    if (query.id != null) {
        var id_1 = Number.parseInt(query.id);
        var data = JSON.stringify(db_json_1.default.movies.find(function (v) { return v.id == id_1; }), null, 10);
        if (data == null) {
            return res.send(JSON.stringify({}));
        }
        return res.send(data);
    }
    return res.send(JSON.stringify(db_json_1.default.movies, null, 10));
};
exports.moviesRouter = moviesRouter;
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