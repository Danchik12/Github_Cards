import React,{useContext,useState} from 'react'
import {AlertContext} from './../../context/Alert/alertContext'
import {GithubContext} from './../../context/GitHub/githubContext'
export const Search = () =>{
	const [value,setValue] =useState('')
const alert = useContext(AlertContext)
const github = useContext(GithubContext)
const onSubmit = event => {
	if (event.key !== "Enter"){
		return

	}
	github.clearUsers()
	if (value.trim()){
		alert.fade()
		github.search(value.trim())
	}else {
		alert.show('Введите Username ','warning')
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