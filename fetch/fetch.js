const weather = document.querySelector(".weather");
const pForm = document.querySelector("form");
const pInput = document.querySelector("input");
const btn = document.querySelector("button");
const locaT = document.querySelector(".location");
const wIcon = document.querySelector(".weather-icon")


pForm.addEventListener("submit",(e)=>{
    e.preventDefault()
})

btn.addEventListener("click",()=>{
   const location = pInput.value
    if(pInput.value==="")return
    
    locaT.innerText = "Loading...."
    wIcon.src=""
    weather.innerText=""
    fetch("http://api.weatherstack.com/current?query=" + location + "&access_key=f3f55c94a268ef87226394ba9e594e44&units=f").then((response)=>{
    response.json().then((data)=>{
        if (data.error){
           locaT.innerText= "Unable to connect, type correct location."
        }

        else{
        locaT.innerText = `Location:${data.location.name} ${data.location.region}, ${data.location.country}`
        wIcon.src = data.current.weather_icons[0]
        weather.innerText = `The weather is ${data.current.weather_descriptions[0]}, temperature is ${data.current.temperature} fahrenheit and it feels like ${data.current.feelslike} outside.
    Precipitation is ${data.current.precip} inch.`
        }
})
})

pInput.value = ""
})

