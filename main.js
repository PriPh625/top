/*
Script für Lieblingsorte
*/

let stop = {
    nr: 25,
    lat: 49.577037,
    lng: 6.114122,
    zoom: 11,
    title: "Stade de Luxembourg",
    user: "PriPh625",
};

const Stops = [
    
];

// Karte initialisieren
var map = L.map('map');
// Hintergrund definieren
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

//loop über Etappen
or (let i = 0; i < STOPS.length; i++) {

    //Marker zeichnen
    let marker = L.marker([STOPS[i].lat, STOPS[i].lng]).addTo(map);

        //Popup definieren und öffnen
        marker.bindPopup(`<h2>${STOPS[i].title}</h2> 
            <ul> 
                <li>Geogr. Breite: ${STOPS[i].lat.toFixed(5)}°</li> 
                <li>Geogr. Länge: ${STOPS[i].lng.toFixed(5)}°</li> 
            </ul>
         `);

         //auf eigene Etappe b
         // 
         // licken und Popup öffnen
     if (STOPS[i].user =="PriPh625") {
        map.setView([STOPS[i].lat, STOPS[i].lng], STOPS[i].zoom)
         marker.openPopup();
      }

           //Pulldownmenü befüllen
     let option = document.createElement("option");
     option.value = STOPS[i].user;
     option.text = STOPS[i].title;
     if (STOPS[i].user =="PriPh625") {
        option.selected = true;
     }
     document.querySelector("#pulldown select").appendChild(option);
}


        var marker = L.marker([49.577037, 6, 114122]).addTo(map);
        marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();