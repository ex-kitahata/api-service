"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonRouter = void 0;
var jsonRouter = function (req, res) {
    var params = req.params;
    var _a = params.name, name = _a === void 0 ? "名前" : _a, _b = params.id, id = _b === void 0 ? 0 : _b;
    return res.json({
        name: name,
        id: id
    });
};
exports.jsonRouter = jsonRouter;
//# sourceMappingURL=jsonRouter.js.map