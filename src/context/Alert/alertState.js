import React,{useReducer} from 'react'
import {AlertContext} from './alertContext'
import {alertReducer} from './alertReducer'
import {SHOW_ALERT,FADE_ALERT} from './../types'
export const AlertState = ({children}) => {
const [state,dispatch] = useReducer(alertReducer,null)
	const fade =() => dispatch({type:FADE_ALERT})

	const show =(text,type='secondary') => {
		dispatch ({type:SHOW_ALERT,
		payload:{type,text}
		})
	}
	return (
		<AlertContext.Provider value={{
			fade,show,alert:state
		}}>
			{children}
		</AlertContext.Provider>
	)
}