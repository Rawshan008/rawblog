export default {
  name: "navigation",
  title: "Navigation",
  type: "object",
  fields: [
    {
      name: "navigationTitle",
      title: "Navigation Name",
      type: "string",
    },
    {
      name: "navigationSlug",
      title: "Navigation Slug",
      type: "slug",
    },
    {
      name: "navItem",
      title: "Select Page",
      type: "array",
      of: [{ type: "navItem" }],
    },
  ],
  preview: {
    select: {
      title: "navigationTitle",
    },
  },
}
