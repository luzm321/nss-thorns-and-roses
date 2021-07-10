import React, { useState, createContext } from "react";

export const RetailerContext = createContext();


export const RetailerProvider = (props) => {

    const [retailers, setRetailers] = useState([])

    const getRetailers = () => {
        return fetch("http://localhost:8088/retailers?_expand=distributor")
        .then(res => res.json())
        .then(setRetailers)
    }

    const addRetailer = retailerObj => {
        return fetch("http://localhost:8088/retailers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(retailerObj)
        })
        .then(getRetailers)
    }

    return (
        <RetailerContext.Provider value={{
            retailers, getRetailers, addRetailer
        }}>
            {props.children}
        </RetailerContext.Provider>
    )
};