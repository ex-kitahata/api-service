"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var handlers_js_1 = require("./routes/handlers.js");
var jsonRouter_js_1 = require("./routes/jsonRouter.js");
var path = require('path');
var app = (0, express_1.default)();
var port = process.env.PORT || '8000';
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(path.join(__dirname, 'public')));
app.use('/hello/:name', handlers_js_1.helloHandler);
app.use('/:name/:id', jsonRouter_js_1.jsonRouter);
app.use('/', handlers_js_1.rootHandler);
app.listen(port, function () {
    return console.log("Server is listening on ".concat(port));
});
//# sourceMappingURL=index.js.map