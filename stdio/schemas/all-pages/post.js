export default {
  name: "post",
  title: "Posts",
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
      title: "Post Title",
      type: "string",
      group: "content",
    },
    {
      name: "slug",
      title: "Post Slug",
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
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
    },
    {
      name: "feature_image",
      title: "Feature Image",
      type: "image",
      options: {
        hotspot: true,
      },
      group: "content",
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
      group: "content",
    },
    {
      name: "metadata",
      title: "Post Meta",
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
