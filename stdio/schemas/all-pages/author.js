export default {
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      description: "This field use for Author Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Author Slug",
      type: "slug",
      options: {
        source: "name",
        maxLegnth: 200,
        slugify: input =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "image",
      title: "Author Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "bio",
      title: "author Bio",
      type: "text",
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
}
