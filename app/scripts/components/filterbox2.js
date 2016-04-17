import React from 'react';
import cat from './../../assets/orangecat.jpg';
import logo2 from './../../assets/featured.jpg';

const Filter2Component = React.createClass({
	render: function() {
		return (
	<div className="featuredCompany">
    <h1 className="lookingForJob">Featured Company</h1>
    	<img src="{cat}" className="logo1" />
    	<img src="{logo2}" className="logo2" />
    <h2 className="maxplay">Max Play</h2>
    <h4 className="Austin">Austin,TX</h4>
	</div>  	
		);
	}
});


export default Filter2Component;
 
  