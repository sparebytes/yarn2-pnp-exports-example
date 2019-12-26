try {
  require("package-with-exports");
} catch (ex) {
  console.error(`Unable to load module "package-with-exports"`);
  console.error(ex);
}

try {
  require("package-with-exports/sub/other");
} catch (ex) {
  console.error(`Unable to load module "package-with-exports/sub/other"`);
  console.error(ex);
}
