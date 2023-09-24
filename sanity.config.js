import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'david-sanity-website',

  projectId: '', //Change this for every new owner

  dataset: 'production',

  token: process.env.SANITY_TOKEN, //Change this for every new owner

  plugins: [deskTool(),],

  basePath: '/studio',
  
  schema: {
    types: schemaTypes,
  },
})
