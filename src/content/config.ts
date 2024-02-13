import { defineCollection, z } from "astro:content";

const postCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      image: image(),
      imageSrc: z.string(),
    }),
});

export const collections = {
  post: postCollection,
};
