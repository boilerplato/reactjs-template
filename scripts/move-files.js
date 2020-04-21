const fs = require("fs-extra");
const path = require("path");

const templateSourcePath = process.env.TEMPLATE_SOURCE_PATH;
const appFullPath = process.env.APP_FULL_PATH;

if (process.env.isReduxIncluded) {
  fs.copySync(
    path.resolve(templateSourcePath, "src/store"),
    path.resolve(appFullPath, "src/store"),
    { overwrite: true }
  );
}

if (process.env.isRouterIncluded) {
  fs.copySync(
    path.resolve(templateSourcePath, "src/history.js"),
    path.resolve(appFullPath, "src/history.js"),
    { overwrite: true }
  );
}