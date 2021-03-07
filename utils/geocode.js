
const request = require("request");



const geoCode = (address,callback)=>{
const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoieWF3MTk5IiwiYSI6ImNrbHRzY3g1ajA2ZHIybmwyNTBuNnMxcHQifQ.m4VbHQ0ZIQfPVaiHVAHYTA&limit=1"
request({url:url,json:true}, (error,response)=>{
    if(error){
        callback("Unable to connect to the website, check your network.",undefined)
    }
    else if (response.body.features.length === 0){
        callback("There is no address to search, try another address!",undefined)
        
    }
    else{
        callback(undefined,{
            latitude:response.body.features[0].center[1],
            longitude:response.body.features[0].center[0],
            place:response.body.features[0].place_name
        })
    }
})
}

module.exports=geoCode
 