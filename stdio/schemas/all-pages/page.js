export default {
  name: "page",
  title: "Pages",
  type: "document",
  groups: [
    {
      name: "content",
      title: "Content",
    },
    {
      name: "seo",
      title: "Seo",
    },
  ],
  fields: [
    {
      name: "title",
      title: "Page Title",
      type: "string",
      group: "content",
    },
    {
      name: "slug",
      title: "Page Slug",
      type: "slug",
      options: {
        source: "title",
        maxLegnth: 200,
        slugify: input =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
      group: "content",
    },
    {
      name: "feature_image",
      title: "Feature image",
      type: "image",
      options: {
        hotspot: true,
      },
      group: "content",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
      group: "content",
    },
    {
      name: "pageContent",
      title: "Page Content",
      type: "pageBuilder",
      group: "content",
    },
    {
      name: "metadata",
      title: "Meta Data",
      type: "metadata",
      group: "seo",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "feature_image",
    },
  },
}
