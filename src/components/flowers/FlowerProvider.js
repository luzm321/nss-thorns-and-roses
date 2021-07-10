import React, { useState, createContext } from "react";

export const FlowerContext = createContext();


export const FlowerProvider = (props) => {

    const [flowers, setFlowers] = useState([])

    const getFlowers = () => {
        return fetch("http://localhost:8088/flowers")
        .then(res => res.json())
        .then(setFlowers)
    }

    const addFlower = flowerObj => {
        return fetch("http://localhost:8088/flowers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(flowerObj)
        })
        .then(getFlowers)
    }

    return (
        <FlowerContext.Provider value={{
            flowers, getFlowers, addFlower
        }}>
            {props.children}
        </FlowerContext.Provider>
    )
};