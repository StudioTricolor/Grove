setInterval(tick, 1000);
setInterval(changeMessage, 10000);

function tick() {
    // Update Resources
    waterMax = 100 + Math.floor(plantLvl * 1.85);
    document.getElementById("water_count").innerHTML = water + "/" + waterMax;

    //document.body.innerHTML = "";

    // Update Weather
    if(getRandomInt(500) == 250 && weather != "rain") {
        weather = "rain";
        document.getElementById("raining_alert").hidden = false;
        setTimeout(clearWeather, 100000);
        let div = document.createElement('div');
        div.innerHTML = "<p class='slide-in-left'><i style='color: #4d65b4;' class='fas fa-cloud-rain'></i> It's raining!</p>";
        document.getElementById("messages_log_window").appendChild(div);
    }
    if(weather == "rain") {
        if(water < waterMax)
            water++;
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
}

function clearWeather() {
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

    if(messageChance == 0)
        div.innerHTML = "<p class='scale-in-bottom'>New Study Finds that Reading Headlines Can Be Bad for Your Health</p>";
    else if(messageChance == 1)
        div.innerHTML = "<p class='scale-in-bottom'>Performer handed plant mid performance. 'Make some noise for this plant!'.</p>";
    else if(messageChance == 2)
        div.innerHTML = "<p class='scale-in-bottom'>New Study Finds that Reading Headlines Can Be Bad for Your Health</p>";

    document.getElementById("message_display").appendChild(div);
}