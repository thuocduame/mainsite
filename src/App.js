import React, { useState, useEffect } from 'react'

import Audio from './Components/audio'
import Footer from './Components/footer'
import Soviet from './Components/soviet'
import Title from './Components/title'

import styles from './App.module.css'

export default function(){
	const [mySoviet, setSoviet] = useState('thuocduame')
	
	var contactArea
	
	var sovietKey = [115, 111, 118, 105, 101, 116]
	var thuocduameKey = [116, 104, 117, 111, 99, 100, 117, 97, 109, 101]
	const keyPressHandler = e => {
		var currentArr = (mySoviet == 'thuocduame') ? sovietKey : thuocduameKey
		  , firstKey = currentArr.shift()

		if(e.which != firstKey){
			if(mySoviet == 'thuocduame') sovietKey = [115, 111, 118, 105, 101, 116]
			else thuocduameKey = [116, 104, 117, 111, 99, 100, 117, 97, 109, 101]
			return
		}
		
		if(!currentArr.length){
			if(mySoviet == 'thuocduame') setSoviet('soviet')
			else setSoviet('thuocduame')
		}
	}
	
	useEffect(() => {
		window.addEventListener('keypress', keyPressHandler)
		
		return () => window.removeEventListener('keypress', keyPressHandler)
	})
	
	
	
	
	if(mySoviet == 'thuocduame')
		contactArea = (
			<div className={`${styles["contact"]}`}>
				<p>The Site Owner: tqlsdl the "Thuocduame"</p>
				<p>Contact: <a style={{'textDecoration':'none',color:'#ff0066'}} href="mailto:tqlsdl@thuocduame.cf">Email me!!</a></p>
				<p>Current Project: <a href="https://chatthuocduame.herokuapp.com/" target="_blank" rel="noopener noreferrer">chat.thuocduame</a></p>
				<div style={{'fontSize':'25px','fontFamily': `'Parisienne', cursive`}}>
					Long Live the <Soviet>Soviet</Soviet> Motherland!!
				</div>
			</div>
		)
	else if(mySoviet == 'soviet')
		contactArea = (
			<div className={`${styles["contact"]}`}>
				<p>Да здравствует <Soviet>Советский Союз</Soviet> </p>
			</div>
		)


	return (
		<>
			<div className={styles.header}></div>
			
			<div className={styles['main-content']}>
				<Title>
					<div>The <Soviet>Thuocduame</Soviet> Main Site...</div>
				</Title>
				
				{ contactArea }
		
			</div>
			
			<Footer> Since 5 May 2020 in Tainan </Footer>
			<Audio audioName="background.mp3" />
		</>
	)
}