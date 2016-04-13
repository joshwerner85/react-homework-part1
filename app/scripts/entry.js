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

// Importing Navigation	
import NavComponent from './components/nav';
import FilterComponent from './components/filterBox';
import JobComponent from './components/jobRow';
import InfoBoxComponent from './components/infoBox';
import CompanyInfoComponent from './components/companyInfo';

 

 const AllPages = React.createClass({
	render: function() {
		return (
			<div>
			<NavComponent/>
			<FilterComponent/>
			<JobComponent />
			<InfoBoxComponent />
			<CompanyInfoComponent />

			</div>
		);
	}
});


 

 
ReactDOM.render(<AllPages/>, document.querySelector('main'));
// ReactDOM.render(<NavComponent/>, document.querySelector('main'));
// ReactDOM.render(<FilterComponent/>, document.querySelector('.container'));




