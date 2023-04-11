import { useState } from 'react';

export const User = () => {

    const [username, setUsername] = useState("Rafal")

  return <div>Username: {username}</div>;
};
