export default function LoginForm() {
    return (
        <form>
            <div>
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" />
            </div>
            <button>Login</button>
        </form>
    )
}