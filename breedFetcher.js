const request = require('request');


const breedRequest = process.argv.slice(2)[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedRequest}`, (error, response, body) => {

  if (error) {
    throw error;
  }
  //parse string to a usable object
  const data = JSON.parse(body);
  if (!data[0]) {
    console.log('Sorry, that breed could not be found!');
  } else {
    console.log(`Description: ${data[0].description}`);
  }
});