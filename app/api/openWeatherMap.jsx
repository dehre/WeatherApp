var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=50d4cca3f04503d95851ca414e203a0e';

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(
      function(res){
        if(res.data.cod && res.data.message){
          throw new Error('Unable to fetch weather for that location');
        } else {
          return res.data.main.temp;
        }
      },
      function(err){
        throw new Error('Unable to fetch weather for that location');
      }
    );
  }
};
