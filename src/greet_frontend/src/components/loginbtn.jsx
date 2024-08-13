// src/greet_frontend/src/App.js

import React, { useState } from 'react';
import { AuthClient } from "@dfinity/auth-client";
import { HttpAgent } from "@dfinity/agent";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = async () => {
        try {
            // Create an auth client
            const authClient = await AuthClient.create();

            // Start the login process
            await new Promise((resolve) => {
                authClient.login({
                    identityProvider: process.env.REACT_APP_II_URL,
                    onSuccess: resolve,
                });
            });

            // Get the identity from the auth client
            const identity = authClient.getIdentity();
            // Create an agent using the identity
            const agent = new HttpAgent({ identity });
            // Create an actor with the agent
            const actor = createActor(process.env.REACT_APP_GREET_BACKEND_CANISTER_ID, {
                agent,
            });
            setIsLoggedIn(true);
            console.log("i think things are working fine with the code")
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    return (
        <div className='m-10 space-x-5'>
            <button className='bg-black p-2 text-white rounded-lg font-bold' onClick={handleLogin} disabled={isLoggedIn}>
                Login
            </button>
        </div>
    );
}

export default App;
