import { fetchRespondents } from "@/app/lib/DatabaseApi"

export async function RespondentStatus() {
    let users = await fetchRespondents() // should be fetched to db
    return (
        <div className='test'>
            {users.map(function (user, key) {
                return <p key={key}>{user}</p>
            })}
        </div>
    )
}
// further shits shall be dedicated to ui development
