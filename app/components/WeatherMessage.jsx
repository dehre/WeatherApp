var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return(
    <div>
      <h3>In {location} there are {temp} degrees!</h3>
    </div>
  );
}

module.exports = WeatherMessage;
