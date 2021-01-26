// NASA API
const count = 10;
const apiKey = 'DEMO_KEY';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let resultsAray = [];

// Get 10 Images from NASA API
const getNasaPictures = async () => {
  try {
    const response = await fetch(apiUrl);
    resultsAray = await response.json();
    console.log(resultsAray);
  } catch (error) {
    // Catch Error Here
  }
};

getNasaPictures();
