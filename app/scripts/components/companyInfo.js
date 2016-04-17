import React from 'react';
import logo1 from './../../images/featured-logo.jpg';
import logo2 from './../../images/featured.jpg';

const CompanyInfoComponent = React.createClass({
	render: function() {
		return (
	<div className="featuredCompany">
    <h1 className="lookingForJob">Featured Company</h1>
    	<img src={logo1} className="logo1" />
    	<img src={logo2} className="logo2" />
    <h2 className="maxplay">Max Play</h2>
    <h4 className="Austin">Austin,TX</h4>
	</div>  	
		);
	}
});


export default CompanyInfoComponent;
 
  