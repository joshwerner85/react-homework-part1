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
import NavComponent from './../components/nav.js';
import filterBoxComponent from './../components/filterBox.js';






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




















 


ReactDOM.render(<NavComponent/>, document.querySelector('main'));
ReactDOM.render(<filterBoxComponent/>, document.querySelector('main'));


