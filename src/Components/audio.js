import React from 'react'

export default function(props){
	const { audioName } = props;
	
	return (
		<audio style={{display: 'none'}} autoplay="autoplay">
			<source src={`./audio/${audioName}`} type="audio/mpeg" />
		</audio>
	)
}