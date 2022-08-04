const args = process.argv.slice(2);
const breed = args.join('_');
const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function(error, response, body) {
  if (error) {
    console.log(`Your search returned this error: `, error);
    return;
  }
  // console.error('error:', error); // print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // print the status code
  const data = JSON.parse(body)[0];
  if (data === undefined) {
    console.log(`Couldn't find that cat! Please try again.`);
    return;
  }
  console.log(`Your search for ${breed} turned up:\n`);
  console.log(`<${data.name}>`, '\n\n', data.description);
});

/* NOTES:
? if the cat is not found?
  * prints undefined ... we must console log 'cat not found try typing the name in again (spaces are ok)'
*/