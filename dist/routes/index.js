"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addData = exports.movieRouter = exports.moviesRouter = void 0;
var db_json_1 = __importDefault(require("../db/db.json"));
var title = "TypeScript Api";
var moviesRouter = function (req, res) {
    var data = {
        "title": title,
        "contents": JSON.stringify(db_json_1.default.movies, null, 10),
    };
    return res.render("movies.ejs", data);
};
exports.moviesRouter = moviesRouter;
var movieRouter = function (req, res) {
    var params = req.params;
    var _a = params.id, id = _a === void 0 ? 0 : _a;
    var data = {
        "title": title,
        "contents": JSON.stringify(db_json_1.default.movies.find(function (v) { return v.id == id; }), null, 10)
    };
    return res.render("index.ejs", data);
};
exports.movieRouter = movieRouter;
var addData = function (req, res, next) {
    var body = req.body;
    var movie = db_json_1.default.movies.find(function (v) { return v.id == body.id; });
    if (movie == null) {
        db_json_1.default.movies.push(body);
    }
    else {
        movie.id = body.id;
        movie.name = body.name;
        movie.director = body.director;
        movie.rating = body.rating;
    }
    next();
};
exports.addData = addData;
//# sourceMappingURL=index.js.map