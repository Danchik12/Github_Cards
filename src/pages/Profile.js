import React,{useContext,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Loader} from './../components/Loader'
import {GithubContext} from './../context/GitHub/githubContext'
export const Profile = () => {
	let params=useParams()
	const {getUser,getRepos,loading,user,repos} = useContext(GithubContext)
	useEffect(() => {
getUser(params.name)

getRepos(params.name)
//eslint-disable-next-line
	},[])

	
	if(loading) {
		return <Loader />
	}

	const {
		name,company,avatar_url,location,bio,blog,login,html_url,
		followers,public_repos,public_gists,following
	} =user
	
	return (
		<>
		<div className='card mb-4'>
		<div className="card-body">
		<div className="row">
		<div className="col-sm-3 text-center">
		<img src={avatar_url} alt={name} style={{width:'150px'}} />
		<h1>{name}</h1>
		{location && <p>Местоположение: {location}</p>}
		</div>
		<div className="col">
		{bio &&  <>
			<h3>BIO</h3>
			<p>{bio}</p>
			</>}
			<a href={html_url} target="_blank"
			 className='btn btn-dark' rel="noreferrer"> Открыть профиль </a>
			 <ul>
			 {login && <li>
			 	<strong>Username:</strong> {login}</li>
			 }
			 {company && <li>
			 	<strong>Компания:</strong> {company}</li>
			 }
			 {blog && <li>
			 	<strong>Website:</strong> {blog}</li>
			 }
			 </ul>
			 <div className="badge bg-primary">Подписчики : {followers}</div>
			  <div className="badge bg-success">Подписан : {following}</div>
			   <div className="badge bg-info">Репозитории:{public_repos}</div>
			    <div className="badge bg-warning">Gists:{public_gists}</div>
		</div>
		</div>
		</div>
		</div>


		</>

		)
}