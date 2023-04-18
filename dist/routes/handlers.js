"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloHandler = exports.rootHandler = void 0;
var helloBuilder = function (name) { return ({ hello: name }); };
var rootHandler = function (_req, res) {
    return res.render('index', { title: 'Hello, Your API is working!!' });
};
exports.rootHandler = rootHandler;
var helloHandler = function (req, res) {
    var params = req.params;
    var _a = params.name, name = _a === void 0 ? 'World' : _a;
    var response = helloBuilder(name);
    return res.json(response);
};
exports.helloHandler = helloHandler;
//# sourceMappingURL=handlers.js.map