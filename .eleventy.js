module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles");

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    }
  };
};

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addCollection("tests", function(collectionApi) {
    return collectionApi.getFilteredByTag("test");
  });

  eleventyConfig.addCollection("stories", function(collectionApi) {
    return collectionApi.getFilteredByTag("story");
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    }
  };
};

module.exports = function(eleventyConfig) {
  return {
    pathPrefix: "/InThisDullTown/",
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
