import React, { useEffect, useState } from "react";


export const UserContext = React.createContext();

export const UsersProvider = (props) => {
    const [usersData, setUsersData] = useState(null)
    const requestURL = "http://localhost:4000/users"

    function sendRequest(method, url) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, url)
            xhr.onload = () => {
                if (xhr.status >= 400) {
                    reject(xhr.response);
                } else {
                    resolve(xhr.response);
                }
            }
            xhr.onerror = () => {
                reject(xhr.response);
            }
            xhr.send()
        })
    }
    useEffect(() => {
        sendRequest('GET', requestURL)
            .then(data => setUsersData(JSON.parse(data)))
            .catch(err => console.log(err))
    }, [])


    return (
        <UserContext.Provider value={usersData}>
            {props.children}
        </UserContext.Provider>
    );
};

