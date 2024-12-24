const API_KEY = "TV7E42S4R7HDN8C66NC6ZVTQT"; //the api key 
const submit = document.querySelector("button");
submit.addEventListener("click", () =>{
    getWeather(document.querySelector("input").value);
})
getWeather("ashburn");
async function getWeather(city){
    try{
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=${API_KEY}&contentType=json`, {
            mode: 'cors'
        }); //gets the weather json file but waits for the site to get it 
        const weatherData = await response.json();
        const todayData = weatherObj(weatherData); 
        document.querySelector(".date").textContent = todayData.date; 
        document.querySelector(".temperature").textContent = todayData.temp;
        document.querySelector(".condition").textContent = todayData.condition;
        document.querySelector(".description").textContent = todayData.description; 
    }
    catch(error){
        console.log(error); 
    }
}
function weatherObj(weatherData){
    return {
        condition: weatherData.currentConditions.conditions,
        date: weatherData.days[0].datetime,
        description: weatherData.days[0].description,
        temp: weatherData.currentConditions.temp,
    };
}