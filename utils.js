import * as fs from 'fs/promises'

export const readTxtFile = async (pathToFile) => {
  try {
    return await fs.readFile(pathToFile, {
      encoding: 'utf-8'
    })
  } catch (message) {
    return console.error(message)
  }
}

export const sumArray = (acc, val) => acc + val