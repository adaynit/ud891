    $(function() {


   var people = [];

   $.getJSON('http://api.jsonbin.io/b/5a7c24f404b9c21255e4298c', function(data) {
       $.each(data.person, function(i, f) {
          var tblRow = "<tr>" + 
           "<td>" + f.description + "</td>" + "<td>" + f.duration + ' hours' + "</td>" + "<td>" + f.date + "</td>" + "<td>" + f.time 
           + "</td>" + "<td>" + f.city + "</td>" + "<td>" + f.location + "</td>" + "<td>" + f.image + "</td>" + "</tr>"
           $(tblRow).appendTo('#userdata tbody'); 
     });

   });

});