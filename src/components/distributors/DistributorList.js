import React, { useContext, useEffect } from "react";
import { DistributorContext } from "./DistributorProvider.js";
import { DistributorCard } from "./DistributorCard.js";


export const DistributorList = () => {
 
  const { distributors, getDistributors } = useContext(DistributorContext)

  useEffect(() => {
    console.log("DistributorList: useEffect - getDistributors, Initial render before data")
    getDistributors()

  }, []);

  return (
    <div className="distributors">
      {console.log("DistributorList: Render", distributors)}
      {/* <h2>Distributors</h2> */}
      {
        distributors.map(distributor => {
          return <DistributorCard key={distributor.id} distributor={distributor} />
        })
      }
    </div>
  )
};