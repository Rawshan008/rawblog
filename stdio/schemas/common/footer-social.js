export default {
  name: "footerSocial",
  title: "Footer Social",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Social name like as facebook, twitter",
      type: "string",
    },
    {
      name: "icon",
      title: "Upload Icon",
      type: "image",
    },
    {
      name: "url",
      title: "Url",
      type: "url",
      validation: Rule =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
        }),
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
}
