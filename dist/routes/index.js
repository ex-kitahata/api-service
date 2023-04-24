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
var addData = function (req, res, next) {
    var body = req.body;
    var movie = db_json_1.default.movies.find(function (v) { return v.id == body.id; });
    if (movie != null) {
        movie.id = body.id;
        movie.name = body.name;
        movie.director = body.director;
        movie.rating = body.rating;
        console.log("\u66F4\u65B0\n".concat(req.body));
        next();
    }
    console.log("\u65B0\u898F\u8FFD\u52A0\n".concat(req.body));
    db_json_1.default.movies.push(body);
    next();
};
exports.addData = addData;
//# sourceMappingURL=index.js.map