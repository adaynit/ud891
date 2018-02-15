   var listContainer = document.getElementById("list");


 var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'http://api.jsonbin.io/b/5a7c24f404b9c21255e4298c');
ourRequest.onload = function() {
  var ourData = JSON.parse(ourRequest.responseText);
  renderHTML(ourData);
};
ourRequest.send();   



function renderHTML(data){
 
   
 
  var htmlString = "";
  
  for(i = 0; i < data.length; i++){
      var mydate = Date.parse(data[i].date).toString("dddd, MMMM dS, yyyy");
      var time = $(data[i].time).val(); 
        time = moment(time, "hh:mm A");
       var myImg = new Image();
       myImg.src = data[i].image;
      
      
    
     
    


      htmlString += '<h2 id="eventname">' + data[i].description + '</h2>' +
                  '<h3>' + mydate + '</h3>' +
                  '<p>' + data[i].time + '</p>' +
               '<p>' + data[i].location + " " +data[i].city +'</p>' +
               '<p>Interested? <a href="event1.html">click here</a> for more info</p>';
                
               
   
   
  }
    
 listContainer.insertAdjacentHTML('beforeend', htmlString);
    
}

  
 
