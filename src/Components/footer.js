import React from 'react'
import styles from './footer.module.css'

export default function(props){
	return (
		<span className={styles.footer}> {props.children} </span>
	)
}