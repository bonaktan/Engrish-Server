import {promises as fs} from "fs"
export default async function useDatabase(type, id) {
    /* for safety purposes */
    let fileName = ''
    if (type == "researchers") {
        fileName = "researchers.json"
    } else if (type == "respondents") {
        fileName = "respondents.json" 
    } else {
        alert("Error")
    }
    const file = JSON.parse(await fs.readFile(process.cwd() + '/src/app/db/' + fileName, 'utf8'))
    return file[id]
}