import {createClient} from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

import defineConfig from '../sanity.config';


export const client = createClient({
    projectId: "gqq99xwy",
    dataset: "production",
    apiVersion: "2023-09-07",
    useCdn: false
  });

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source);
