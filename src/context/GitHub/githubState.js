import React,{useReducer} from 'react'
import axios from 'axios'
import {githubReducer} from './githubReducer'
import {GithubContext} from './githubContext'
import {CLEAR_USERS,GET_REPOS,GET_USER,SEARCH_USERS,SET_LOADING} from './../types'

const CLIENT_ID=process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET=process.env.REACT_APP_CLIENT_SECRET

export const GithubState = ({children}) => {

const initialState ={
	user:{},
	users:[],
	loading:false,
	repos:[]
}
const [state,dispatch] = useReducer (githubReducer,initialState)

const search = async value => {
	setLoading()
const response = await axios.get(
`https://api.github.com/search/users?q=${value}&client_ID=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
	)


dispatch({
	type:SEARCH_USERS,
	payload:response.data.items
})
}
const getUser = async name => {
	const response = await axios.get(
`https://api.github.com/users/${name}?client_ID=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
	)
	setLoading()
	dispatch({
		type:GET_USER,
		payload:response.data
	})
}
const getRepos = async name => {
const response = await axios.get(
`https://api.github.com/users/${name}/repos?per_page=6&client_ID=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
	)
	setLoading()
	dispatch({
		type:GET_REPOS,
		payload:response.data
	})
}

const clearUsers = () => dispatch({type:CLEAR_USERS,})

const setLoading =() => dispatch({type:SET_LOADING})
const {user,users,repos,loading} = state
	return (

		<GithubContext.Provider value={{

setLoading,search,getUser,getRepos,clearUsers,
user,users,repos,loading
}}>

		{children}
		</GithubContext.Provider>
		)
}
