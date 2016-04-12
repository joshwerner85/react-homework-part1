import React from 'react';
const filterBoxComponent = React.createClass({
	render: function() {
		return (
			 <div className="container">
<form/>

  <label for="keywords">Keywords</label> 
  <input className="keywords-input" type="text" />

  <label for="location">Location</label> 
  <input className="location-input" type="text" />
  <button>Search</button>

</form> 
</div>
		);
	}
});


export default filterBoxComponent;