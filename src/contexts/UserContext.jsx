import { createContext, useState } from "react";

const UserContext = createContext({
    username: null,
    changeUsername: (username) => {}
});

export function UserContextProvider({ children }) {
    const [username, setUsername] = useState("");

    function change(username) {
        setUsername(username);
    }

    const context = {
        username: username,
        changeUsername: change
    }

    return (
        <UserContext.Provider value={context}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;