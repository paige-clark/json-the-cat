const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    const data = JSON.parse(body)[0];
    // error = 'Cleaning the litter box...'; // for testing error status
    if (error) {
      callback(error, null);
      return;
    }
    if (data === undefined) {
      error = 'There is no cat defined.';
      callback(error, null);
    }
    if (data !== undefined) {
      const description = data.description;
      callback(null, description);
    }
  });
};

module.exports = {
  fetchBreedDescription
};

/* NOTES:
? if the cat is not found?
  * prints undefined ... we must console log 'cat not found try typing the name in again (spaces are ok)'

- fetchBreedDescription is taking in a breed name and a callback
  - everywhere there's a console log statement, callback instead    DONE
    * this adds the information to the callback function instead
*/