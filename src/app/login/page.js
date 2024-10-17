import { Metadata } from 'next'
export const metadata = {
  title: 'Engrish - Login',
}

export default function Login() {
    return (
        <>
            <h2>Login</h2>
            <form>
                <div>
                    <label>Username</label>
                    <input/>
                </div>
                <div>
                    <label>Password</label>
                    <input/>
                </div>
                <button>Submit</button>
            </form>
        </>
    )
}