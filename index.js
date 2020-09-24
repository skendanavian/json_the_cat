const {fetchBreedDescription} = require('./breedFetcher');

const breedRequest = process.argv[2];


fetchBreedDescription(breedRequest, (error, description) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log(`Description: ${description}`);
  }
});