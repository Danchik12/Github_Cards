import React,{useContext} from 'react'
import {Search} from './../components/Navigation/Search'
import {Card} from './../components/Card'

import {Loader} from './../components/Loader'
import {GithubContext} from './../context/GitHub/githubContext'


export const Home = () => {
	const {loading,users} = useContext(GithubContext)
	return (
		
		<>
			<Search />
			<div className='row'>
			{loading 
				? <Loader />
				: users.map((user,index) => {
				return (
					<div className="col-sm-4 mb-4" key={index}><Card user={user} /></div>
					)
			})

			}
			
			
			
			</div>
			
		</>

		)
}