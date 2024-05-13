const fs = require("fs");
const { getRandomGame } = require("../appModules/api");

 function gameRouteController (res) {
    fs.readFile("./dataset/rating.json", (err, ratingFile) => {
        if (err) {
            res.statusCode = 500;
            res.end("InternalcServer Error");
        }
        const data = JSON.parse(ratingFile)
        const game = getRandomGame(data)
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(game));
    });

}
module.exports = gameRouteController;
