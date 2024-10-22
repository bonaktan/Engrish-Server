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
    return ['Backlog1']
}
export async function fetchRespondents() {
    const res = await client.query('SELECT username FROM respondents')
    let retVal = []
    res.rows.forEach((dict) => {
        retVal.push(dict['username'])
    })
    return retVal
}