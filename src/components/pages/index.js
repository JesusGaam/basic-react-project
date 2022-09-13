module.exports.metadata = {
  title: "React MPA page",
  description: "Web page optimized",
  keywords: "react MPA",
  image: "",
  robots: true,
  canonical: "",
  schema: {},
  priority: "1",
  lastmod: "",
  enable: true,
};

module.exports.pages = [
  {
    filename: "index.html",
    component: "@/components/pages/DesignSystem/DesignSystem.js",
    title: "Design System",
  },
  {
    filename: "emit-props.html",
    component: "@/components/pages/emitProps/EmitProps.js",
    title: "Emit Props",
  },
  {
    filename: "mobx-spa.html",
    component: "@/components/pages/mobxSPA/MobxSPA.js",
    title: "Mobx SPA",
  },
  {
    filename: "names-mobx.html",
    component: "@/components/pages/namesMobx/NamesMobx.js",
    title: "Mobx Names",
  },
];
