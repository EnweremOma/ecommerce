import SanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";


export const client = SanityClient({
  projectId: "oww8fo1j",
  dataset: "production",
  apiVersion: "2022-03-10",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);