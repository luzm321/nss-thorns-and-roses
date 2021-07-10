import React from 'react'
import './Flower.css'

export const FlowerCard = ({flower})=> (
	<>
		<section className="flower">
			<h1 className="flower__color">{flower.color}</h1>
			<div className="flower__species">{flower.species}</div>
		</section>
	</>
);