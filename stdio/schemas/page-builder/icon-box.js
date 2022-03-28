export default {
  name: "iconBox",
  title: "Icon Box",
  type: "object",
  fields: [
    {
      name: "iconBoxTitle",
      title: "Box Section title",
      type: "string",
    },
    {
      name: "iconBoxDescription",
      title: "Box Section Description",
      type: "text",
    },
    {
      name: "boxItems",
      title: "Create Box Items",
      type: "array",
      of: [
        {
          name: "boxItem",
          type: "boxItem",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "iconBoxTitle",
    },
  },
}

export const boxItem = {
  name: "boxItem",
  title: "Box item",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "icon",
      title: "Upload Icon",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
}
