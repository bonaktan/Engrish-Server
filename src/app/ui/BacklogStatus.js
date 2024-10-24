import { fetchBacklogs } from "@/app/lib/DatabaseApi"

export async function BacklogStatus() {
    // maybe apply pagination here
    let backlogs = await fetchBacklogs()
    return (
        <div className='test'>
            {backlogs.map(function (backlog, key) {
                return <p key={key}>{backlog.name}: {backlog.description}</p>
            })}
        </div>
    )
    
}