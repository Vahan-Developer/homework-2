const httpUtils = require("../appModules/http-utils");
const { endpoints, getData } = require("../appModules/api");
const { config, makeRatingFile } = require("../appModules/rating");

async function mainRouteController(res, publicUrl, extname) {
  const data = await getData(endpoints.games);
  await makeRatingFile(config.PATH_TO_RATING_FILE, data);
  res.statusCode = 200;
  httpUtils.staticFile(res, publicUrl, extname);
}

module.exports = mainRouteController;