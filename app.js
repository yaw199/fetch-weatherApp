const request = require("request");
const path = require("path");
const hbs = require("hbs")
const express = require("express");

const app = express()


// middleware
app.set("view engine","hbs")
app.use(express.static(path.join(__dirname,"public")))

app.get("/weather",(req,res)=>{
    res.render("index",{
        about:"About Me",
        help:"Help"
    })
})


app.listen(3000,()=>{
    console.log("Server running")
})

















// const url = "http://api.weatherstack.com/current?access_key=f3f55c94a268ef87226394ba9e594e44&query=columbus Ohio&units=f"

// request ({url:url}, (err,response)=>{
//     const data = JSON.parse(response.body)
//     const outP = `It's currently ${data.current.temperature} fahrenheit out and it's ${data.current.weather_descriptions[0]} . it feels like ${data.current.feelslike} outside.`
//     console.log(outP)
// })


// const geocoding_url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoieWF3MTk5IiwiYSI6ImNrbHRzY3g1ajA2ZHIybmwyNTBuNnMxcHQifQ.m4VbHQ0ZIQfPVaiHVAHYTA"
// request({url:geocoding_url, json:true},(error,response)=>{
//     if(error){
//         return "Connection to the server failed, check your connect"
//     }
//     else{
//           const latitude = response.body.features[0].center[0]
//           const longitude = response.body.features[0].center[1]
//           console.log(latitude,longitude)
//     }
    
    
    
// })
// const add = (a,b,cbk) => {
//     setTimeout(()=>{
//      cbk(a+b)
//     },1000)
// }

// add(1,8,(sum)=>{
//     console.log(sum)
// })