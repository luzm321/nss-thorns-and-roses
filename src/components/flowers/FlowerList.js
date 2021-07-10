import React, { useContext, useEffect } from "react";
import { FlowerContext } from "./FlowerProvider.js";
import { FlowerCard } from "./FlowerCard.js";


export const FlowerList = () => {
 
  const { flowers, getFlowers } = useContext(FlowerContext)

  useEffect(() => {
    console.log("FlowerList: useEffect - getFlowers, Initial render before data")
    getFlowers()

  }, []);

  return (
    <div className="flowers">
      {console.log("FlowerList: Render", flowers)}
      {/* <h2>Flowers</h2> */}
      {
        flowers.map(flower => {
          return <FlowerCard key={flower.id} flower={flower} />
        })
      }
    </div>
  )
};