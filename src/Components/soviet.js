import React from 'react'
import styles from './soviet.module.css'

export default function(props){
	return (
		<span className={styles.soviet}> {props.children} </span>
	)
}