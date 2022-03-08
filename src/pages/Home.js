import React from 'react'
import {Search} from './../components/Navigation/Search'
import {Card} from './../components/Card'
export const Home = () => {
	const cards=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
	return (
		
		<>
			<Search />
			<div className='row'>
			{cards.map((card,index) => {
				return (
					<div className="col-sm-4 mb-4" key={index}><Card /></div>
					)
			})}
			
			
			</div>
			
		</>

		)
}