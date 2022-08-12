const isProduction = process.env.NODE_ENV === "production";

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"],
  target: "serverless",
  basePath: "",
  assetPrefix: "",
});
