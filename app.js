window.addEventListener('load', ()=> {
    let long;
    let lat; 

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            // console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;
        })
    } else{
        h1.textContent = (" Please enable location for this weather app to work")
    }
});

//The API was no longer available by dark sky 