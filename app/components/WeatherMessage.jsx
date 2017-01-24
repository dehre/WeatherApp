var React = require('react');

var WeatherMessage = React.createClass({

  render: function(){

    var {temp,location} = this.props;

    return(
      <div>
        <h6>In {location} there are {temp} degrees. So hot!</h6>
      </div>
    )
  }

});

module.exports = WeatherMessage;
