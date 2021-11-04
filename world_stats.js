// Weather
weather = "clear";
temperature = "70";

// Location
var plantLocation = "";
var plantLocationRNG = getRandomInt(0, 3);

if(plantLocationRNG == 0) {
    plantLocation = "Someone's backyard";
} else if(plantLocationRNG == 1) {
    plantLocation = "A sidewalk";
} else if(plantLocationRNG == 2) {
    plantLocation = "A park";
} else if(plantLocationRNG == 3) {
    plantLocation = "A street";
}

// Date
month = 3;
day = 1;
season = "Spring";
year = 0;