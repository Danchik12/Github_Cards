import React,{useContext,useState} from 'react'
import {AlertContext} from './../../context/Alert/alertContext'

export const Search = () =>{
	const [value,setValue] =useState('')
const {show} = useContext(AlertContext)
const onSubmit = event => {
	if (event.key !== "Enter"){
		return
	}

	if (value.trim()){
		console.log("good")
	}else {
		show('Введите Username ','warning')
	}
}

	return (
<div className='form-group m-2'>
<input 
type='text'
className='form-control'
placeholder="Enter Username..."
value={value}
onChange={event => setValue(event.target.value)}
onKeyPress={onSubmit}
/>

</div>
		)
}