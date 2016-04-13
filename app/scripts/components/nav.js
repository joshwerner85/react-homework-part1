import logo from './../../assets/logo.png';
import React from 'react';
const NavComponent = React.createClass({
	render: function() {
		return (
			<nav>
				<div className="navContent">
						<img src={logo} className="logo-image" />
						<h2 className="logo-text">Fresh Jobs</h2>
				</div>
				<div className="links"> 
						<a href="#">JOBS</a>
						<a href="#">COMPANIES</a>
						<a href="#">CITIES</a>
						<a href="#">WHY FRESH?</a>
						<a href="#">FOR EMPLOYERS</a>
				</div>
			</nav>
		);
	}
});


export default NavComponent;