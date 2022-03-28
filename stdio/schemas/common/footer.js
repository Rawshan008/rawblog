export default {
  name: "footer",
  title: "Footer",
  type: "document",
  groups: [
    {
      name: "footerInfo",
      title: "Footer Info",
      default: true,
    },
    {
      name: "social",
      title: "Footer Social",
    },
  ],
  fields: [
    {
      name: "copywrite",
      title: "Copy Write Text",
      type: "string",
      group: "footerInfo",
    },
    {
      name: "footerSocial",
      title: "Enter Social Links",
      type: "array",
      of: [{ type: "footerSocial" }],
      group: "social",
    },
  ],
  preview: {
    select: {
      title: "copywrite",
    },
  },
}
