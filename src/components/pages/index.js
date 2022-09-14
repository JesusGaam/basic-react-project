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
    filename: "user.html",
    component: "@/components/pages/user/User.js",
    title: "User",
  },
];
