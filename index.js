const { fetchBreedDescription } = require('./breedFetcher');
// take in node console line arguments
const args = process.argv.slice(2);
const breed = args.join('_');

// call fetchBreedDescription with our cat breed and terms that we want from the other function
fetchBreedDescription(breed, (err, desc) => {
  // if there's an error
  if (err) {
    console.log('Error fetch details: ', err);
  } else {
    // if the data comes back but it's undefined (empty or not a cat name)
    // if (desc === undefined) {
    //   console.log(`Couldn't find that cat! Please try again.`);
    //   return;
    // }
    // description log here
    console.log(`${desc}`);
    // console.log(`Your search for ${breed} turned up:\n<${data.name}>\n\n <${data.description}>`);
  }
});