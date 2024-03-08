import React, { useState, useEffect } from 'react';

export default function App1() {
    const [user, setUser] = useState({ name: '', password: '' });
    const [validate, setValidate] = useState(false);
    const [accessGranted, setAccessGranted] = useState(false);

    useEffect(() => {
        if (validate && user.name === 'john' && user.password === 'john123') {
            setAccessGranted(true);
        } else {
            setAccessGranted(false);
        }
    }, [validate, user]);

    const checkValid = () => {
        setValidate(true);
    };

    return (
        <>
            <h1>Login</h1>
            <form>
                <p>
                    <input
                        type="text"
                        value={user.name}
                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                        placeholder="Enter name"
                    />
                </p>
                <p>
                    <input
                        type="password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        placeholder="Enter password"
                    />
                </p>
                <button type="button" onClick={checkValid}>Submit</button>
            </form>
            {validate && (
                <p style={{ color: accessGranted ? 'green' : 'red' }}>
                    {accessGranted ? 'Access Granted' : 'Access Denied'}
                </p>
            )}
        </>
    );
}
