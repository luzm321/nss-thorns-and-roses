import React from "react";
import { UserWelcome } from "./UserWelcome.js";
import "./Home.css";

export const Home = () => (
    <>
        <h2>Thorns and Roses</h2>
        <small>Adorning life’s moments with the beauty of flowers and handpicked just for you...</small>

        <address className="address">
            <div>Visit Us at the Nashville NorthEast Location</div>
            <div>300 Blooming Way</div>
        </address>

        <UserWelcome userName={"Luz Angelique"} />

    </>
);