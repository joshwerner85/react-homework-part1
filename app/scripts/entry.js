// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';
import cat from './../assets/orangecat.jpg';
import React from 'react';
import ReactDOM from 'react-dom';

// import a module from another file.
import tiy from './app.js';

// Looks like the imported module was a function, because here we're executing it!
tiy();


const Nav = React.createClass({
	render: function(){
		return <nav><a>This is the nav</a></nav>
	}
});

const ListItem = React.createClass({
    render: function() {
        return     <li> 
                <img src={cat} />
                <p>this is a list item </p>
                </li>;
    }
});

const List = React.createClass({
    render: function() {
    	let myListItems = [
       			<ListItem key="1" />,
       			<ListItem key="2" />,
       			<ListItem key="3" />,
       			<ListItem key="4" />,
       			<ListItem key="5" />
               ]; 
                 return (
            <ul>
            	{myListItems}     
            </ul>
        );
    }
})

const NavBar = React.createClass({
	render: function() {
		return <nav><a href="#">this is a link</a></nav>;
	}
});



const TestComponent = React.createClass({
    render: function() {
        return <h1 className="tag-class">Test~</h1>;
    }
});



ReactDOM.render(<TestComponent/>, document.querySelector('h1'));
ReactDOM.render(<NavBar/>, document.querySelector('nav'));

