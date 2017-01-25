var React = require('react');

var About = (props) => {
  return(
    <div>
      <h1 className="text-center page-title">About us</h1>
      <p>
        We are a small developing company sited in Spain, not far from Barcelona
      </p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the JavaScript Framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used open Weather Map to search for weather data by city name.
        </li>
      </ul>
    </div>
  )
}

module.exports = About;
