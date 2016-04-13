import logo from './../../assets/logo.png';
import React from 'react';


const JobComponent = React.createClass({
	render: function() {
		return (
			<div className="container">
			<form id="login">
				<label className="keywords">Keywords</label>
				<input className="keywords-input"/>

				<label className="location">Location</label>
				<input className="location-input"/>
				<button>Search</button>
			</form>
			</div>
		);
	}
});


export default JobComponent;
 