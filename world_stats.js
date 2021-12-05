setInterval(updateTemp, 5000);

// Weather
weather = "clear";
temperature = 68;

// Location
var plantLocation = "";
var plantLocationRNG = getRandomInt(0, 3);

// Date
month = 3;
day = 1;
season = "Spring";
year = 0;

if(plantLocationRNG == 0) {
    plantLocation = "Someone's backyard";
} else if(plantLocationRNG == 1) {
    plantLocation = "A sidewalk";
} else if(plantLocationRNG == 2) {
    plantLocation = "A park";
} else if(plantLocationRNG == 3) {
    plantLocation = "A street";
}

function updateTemp() {
    if(season == "Spring") {
        if(temperature >= 65 && temperature <= 70) {
            if(temperature == 65)
                temperature += getRandomInt(0, 1);
            else if(temperature == 70)
                temperature += getRandomInt(-1, 0);
            else
                temperature += getRandomInt(-1, 1);
        }
    }

    document.getElementById("temperature_display").innerHTML = temperature + "°";
}