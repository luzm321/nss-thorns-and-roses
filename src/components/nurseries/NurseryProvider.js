import React, { useState, createContext } from "react";

export const NurseryContext = createContext();


export const NurseryProvider = (props) => {

    const [nurseries, setNurseries] = useState([])

    const getNurseries = () => {
        return fetch("http://localhost:8088/nurseries")
        .then(res => res.json())
        .then(setNurseries)
    }

    const addNursery = nurseryObj => {
        return fetch("http://localhost:8088/nurseries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nurseryObj)
        })
        .then(getNurseries)
    }

    return (
        <NurseryContext.Provider value={{
            nurseries, getNurseries, addNursery
        }}>
            {props.children}
        </NurseryContext.Provider>
    )
};