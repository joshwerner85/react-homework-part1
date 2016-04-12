// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';
import cat from './../assets/orangecat.jpg';
import React from 'react';
import ReactDOM from 'react-dom';
import logo from './../assets/logo.png';
// import a module from another file.
import tiy from './app.js';

// Looks like the imported module was a function, because here we're executing it!
tiy();


 



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























 


ReactDOM.render(<NavComponent/>, document.querySelector('nav'));
 

