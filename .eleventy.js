// Ativa Luxon
const { DateTime } = require('luxon');

//Config do Eleventy
module.exports = function (eleventyConfig) {
    // CSS, estilos, imagens e JS que vão passar pra pasta public
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/styles");
    eleventyConfig.addPassthroughCopy("./src/images");
    eleventyConfig.addPassthroughCopy("./src/js");
    eleventyConfig.addWatchTarget("./src/css");
    eleventyConfig.addWatchTarget("./src/styles");
    eleventyConfig.addWatchTarget("./src/images");
    eleventyConfig.addWatchTarget("./src/js");

    // Adiciona botão de "próximo" e "anterior"
    eleventyConfig.addCollection("posts", function (collection) {
        const coll = collection.getFilteredByTag("posts");
        for (let i = 0; i < coll.length; i++) {
            const prevPost = coll[i - 1];
            const nextPost = coll[i + 1];
            coll[i].data["prevPost"] = prevPost;
            coll[i].data["nextPost"] = nextPost;
        }
        return coll;
    });

    // Add the filter "readableDate" to simplify the way blog dates are presented in the Archives page
    eleventyConfig.addFilter('readableDate', (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: 'utc+9' }).toFormat(
            'yyyy-LL-dd'
        );
    });

    return {
        passthroughFileCopy: true,
        dir: {
            input: "src",
            output: "public",
            includes: "_includes",
        },
    };
};