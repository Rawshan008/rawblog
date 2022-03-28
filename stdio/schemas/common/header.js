export default {
  name: "header",
  title: "Header",
  type: "document",
  groups: [
    {
      name: "logo",
      title: "Logo",
      default: true,
    },
    {
      name: "navigation",
      title: "Navigation",
    },
  ],
  fields: [
    {
      name: "siteName",
      title: "Site Name",
      type: "string",
      group: "logo",
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
      group: "logo",
    },
    {
      name: "navigation",
      title: "Navigation",
      type: "array",
      of: [{ type: "navigation" }],
      group: "navigation",
    },
  ],
}
