import {SHOW_ALERT,FADE_ALERT} from './../types'

const handlers ={
	[SHOW_ALERT]:(state,action) => action.payload,
	[FADE_ALERT]:() => null,
	DEFAULT : state => state
}
export const alertReducer = (state,action) => {
const handler = handlers[action.type] || handlers.DEFAULT
return handler(state,action)








}