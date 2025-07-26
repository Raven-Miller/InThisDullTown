export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("Images");

  eleventyConfig.setServerPassthroughCopyBehavior("copy");
  eleventyConfig.addWatchTarget("styles");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addPassthroughCopy("elements");

  eleventyConfig.addCollection("EdithPOV", function (collectionApi) {
    return collectionApi.getFilteredByTag("Edith");
  });
  eleventyConfig.addCollection("MorganPOV", function (collectionApi) {
    return collectionApi.getFilteredByTag("Morgan");
  });
  eleventyConfig.addCollection("JunePOV", function (collectionApi) {
    return collectionApi.getFilteredByTag("June");
  });
  eleventyConfig.addCollection("AlexPOV", function (collectionApi) {
    return collectionApi.getFilteredByTag("Alex");
  });
  eleventyConfig.addCollection("BenPOV", function (collectionApi) {
    return collectionApi.getFilteredByTag("Ben");
  });

  eleventyConfig.addCollection("Descriptions", function (collectionApi) {
    return collectionApi.getFilteredByTag("Des");
  });
  eleventyConfig.addCollection("Reports", function (collectionApi) {
    return collectionApi.getFilteredByTag("Report");
  });

  eleventyConfig.addCollection("Setting", function (collectionApi) {
    return collectionApi.getFilteredByTag("Setting");
  });
  eleventyConfig.addCollection("MTC", function (collectionApi) {
    return collectionApi.getFilteredByTag("MTC");
  });

  return {
    templateFormats: ["html", "njk", "md", "liquid"],
    pathPrefix: "/InThisDullTown/",
    dir: {
      input: ".",
      output: "_site",
    },
  };
}
