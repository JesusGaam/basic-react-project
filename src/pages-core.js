const fs = require("fs");
const path = require("path");

const webpackPages = [];
const pagesDistPath = "./pages-dist/";
const mainTemplatePath = "./src/app.js";
const pages = require(path.join(__dirname, "/components/pages/"));

const createJsonPage = (arrayPages, metadata) => {
  arrayPages.forEach((o) => {
    const name = o.filename.replace(/\//g, "-").replace(".html", "");

    let page = {
      name,
      entry: pagesDistPath + name + ".js",
      template: "./public/index.ejs",
      chunks: [name],
      filename: o.filename,
      component: o.component,
      title: o.title ? o.title : metadata.title,
      description: o.description ? o.description : metadata.description,
      keywords: o.keywords ? o.keywords : metadata.keywords,
    };

    if (o.robots === false) {
      page["robots"] = "noindex";
    } else if (metadata.robots === false) {
      page["robots"] = "noindex";
    }

    if (o.canonical) {
      page["canonical"] = o.canonical;
    } else if (metadata.canonical) {
      page["canonical"] = metadata.canonical;
    } else {
      page["canonical"] = o.filename.replace(".html", "");
    }

    if (o.image) {
      page["image"] = o.image;
    } else if (metadata.image) {
      page["image"] = metadata.image;
    }

    if (o.schema && Object.keys(o.schema).length > 0) {
      page["schema"] = JSON.stringify(o.schema);
    } else if (metadata.schema && Object.keys(metadata.schema).length > 0) {
      page["schema"] = JSON.stringify(metadata.schema);
    }

    if (o.priority) {
      page["priority"] = o.priority;
    } else if (metadata.priority) {
      page["priority"] = metadata.priority;
    }

    if (o.lastmod) {
      page["lastmod"] = o.lastmod;
    } else if (metadata.lastmod) {
      page["lastmod"] = metadata.lastmod;
    }

    if (o.enable !== undefined) {
      page["enable"] = o.enable;
    } else if (metadata.enable !== undefined) {
      page["enable"] = metadata.enable;
    }

    if (page.enable) {
      webpackPages.push(page);
    } else {
      console.log("[DISABLED]:", page.filename);
    }
  });
};

const readFile = (path) => {
  try {
    return fs.readFileSync(path, "utf8");
  } catch (e) {
    console.error(e);
  }
};

const createFile = (path, data) => {
  try {
    return fs.writeFileSync(path, data, "utf8");
  } catch (e) {
    console.error(e);
  }
};

const createFolder = (dir) => {
  try {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  getJSONPages: () => {
    return webpackPages;
  },

  getJSONEntry: () => {
    let entry = {};
    webpackPages.forEach((p) => {
      entry[p.name] = p.entry;
    });
    return entry;
  },

  buildJSONPages: () => {
    let mainText = readFile(mainTemplatePath);

    createFolder(pagesDistPath);
    createJsonPage(pages.pages, pages.metadata);

    webpackPages.forEach((o) => {
      let path = o.entry;
      let data = mainText.replace("{component}", o.component);

      createFile(path, data);
    });
  },
};
