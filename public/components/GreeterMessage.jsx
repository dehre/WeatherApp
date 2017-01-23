var React = require('react');

var GreeterMessage = React.createClass({

  render: function(){

    var passedName=this.props.name;
    var passedMessage=this.props.message;

    return (
      <div>
        <h1>Hello {passedName}!</h1>
        <p>{passedMessage}</p>
      </div>
    )
  }

});

module.exports = GreeterMessage;
