import { Metadata } from 'next'
 
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

function ParticipantOverview() {
    return (
        <>
            <p>Participant 1</p>
            <p>Participant 2</p>
            <p>Participant 3</p>
        </>
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