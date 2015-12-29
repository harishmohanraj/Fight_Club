var FluxCartActions = require('../actions/FluxCartActions');

module.exports = {
	// Load mock product data from localStorage into ProductStore via Action
	getProductData : function(){
		var passProductData = JSON.parse(localStorage.getItem('product'));
		FluxCartActions.receiveProduct(passProductData);
	}
	
}