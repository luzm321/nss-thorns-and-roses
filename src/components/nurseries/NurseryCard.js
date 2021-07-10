import React from 'react';
import './Nursery.css';

export const NurseryCard = ({nursery})=> (
	<>
		<section className="nursery">
			<h1 className="nursery__name">{nursery.name}</h1>
		</section>
	</>
);