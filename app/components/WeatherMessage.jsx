var React = require('react');

var WeatherMessage = React.createClass({

  render: function(){

    var {temp,location} = this.props;

    return(
      <div>
        <h3>In {location} there are {temp} degrees!</h3>
      </div>
    )
  }

});

module.exports = WeatherMessage;
