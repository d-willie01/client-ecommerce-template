import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'david-sanity-website',

  projectId: 'gqq99xwy',
  dataset: 'production',

  plugins: [deskTool(),],
  basePath: '/studio',

  schema: {
    types: schemaTypes,
  },
})
