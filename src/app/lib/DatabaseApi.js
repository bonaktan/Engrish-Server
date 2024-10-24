import { redirect } from "next/dist/server/api-utils"
import { Pool } from "pg"
const client = new Pool()

export async function loginAttempt(info) {
    if (info["username"] == "bon" && info["password"] == "admin") {
        redirect("/dashboard")
    } else {
        return 403;
    }
}

export async function fetchBacklogs() {
    const res = await client.query('SELECT name, description FROM backlogs WHERE researcherUnder=1')
    return res.rows
}
export async function fetchRespondents() {
    const res = await client.query('SELECT username FROM respondents WHERE researcherUnder=1')
    let retVal = []
    res.rows.forEach((dict) => {
        retVal.push(dict['username'])
    })
    return retVal
}