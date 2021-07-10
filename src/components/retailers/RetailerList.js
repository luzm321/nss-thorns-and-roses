import React, { useContext, useEffect } from "react";
import { RetailerContext } from "./RetailerProvider.js";
import { RetailerCard } from "./RetailerCard.js";


export const RetailerList = () => {
 
  const { retailers, getRetailers } = useContext(RetailerContext)

  useEffect(() => {
    console.log("RetailerList: useEffect - getRetailers, Initial render before data")
    getRetailers()

  }, []);

  return (
    <div className="retailers">
      {console.log("RetailerList: Render", retailers)}
      {/* <h2>Retailers</h2> */}
      {
        retailers.map(retailer => {
          return <RetailerCard key={retailer.id} retailer={retailer} />
        })
      }
    </div>
  )
};