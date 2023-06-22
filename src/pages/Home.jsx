import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function Home() {
    const { username } = useContext(UserContext);

    return (
        <main>
            {username ? <h1>Welcome, {username}</h1> : <h1>Welcome</h1>}
        </main>
    )
}