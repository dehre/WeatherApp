var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return(
    <div>
      <h3 className="text-center">It's {temp} degrees in {location.charAt(0).toUpperCase() + location.slice(1)}.</h3>
    </div>
  );
}

module.exports = WeatherMessage;
