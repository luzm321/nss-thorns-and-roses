import React from 'react';
import './Retailer.css';

export const RetailerCard = ({retailer})=> (
	<>
		<section className="retailer">
			<h1 className="retailer__name">{retailer.name}</h1>
			<div className="retailer__address">Address: {retailer.address}</div>
			<div className="retailer__distributor">Distributor: {retailer.distributor.name}</div>
		</section>
	</>
);