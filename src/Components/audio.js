import React from 'react'
import music from './audio/background.mp3'

export default function(props){
	const { audioName } = props;
	
	return (
		<audio style={{display: 'none'}} autoPlay="autoplay">
			<source src={music} type="audio/mpeg" />
		</audio>
	)
}