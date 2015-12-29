var React = require('react');

// Define main Controller View
var FluxCartApp = React.createClass({
    listLeader : function(leaderBoardData, i){
        return(
            <div key = {i} className="row">
                <span>{leaderBoardData.name}</span>
                <span>{leaderBoardData.designation}</span>
                <span>{leaderBoardData.avatar}</span>
            </div>
            )
    },

  // Render our child components, passing state via props
  render: function() {
    return (
      <div className="flux-cart-app">
          {this.props.leaderBoardData.map(this.listLeader)}
      </div>
    );
  }
});

module.exports = FluxCartApp;