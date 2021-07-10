import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home.js";
import { FlowerProvider } from "./flowers/FlowerProvider.js";
import { FlowerList } from "./flowers/FlowerList.js";
import { NurseryProvider } from "./nurseries/NurseryProvider.js";
import { NurseryList } from "./nurseries/NurseryList.js";
import { DistributorProvider } from "./distributors/DistributorProvider.js";
import { DistributorList } from "./distributors/DistributorList.js";
import { RetailerProvider } from "./retailers/RetailerProvider.js";
import { RetailerList } from "./retailers/RetailerList.js";

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>
        
            <FlowerProvider>
                <Route exact path="/flowers">
                    <FlowerList />
                </Route>
            </FlowerProvider>

            <NurseryProvider>
                <Route exact path="/nurseries">
                    <NurseryList />
                </Route>
            </NurseryProvider>

            <DistributorProvider>
                <Route exact path="/distributors">
                    <DistributorList />
                </Route>
            </DistributorProvider>

            <RetailerProvider>
                <Route exact path="/retailers">
                    <RetailerList />
                </Route>
            </RetailerProvider>
        </>
    );
};