const request = require('request');




const fetchBreedDescription = function(breedName, callback) {
  // callback --> (error, description)
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    //check for global error
    if (error) {
      return callback(error, null);
    }
    //passing case - log description
    //declare data here so that an error isn't thrown before the URL error at top
    const data = JSON.parse(body);
    if (data[0]) {
      callback(null, data[0].description);
      //if there was no URL error but the cat breed doesn't exist
    } else {
      callback("Sorry, That is not a valid cat breed.");
    }
  });
};


module.exports = {fetchBreedDescription};