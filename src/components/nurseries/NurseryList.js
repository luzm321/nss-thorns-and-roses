import React, { useContext, useEffect } from "react";
import { NurseryContext } from "./NurseryProvider.js";
import { NurseryCard } from "./NurseryCard.js";


export const NurseryList = () => {
 
  const { nurseries, getNurseries } = useContext(NurseryContext)

  useEffect(() => {
    console.log("NurseryList: useEffect - getNurseries, Initial render before data")
    getNurseries()

  }, []);

  return (
    <div className="nurseries">
      {console.log("NurseryList: Render", nurseries)}
      {/* <h2>Nurseries</h2> */}
      {
        nurseries.map(nursery => {
          return <NurseryCard key={nursery.id} nursery={nursery} />
        })
      }
    </div>
  )
};