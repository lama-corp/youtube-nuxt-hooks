import { appendFile, mkdir, readFile } from 'fs/promises'
import axios from 'axios'
import consola from 'consola'

const getCities = async () => {
  return (await axios.get('https://jsonplaceholder.typicode.com/todos')).data
}

const createDirectories = async (cities) => {
  for (const city of cities) {
    await mkdir(`./dist/${city.id}/`)
  }
}

const getFile = async () => {
  return await readFile('./dist/index.html', {
    encoding: 'utf8',
  })
}

const generateCitiesFiles = async (sourceFile, cities) => {
  for (const city of cities) {
    try {
      const file = sourceFile.replace(/%%CITY%%/g, city.title)
      await appendFile(`./dist/${city.id}/index.html`, file)
      consola.success(`./dist/${city.id}/index.html created!`)
    } catch {
      consola.error('The file could not be copied...')
    }
  }
}

export default {
  generate: {
    async done() {
      consola.info('Starting custom generation')

      const cities = await getCities()
      consola.success('Cities fetched!')

      await createDirectories(cities)
      consola.success('Directories created!')

      const sourceFile = await getFile()
      await generateCitiesFiles(sourceFile, cities)
      consola.success('Files created!')
    },
    /*
     * --- RAF ---
     * What about the sitemap?
     * Hard replacing => may be a bad solution depending on site complexity
     * What about translation?
     */
  },
}
