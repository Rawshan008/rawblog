export default {
  name: "bannerSection",
  title: "Banner Section",
  type: "object",
  fields: [
    {
      name: "bannerHeading",
      title: "Heading",
      type: "string",
    },
    {
      name: "bannerImage",
      title: "Upload Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "bannerDescription",
      title: "Description",
      type: "text",
    },
    {
      name: "bannerButtonText",
      title: "Button Text",
      type: "string",
    },
    {
      name: "bannerButtonLink",
      title: "Button Link",
      type: "url",
    },
  ],
}
