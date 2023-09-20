import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'david-sanity-website',

  projectId: 'gqq99xwy',
  dataset: 'production',
  token: process.env.SANITY_TOKEN,
  plugins: [deskTool(),],
  basePath: '/studio',
  
  schema: {
    types: schemaTypes,
  },
})
