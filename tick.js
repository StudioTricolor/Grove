setInterval(tick, 1000);
setInterval(changeMessage, 10000);

function tick() {
    // Update Plant XP
    plantXp += plantXPSec;
    document.getElementById("plant_lvl_bar").style = "width: " + (plantXp / plantMaxXp) * 100 + "%;";
    document.getElementById("plant_lvl_bar").innerHTML = plantXp + "xp/" + Math.floor(plantMaxXp) + "xp";
    if (plantXp >= plantMaxXp) {

        var levelUp = new Howl({
          src: ['sound/snd_level_up.wav'],
        });
      
        levelUp.play();
        plantLvl++;
        plantXp = 0;
        plantMaxXp *= 1.65;
        let div = document.createElement('div');
        div.innerHTML = "<p class='slide-in-left'><i style='color: #f04f78;' class='fas fa-level-up-alt'></i> You're now Plant Lvl " + plantLvl + ".</p>";
        document.getElementById("messages_log_window").appendChild(div);
        
        if(plantLvl == 2) {
            document.getElementById("upgrade_button").hidden = false;
        }

        if(plantLvl == 20) {
            mutationPoints++;
            document.getElementById("mutation_point_display").innerHTML = "You have "+mutationPoints+" Mutation Points";
            let div_mutate = document.createElement('div');
            div_mutate.innerHTML = "<p class='slide-in-left'><i class='fas fa-bacteria'></i> You gained a mutation point!</p>";
            document.getElementById("messages_log_window").appendChild(div_mutate);
            document.getElementById("mutation_button").hidden = false;
        }

        document.getElementById("plant_lvl_bar").style = "width: " + (plantXp / plantMaxXp) * 100 + "%;";
        document.getElementById("plant_lvl").innerHTML = "<img style='width: 20%;' src='nic/UI/Level_icon.svg'> " + "Plant Lvl: " + plantLvl;
      }

    // Update Resources
    waterMax = 100 + Math.floor(plantLvl * 5.85);
    document.getElementById("water_count").innerHTML = water.toFixed(0) + "/" + waterMax.toFixed(0);

    if(energy < energyMax) {
        energy += energyPerSec;
    }
    if(water < waterMax) {
        water += waterPerSec;
    }
    energyMax = 25 + Math.floor(plantLvl * 5.85);
    document.getElementById("energy_count").innerHTML = energy.toFixed(0) + "/" + energyMax.toFixed(0);

    // Update Resources Per Second
    if(energyPerSec > 0) {
        document.getElementById("energy_per_second").hidden = false;
        document.getElementById("energy_per_second").innerHTML = '<i class="far fa-sun"></i> Energy: + ' + energyPerSec.toFixed(1) + "/sec";
    } else {
        document.getElementById("energy_per_second").hidden = true;
    }

    if(waterPerSec > 0) {
        document.getElementById("water_per_second").hidden = false;
        document.getElementById("water_per_second").innerHTML = '<i class="fas fa-tint"></i> Water: + ' + waterPerSec.toFixed(1) + "/sec";
    } else {
        document.getElementById("water_per_second").hidden = true;
    }

    //document.body.innerHTML = "";

    // Upgrade Check
    if(water >= 15) {
        document.getElementById("smart_roots_card").style = "max-width: 18rem; opacity: 100%;";
    }

    if(energy >= 10) {
        document.getElementById("internal_clock_card").style = "max-width: 18rem; opacity: 100%;";
    }

    // Update Weather
    if(getRandomInt(500) == 250 && weather != "rain") {
        weather = "rain";
        waterPerSec++;
        document.getElementById("raining_alert").hidden = false;
        setTimeout(clearWeather, 100000);
        let div = document.createElement('div');
        div.innerHTML = "<p class='slide-in-left'><i style='color: #4d65b4;' class='fas fa-cloud-rain'></i> It's raining!</p>";
        document.getElementById("messages_log_window").appendChild(div);
    }

    // Update Time
    if (day < 30) {
        day += 1;
    } else if (day == 30) {
        day = 1;
        month++;
    }

    if (month == 1)
        document.getElementById("month_and_season").innerHTML = "January | Winter";
    else if (month == 2)
        document.getElementById("month_and_season").innerHTML = "February | Winter";
    else if (month == 3)
        document.getElementById("month_and_season").innerHTML = "March | Spring";
    else if (month == 4)
        document.getElementById("month_and_season").innerHTML = "April | Spring";
    else if (month == 5)
        document.getElementById("month_and_season").innerHTML = "May | Spring";
    else if (month == 6)
        document.getElementById("month_and_season").innerHTML = "June | Summer";
    else if (month == 7)
        document.getElementById("month_and_season").innerHTML = "July | Summer";
    else if (month == 8)
        document.getElementById("month_and_season").innerHTML = "August | Summer";
    else if (month == 9)
        document.getElementById("month_and_season").innerHTML = "September | Autumn";
    else if (month == 10)
        document.getElementById("month_and_season").innerHTML = "October | Autumn";
    else if (month == 11)
        document.getElementById("month_and_season").innerHTML = "November | Autumn";
    else if (month == 12) {
        document.getElementById("month_and_season").innerHTML = "December | Winter";
        year++;
        document.getElementById("year_count").innerHTML = "Year: " + year;
        month = 1;
    }

    //document.getElementById("plant_lvl_bar").width = plantXp + "%";
    document.getElementById("plant_lvl_bar").style = "width: " + (plantXp / Math.floor(plantMaxXp)) * 100 + "%;";
    if (plantXp >= plantMaxXp) {
        plantLvl++;
        plantXp = 0;
        plantMaxXp *= 1.65;
        //plantMaxXp = Math.floor(plantMaxXp);
        let div = document.createElement('div');
        div.innerHTML = "<p class='slide-in-left'><i style='color: #4d65b4;' class='fas fa-cloud-rain'></i> You're now <p style=color:'#e83b3b'> Plant Lvl "+ plantLvl +".</p></p>";
        document.getElementById("messages_log_window").appendChild(div);
        //waterMax += Math.floor(waterMax * 1.25);
    }


    // Update Plant Viewport
    document.getElementById("plant_height").innerHTML = plantHeight.toFixed(2) + " m tall";
    if(plantHeight >= 0.5) {
        document.getElementById("plant_display").src = "nic/growth_stages/placeholder/Sun3.svg"
    }
    
    if(plantHeight >= 1) {
        document.getElementById("plant_display").src = "nic/growth_stages/placeholder/Sun4.svg"
    } 
    
    if(plantHeight >= 2) {
        document.getElementById("plant_display").src = "nic/growth_stages/placeholder/Sun5.svg"
    } 
    
    if(plantHeight >= 3) {
        document.getElementById("plant_display").src = "nic/growth_stages/placeholder/Sun6.svg"
    }

    document.getElementById("grove_title").innerHTML = "Grove - " + plantHeight.toFixed(2) + " m";
    if(plantHeight < plantMaxHeight || hasUnusualHeight == true)
        plantHeight += metersPerSec;
    document.getElementById("plant_height").innerHTML = plantHeight.toFixed(2) + " m tall";
}

function clearWeather() {
    waterPerSec--;
    weather = "clear";
    document.getElementById("raining_alert").hidden = true;
    let div = document.createElement('div');
    div.innerHTML = "<p class='slide-in-left'><i style='color: #f9c22b;' class='fas fa-cloud-sun'></i> It stopped raining.</p>";
    document.getElementById("messages_log_window").appendChild(div);
}

function changeMessage() {
    messageChance = getRandomInt(2);
    if(document.getElementById("message_text"))
        document.getElementById("message_text").remove();
    let div = document.createElement('div');
    div.id = "message_text"
    div.style = "text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);";

    if(messageChance == 0)
        div.innerHTML = "<p class='scale-in-bottom'>New Study Finds that Reading Headlines Can Be Bad for Your Health</p>";
    else if(messageChance == 1)
        div.innerHTML = "<p class='scale-in-bottom'>Musician handed plant mid performance. 'Make some noise for this plant!'.</p>";
    else if(messageChance == 2)
        div.innerHTML = "<p class='scale-in-bottom'>New Study Finds that Reading Headlines Can Be Bad for Your Health</p>";

    document.getElementById("message_display").appendChild(div);
}