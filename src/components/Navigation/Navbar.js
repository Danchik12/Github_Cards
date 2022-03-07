import React from 'react'
import {NavLink} from 'react-router-dom'



export  const   Navbar = ()  =>  {
	return(
	<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
	<div className="navbar-brand ps-3">
	GitHub Search</div>
	<ul className="navbar-nav">
		<li className="nav-item"><NavLink exact to="/Github_Cards" className="nav-link">
		Главная </NavLink>
		</li>
		<li className="nav-item"><NavLink to="/about" className="nav-link">
		Информация </NavLink>

		</li>
	</ul>


	</nav>
	)
	
}

