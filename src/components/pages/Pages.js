module.exports.metadata = {
  title: "React MPA page",
  description: "Qeb page optimized",
  keywords: "react MPA",
  image: "",
  robots: false,
  canonical: "",
  schema: {},
  priority: "1",
  lastmod: "",
  enable: true,
};

module.exports.pages = [
  {
    filename: "index.html",
    component: "@/components/pages/Home.js",
    title: "Home",
  },
  {
    filename: "user.html",
    component: "@/components/pages/User.js",
    title: "Lista de usuarios",
  },
];
