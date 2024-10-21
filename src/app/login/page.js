import {useActionState} from "react"
export default function Login() {
    return (
        <>
            <h2>Login - Not Working</h2>
            <form>
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
