var eventData=

[{
    "description": "Event #1",
    "duration": 2,
    "date": "2020-12-27",
    "time": "22:31:00",
    "datetime": "2020-12-27T22:31:00Z",
    "city": "New York, USA",
    "location": "Central Park",
    "location_lat": 38.7247424,
    "location_lng": -9.11414279999997,    
    "image": "https://images.unsplash.com/photo-1474899351970-ee05f7dd1334?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ff4c8f414ebe842d32125554d6e42d7e&auto=format&fit=crop&w=1267&q=80"    
}]

console.log(eventData.location_lat);

var directionsDisplay,
    directionsService,
    map;

function mydate(date){
    var mydate = Date.parse(date).toString("dddd, MMMM dS, yyyy");
    return mydate;
}
 
function initMap(){
     
      var centerPoint = {lat: eventData[0].location_lat , lng: eventData[0].location_lng};
  

 var map = new google.maps.Map(document.getElementById('map'), {
 zoom: 8,
 center: centerPoint
});
 
var marker = new google.maps.Marker({
            position: centerPoint,
            map: map,
             
        });    
  
}    

function eventTemplate(event){
    
    return `<div>
        <img src="${event.image}" id="cen-park">
        <h3>${event.description}</h3> 
         <h4>${mydate(event.date)}</h4>
                 
         <p>${event.time}</p> 
         <p>${event.location}</p>
         <p>${event.city}</p>
          <p> The Event will take ${event.duration} hours</p>
         
         
    </div>
    `
}

document.getElementById("list").innerHTML = 
`<h1>(${eventData.description})</h1>
    ${eventData.map(eventTemplate)}`