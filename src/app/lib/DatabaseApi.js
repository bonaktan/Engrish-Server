import { redirect } from "next/dist/server/api-utils"

export async function loginAttempt(info) {
    if (info["username"] == "bon" && info["password"] == "admin") {
        redirect("/dashboard")
    } else {
        return 403;
    }
}

export async function fetchBacklogs() {
    return ['Backlog 1','Backlog 2','Backlog 3',]
}
export async function fetchRespondents() {
    return ['Test User 1','Test User 2','Test User 3',]
}