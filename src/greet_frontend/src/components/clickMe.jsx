import React, { useState, useEffect } from 'react';
import { AuthClient } from '@dfinity/auth-client';

function App() {
  const [principal, setPrincipal] = useState(null);

  useEffect(() => {
    const initAuth = async () => {
      const authClient = await AuthClient.create();
      if (await authClient.isAuthenticated()) {
        const identity = authClient.getIdentity();
        setPrincipal(identity.getPrincipal().toString());
      }
    };
    initAuth();
  }, []);

  const handleClick = async () => {
    const authClient = await AuthClient.create();
    if (!authClient.isAuthenticated()) {
      alert("You are browsing as a guest (Anonymous Principal)");
    } else {
      const identity = authClient.getIdentity();
      alert(`Hello, your principal is: ${identity.getPrincipal().toString()}`);
    }
  };

  return (
    <div className="App">
      <button onClick={handleClick}>
        Click me!
      </button>
    </div>
  );
}

export default App;
