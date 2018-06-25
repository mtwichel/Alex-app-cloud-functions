import * as functions from 'firebase-functions';
import { parse } from 'recipe-ingredient-parser';

export const analyzeRecipe = functions.https.onRequest((request, resonse) => {
    resonse.send(parse(request.query.input));
});
