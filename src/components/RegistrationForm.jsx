export default function RegistrationForm() {
    return (
        <form>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" />
            </div>
            <div>
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" />
            </div>
            <div>
                <label htmlFor="terms-of-service">
                    <input type="checkbox" id="terms-of-service" /> I agree with the Terms of Service
                </label>
            </div>
            <div>
                <label htmlFor="newsletter">
                    <input type="checkbox" id="newsletter" /> I want to subscribe to our weekly newsletter
                </label>
            </div>
            <button>Register</button>
        </form>
    )
}