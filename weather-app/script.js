const apikey= "YOUR_API_KEY_HERE";

document.getElementById("searchBtn").onclick= async function(){
    const city= document.getElementById("cityInput").ariaValueMax;

    if(city===""){
        alert("Please enter a city name");
        return;
    }
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;

    try{
        const response = await fetch(url);

        if (!response.ok){
            throw new Error("City not found");
        }

        const data= await response.json();

        document.getElementById("weatherResult").innerHTML=`
            <p><strong>City</strong>${data.name}</p>
            <p><strong>Temperature</strong>${data.main.temp}°C</p>
            <p><strong>Weather</strong>${data.weather[0].description}</p>
            <p><strong>Humidity</strong>${data.main.humidity}%</p>
            <p><strong>Wind Speed</strong>${data.wind.speed} m/s</p>
        `;
    } catch (error){
        document.getElementById("weatherResult").textContent=error.message;
    }
}
