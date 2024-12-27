const a = [
  {
    type: "dashboard",
    name: "UmbracoTours",
    alias: "UmbracoTours.dashboard",
    elementName: "umbracotours-dashboard",
    js: () => import("./dashboard.element-CH3kwbFV.js"),
    weight: -10,
    meta: {
      label: "UmbracoTours",
      pathname: "UmbracoTours"
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: "Umb.Section.Content"
      }
    ]
  }
], s = [...a], t = [
  ...s
], e = (n, o) => {
  o.registerMany(t);
};
export {
  e as onInit
};
//# sourceMappingURL=assets.js.map
