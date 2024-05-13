const path = require("path");
const httpUtils = require("../appModules/http-utils");

async function defaultRouteController(res, url) {
  const extname = String(path.extname(url)).toLowerCase();
  if (extname in httpUtils.mimeTypes) {
    httpUtils.staticFile(res, url, extname);
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
}

module.exports = defaultRouteController;