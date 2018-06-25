"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const recipe_ingredient_parser_1 = require("recipe-ingredient-parser");
exports.analyzeRecipe = functions.https.onRequest((request, resonse) => {
    resonse.send(recipe_ingredient_parser_1.parse(request.query.input));
});
//# sourceMappingURL=index.js.map