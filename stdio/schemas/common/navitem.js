export default {
  name: "navItem",
  title: "Nav Item",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Item Title",
      type: "string",
    },
    {
      name: "link",
      title: "Link",
      type: "reference",
      to: [{ type: "page" }],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
}
