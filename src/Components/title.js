import React from 'react'
import styles from './title.module.css'

export default function(props){
	return (
		<div id={styles.title}>
			{ props.children }
		</div>
	)	
}