import { Metadata } from 'next'
import useDatabase from '../lib/useDatabase'
 
export const metadata = {
  title: 'Engrish - Dashboard',
}

export default function Login() {
    return (
        <>
            <h2>Dashboard</h2>
            <p>Note: Monitor the Participants here, If they are not participating properly, please press the report button, kami na bahala</p>
            <div>
                <h3>Participants</h3>
                <ParticipantOverview/>
            </div>
            <div>
                <h3>Backlogs</h3>
                <BacklogOverview/>
            </div>
        </>
    )
}

async function ParticipantOverview() {
    const ResearcherData = await useDatabase("researchers", "bonnybonnybonaktan") // should be outside, mamaya na natamad pa ko :3
    console.log(ResearcherData)
    let Respondents = []
    ResearcherData["respondents_under"].forEach(element => {
        Respondents.push(element)
    });
    console.log(Respondents)
    return (
        <div>
            {Respondents}
        </div>
    )
}
function BacklogOverview() {
    return (
        <>
            <p>Backlog 1</p>
            <p>Backlog 2</p>
            <p>Backlog 3</p>
        </>
    )
}