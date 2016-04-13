import React from 'react';


const InfoBoxComponent = React.createClass({
	render: function() {
		return (
	<div className="infoBox">
	    <h1 className="lookingForJob">Looking for a job?</h1>
	    <h4>Create a Fresh Jobs profile and<span className="comeToYou"> let employers come to you.</span></h4>
	    <div className="list">
	    <ul>
	        <li>Employers search our database and contact you</li>
	        <li>Import easily from LinkedIn</li>
	        <li>Link to Stack Overflow, GitHub, CodePlex and more</li>
	    </ul>
	    </div>
	    <button className="createProfile">Create a Profile</button>
	</div>	 
		);
	}
});


export default InfoBoxComponent;
 
 