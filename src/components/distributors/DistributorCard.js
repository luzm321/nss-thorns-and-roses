import React from 'react';
import './Distributor.css';

export const DistributorCard = ({distributor})=> (
	<>
		<section className="distributor">
			<h1 className="distributor__name">{distributor.name}</h1>
			<div className="distributor__flowerPriceMarkupPercentage">Flower Price Markup Percentage: {distributor.flowerPriceMarkupPercentage}</div>
		</section>
	</>
);