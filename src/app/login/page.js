'use client'
import SiteApi from "@/app/lib/SiteApi"
export default function Login() {
    return (
        <>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input name="username"/>
                </div>
                <div>
                    <label>Password</label>
                    <input name="password"/>
                </div>
                <button>Submit</button>
            </form>
        </>
    )
}

function handleSubmit(event) {
    event.preventDefault()
    const username = event.target[0].value
    const password = event.target[1].value
    
    const response = SiteApi("/researchers/login", {username, password})
    // authentication TODO
}

