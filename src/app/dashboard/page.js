import { BacklogStatus } from "./ui/BacklogStatus"
import { RespondentStatus } from "./ui/RespondentStatus"
export default function MainDashboard() {
    return (
        <div>
            <div>
                <p>Welcome, researcher!</p>
            </div>
            <div>
                <p>Respondent Status</p>
                <RespondentStatus />
            </div>
            <div>
                <p>Backlogs</p>
                <BacklogStatus />
            </div>
        </div>
    )
}