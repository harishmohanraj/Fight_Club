window.React = require('react');
var leaderBoard = require('./leaderBoard');
var FluxCartApp = require('./components/FluxCartApp.React');

//Load product data
leaderBoard.init();

// Load data from local storage

//CartAPI.getProductData();

// Render FluxCartApp Controller View
React.render(
		<FluxCartApp leaderBoardData = {JSON.parse(localStorage.getItem('leaderBoard'))[0].leaders}/>,
		document.getElementById('container')
	)
