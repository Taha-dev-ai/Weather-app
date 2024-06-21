// API key without the `appid=` prefix
const apikey = "58c37997fd2abfc64f3896b55864feef";
// Base URL for OpenWeatherMap API
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric";

// Get input and button elements from the DOM
const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(cityName) {
    if (!cityName) {
        // If no city name is provided, display an error message and return
        alert("Please enter a city name.");
        return;
    }

    // Construct the request URL
    const encodedCityName = encodeURIComponent(cityName);
    const requestURL = `${apiURL}&q=${encodedCityName}&appid=${apikey}`;

    try {
        // Fetch weather data from the API
        const response = await fetch(requestURL);

        if (!response.ok) {
            // Handle HTTP error responses
            throw new Error("City not found");
        }

        // Parse the JSON response
        const data = await response.json();

        // Update the DOM with the weather data
        document.querySelector(".cityname").textContent = data.name;
        document.querySelector(".temprature").textContent = `${Math.round(data.main.temp)}°C`;
        document.querySelector(".wind").textContent = `${data.wind.speed} km/h`;
        document.querySelector(".maxi-temp").textContent = `${Math.round(data.main.temp_min)}°C`;
        document.querySelector(".mini-temp").textContent = `${Math.round(data.main.temp_max)}°C`;
      
        // const weatherCondition = data.weather[0].main.toLowerCase()
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png"  
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png"
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png"
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png"
        }
    } catch (error) {
        // Handle any other errors (such as network issues)
        alert(error.message);
    }
}

// Add event listener for the button click
searchBtn.addEventListener("click", () => {
    checkWeather(searchInput.value);
});


var i=0;
function x(){
    i--;
    document.getElementById("backgroundContainer").style.backgroundPosition=i+"px";
}
setInterval(x,20);



// ---------------------------------------BEFORE-------------------------------------------
/*

// API key without the `appid=` prefix
const apikey = "58c37997fd2abfc64f3896b55864feef";
// Base URL for OpenWeatherMap API
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Multan";

const searchinput = document.querySelector(".search input")
const searchbtn = document.querySelector(".search Button")

async function checkWeather(cityname) {
    // Construct the request URL by appending the API key to the base URL
    const requestURL = apiURL + cityname + `&appid=${apikey}`;
    // Fetch weather data from the API
    const response = await fetch(requestURL);
    // Parse the JSON response
    const data = await response.json();

    // Log the data to the console
    console.log(data);
    document.querySelector(".cityname").innerHTML = data.name
    document.querySelector(".temprature").innerHTML = Math.round(data.main.temp) + "°C"
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"
}
searchbtn.addEventListener("click", ()=>{
    checkWeather(searchinput.value);
})
*/

/*
const apikey = "appid=58c37997fd2abfc64f3896b55864feef"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Multan"

// const inputsearch = document.querySelector(".search input")
// const btnsearch = document.querySelector(".search-icon fa-solid")

async function Checkweather() {
    const requestURL = await fetch(apiURL +  `&appid=${apikey}`);
    const response = await fetch(requestURL);
    var data = await response.json();

    console.log(data);   
}

Checkweather();
*/


// ------------------------------------------------BACKGROUND IMAGE--------------------------------

// Array of background image URLs
/*

const images = [
    // 'https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGlnaCUyMHJlcyUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D',
    // 'https://plus.unsplash.com/premium_photo-1675621475721-50d0ddde3688?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJlcyUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D',
    // 'https://images.unsplash.com/photo-1635055964418-8daf2fe40f15?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlciUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D',
    // 'https://plus.unsplash.com/premium_photo-1700924890600-87b89b33ba75?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFja2dyb3VuZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D',
    // 'https://plus.unsplash.com/premium_photo-1675355675371-27c5898e5eae?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmFja2dyb3VuZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D',
    // './weather4.avif'
];

// Reference to the background container
const container = document.getElementById('backgroundContainer');

// Current image index
let currentIndex = 0;
let backgroundPositionX = 0;

// Function to change the background image
function changeBackground() {
    // Check if the container exists before trying to change its background
    if (container) {
        // Update the background image URL
        container.style.backgroundImage = `url('${images[currentIndex]}')`;
        backgroundPositionX -= container.offsetWidth;
        container.style.backgroundPositionX = `${backgroundPositionX}px`;

        // Increment the index, and loop back to the beginning if at the end of the array
        currentIndex = (currentIndex + 1) % images.length;
    }
}

// Wait until the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the background
    changeBackground();
    
    // Change the background image every 5 seconds (5000 milliseconds)
    setInterval(changeBackground, 5000);
});
*/


// ===========================================TIME AND DATE=======================================
// Function to update the date, day, and time in the time div
function updateTime() {
    // Get the current date and time
    const now = new Date();

    // Get the date, month, and year
    const date = now.getDate().toString().padStart(2, '0'); // 2-digit day
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // 2-digit month (0-based, so add 1)
    const year = now.getFullYear(); // 4-digit year

    // Format the date as "date-month-year"
    const dateString = `${date}-${month}-${year}`;

    // Get the day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[now.getDay()];

    // Get the current time (hours, minutes, seconds)
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // Format the time string
    const timeString = `Time: ${hours}:${minutes}:${seconds}`;

    // Combine date, day, and time into one string
    const combinedString = `${dateString}\nDay: ${dayOfWeek}\n${timeString}`;

    // Get the time div element
    const timeDiv = document.getElementById('timeDiv');

    // Update the time div with the formatted date, day, and time
    if (timeDiv) {
        timeDiv.innerText = combinedString; // Use innerText to handle new lines correctly
    }
}

// Call the updateTime function every second
setInterval(updateTime, 1000);

// Initialize the time display
updateTime();

