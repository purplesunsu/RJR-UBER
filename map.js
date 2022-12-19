function initMap(){
    // map options
    var options = {
        center: {lat:18.1096 , lng:-77.2975},
        zoom: 9.5
    }

    // New Map
    map = new google.maps.Map(document.getElementById('map'),options)
/*
    //Marker
    const marker = new google.maps.Marker({
        position: {lat: 18.0179, lng:-76.8099},
        map:map,
      });

    // Info window
    const detailWindow = new google.maps.InfoWindow({
        content: '<h2>Kingston</h2>'
    });
    marker.addListener("mouseover", () =>{
        detailWindow.open(map,marker);
    })
*/
   function addMarker(property){
    const marker = new google.maps.Marker({
        position: property.location,
        map:map
        //icon:property.imageIcon
     });
     // Check for custom Icon
     if(property.imageIcon){
        // set image icon
        marker.setIcon(property.imageIcon)
     }
     if(property.content){
        const detailWindow = new google.maps.InfoWindow({content: property.content});
        marker.addListener("mouseover", () =>{detailWindow.open(map,marker);})
    }
}
   addMarker({location:{lat: 18.0179, lng:-76.8099}, content: '<h2>Kingston</h2>'});  
   addMarker({location:{lat:18.3281 , lng:-77.2405}}); 

}