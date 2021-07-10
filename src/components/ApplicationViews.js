import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home.js";
import { FlowerProvider } from "./components/flowers/FlowerProvider.js";
import { FlowerList } from "./components/flowers/FlowerList.js";
import { NurseryProvider } from "./components/nurseries/NurseryProvider.js";
import { NurseryList } from "./components/nurseries/NurseryList.js";

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

            {/* <DistributorProvider>
                <Route exact path="/distributors">
                    <DistributorList />
                </Route>
            </DistributorProvider>

            <RetailerProvider>
                <Route exact path="/retailers">
                    <RetailerList />
                </Route>
            </RetailerProvider> */}
        </>
    );
};