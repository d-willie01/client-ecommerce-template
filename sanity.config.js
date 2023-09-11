import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'david-sanity-website',

  projectId: 'gqq99xwy',
  dataset: 'production',
  token: 'skRhMo7hvcrPi7OLZFnpzs2yP0WUPYbRYion6KAzsBWTCxNbDcbEfR8UXJmQB4VVshXNogKcK7El4lzOuqjginHB4sOYEs1UUK19BaXvqtmkVTnYddcjy9KNnus70yrlrUA68iwnZBespBTGgGBeUZeplR1IYYN64jWzMDYQGYsnoPWQ78O6',
  plugins: [deskTool(),],
  basePath: '/studio',

  schema: {
    types: schemaTypes,
  },
})
