// Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function homeButton() {
  var sound = new Howl({
    src: ['sound/click.ogg'],
  });

  sound.play();

  document.getElementById("relationship_tab").hidden = true;
  document.getElementById("home_tab").hidden = false;
  document.getElementById("mutations_tab").hidden = true;
  document.getElementById("upgrades_tab").hidden = true;
  document.getElementById("settings_tab").hidden = true;
  document.getElementById("achievements_tab").hidden = true;
  document.getElementById("research_tab").hidden = true;
  document.getElementById("social_tab").hidden = true;
}

function socialButton() {
  var sound = new Howl({
    src: ['sound/click.ogg'],
  });

  sound.play();

  document.getElementById("relationship_tab").hidden = true;
  document.getElementById("home_tab").hidden = true;
  document.getElementById("social_tab").hidden = false;
  document.getElementById("mutations_tab").hidden = true;
  document.getElementById("upgrades_tab").hidden = true;
  document.getElementById("settings_tab").hidden = true;
  document.getElementById("achievements_tab").hidden = true;
  document.getElementById("research_tab").hidden = true;
}

function researchButton() {
  var sound = new Howl({
    src: ['sound/click.ogg'],
  });

  sound.play();

  document.getElementById("relationship_tab").hidden = true;
  document.getElementById("home_tab").hidden = true;
  document.getElementById("mutations_tab").hidden = true;
  document.getElementById("upgrades_tab").hidden = true;
  document.getElementById("settings_tab").hidden = true;
  document.getElementById("achievements_tab").hidden = true;
  document.getElementById("research_tab").hidden = false;
  document.getElementById("social_tab").hidden = true;
}

function upgradesButton() {
  var sound = new Howl({
    src: ['sound/click.ogg']
  });

  sound.play();

  document.getElementById("relationship_tab").hidden = true;
  document.getElementById("home_tab").hidden = true;
  document.getElementById("mutations_tab").hidden = true;
  document.getElementById("upgrades_tab").hidden = false;
  document.getElementById("settings_tab").hidden = true;
  document.getElementById("achievements_tab").hidden = true;
  document.getElementById("research_tab").hidden = true;
  document.getElementById("social_tab").hidden = true;
}

function mutationsButton() {
  var sound = new Howl({
    src: ['sound/click.ogg']
  });

  sound.play();
  bruh();

  document.getElementById("relationship_tab").hidden = true;
  document.getElementById("mutations_tab").hidden = false;
  document.getElementById("home_tab").hidden = true;
  document.getElementById("upgrades_tab").hidden = true;
  document.getElementById("settings_tab").hidden = true;
  document.getElementById("achievements_tab").hidden = true;
  document.getElementById("research_tab").hidden = true;
  document.getElementById("social_tab").hidden = true;
}

function achievementsButton() {
  var sound = new Howl({
    src: ['sound/click.ogg']
  });

  sound.play();

  document.getElementById("relationship_tab").hidden = true;
  document.getElementById("home_tab").hidden = true;
  document.getElementById("mutations_tab").hidden = true;
  document.getElementById("achievements_tab").hidden = false;
  document.getElementById("upgrades_tab").hidden = true;
  document.getElementById("settings_tab").hidden = true;
  document.getElementById("research_tab").hidden = true;
  document.getElementById("social_tab").hidden = true;
}

function settingsButton() {
  var sound = new Howl({
    src: ['sound/click.ogg']
  });

  sound.play();

  document.getElementById("relationship_tab").hidden = true;
  document.getElementById("home_tab").hidden = true;
  document.getElementById("mutations_tab").hidden = true;
  document.getElementById("upgrades_tab").hidden = true;
  document.getElementById("settings_tab").hidden = false;
  document.getElementById("achievements_tab").hidden = true;
  document.getElementById("research_tab").hidden = true;
  document.getElementById("social_tab").hidden = true;
}

function relationshipButton() {
  var sound = new Howl({
    src: ['sound/click.ogg']
  });

  sound.play();

  document.getElementById("relationship_tab").hidden = false;
  document.getElementById("home_tab").hidden = true;
  document.getElementById("mutations_tab").hidden = true;
  document.getElementById("upgrades_tab").hidden = true;
  document.getElementById("settings_tab").hidden = true;
  document.getElementById("achievements_tab").hidden = true;
  document.getElementById("research_tab").hidden = true;
  document.getElementById("social_tab").hidden = true;
}

function germinate() {
  var sound = new Howl({
    src: ['sound/snd_grow_click.wav'],
    volume: 0.1,
  });

  sound.play();

  plantXp += 1*growUpgradeLevel;

  if (getRandomInt(10) == 5) {
    if (water < waterMax)
      water++;
  }


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
    let rngMessage = getRandomInt(3);
    if(rngMessage == 0)
      div.innerHTML = "<p class='slide-in-left'><i style='color: #f04f78;' class='fas fa-level-up-alt'></i> You're now Plant Lvl " + plantLvl + ".</p>";
    else if(rngMessage = 1)
      div.innerHTML = "<p class='slide-in-left'><i style='color: #f04f78;' class='fas fa-level-up-alt'></i> You're now Plant Lvl " + plantLvl + ". Wow!</p>";
    else if(rngMessage = 2)
      div.innerHTML = "<p class='slide-in-left'><i style='color: #f04f78;' class='fas fa-level-up-alt'></i> You're now Plant Lvl " + plantLvl + ". That's crazy.</p>";
    else if(rngMessage = 3)
      div.innerHTML = "<p class='slide-in-left'><i style='color: #f04f78;' class='fas fa-level-up-alt'></i> You're now Plant Lvl " + plantLvl + ". Sweeeet.</p>";
    document.getElementById("messages_log_window").appendChild(div);

    document.getElementById("plant_lvl_bar").style = "width: " + (plantXp / plantMaxXp) * 100 + "%;";
    document.getElementById("plant_lvl").innerHTML = "<img style='width: 20%;' src='nic/UI/Level_icon.svg'> " + "Plant Lvl: " + plantLvl;

    if (plantLvl == 1) {
      document.getElementById("plant_selection").hidden = false;
      document.getElementById("main_game").hidden = true;
    }

    if(plantLvl == 2) {
      document.getElementById("upgrade_button").hidden = false;
  }

    if (plantLvl == 3) {
      document.getElementById("sprout_button").hidden = false;
    }
  }
}

function grow() {
  plantXp += 1*growUpgradeLevel;
  if(plantHeight < plantMaxHeight || hasUnusualHeight == true)
    plantHeight += 0.001;

  var sound = new Howl({
    src: ['sound/snd_grow_click.wav'],
    volume: 0.1,
  });

  sound.play();

  if (getRandomInt(10) == 5) {
    if (water < waterMax)
      water++;
  }

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

    if(plantLvl == 20) {
      mutationPoints++;
      let div_mutate = document.createElement('div');
      div_mutate.innerHTML = "<p class='slide-in-left'><i class='fas fa-bacteria'></i> You gained a mutation point!</p>";
      document.getElementById("messages_log_window").appendChild(div_mutate);
      document.getElementById("mutation_button").hidden = false;
  }

    document.getElementById("plant_lvl_bar").style = "width: " + (plantXp / plantMaxXp) * 100 + "%;";
    document.getElementById("plant_lvl").innerHTML = "<img style='width: 20%;' src='nic/UI/Level_icon.svg'> " + "Plant Lvl: " + plantLvl;
  }
}

function updatePlantType() {
  if (plantType == "bleeding_heart") {
    document.getElementById("plant_type_text").innerHTML = "Bleeding Heart ('Lamprocapnos')";
    document.getElementById("plant_description").innerHTML = "You are a Bleeding Heart seed.";
  } else if (plantType == "morning_glory") {
    document.getElementById("plant_type_text").innerHTML = "Morning Glory ('Ipomoea indica')";
    document.getElementById("plant_description").innerHTML = "You are a Morning Glory seed.";
  } else if (plantType == "sun_flower") {
    document.getElementById("plant_type_text").innerHTML = "Sunflower ('Helianthus')"
    document.getElementById("plant_description").innerHTML = "You are a Sunflower seed.";
  }
}

function sprout() {
  var click = new Howl({
    src: ['sound/click.ogg']
  });

  click.play();

  if (plantType == "sun_flower") {
    document.getElementById("plant_description").innerHTML = "You are a small Sunflower.";
  }

  document.getElementById("sprout_button").remove();
  document.getElementById("germinate_button").remove();
  document.getElementById("plant_display").src = "nic/growth_stages/placeholder/Sun2.svg";
  document.getElementById("nitrogen_count").hidden = false;
  document.getElementById("phosphorus_count").hidden = false;
  document.getElementById("potassium_count").hidden = false;
  document.getElementById("plant_height").hidden = false;
  document.getElementById("grow_button").hidden = false;
  document.getElementById("research_button").hidden = false;
  document.getElementById("leaves_container").hidden = false;
  document.getElementById("achievement_button").hidden = false;

  if (plantLvl >= 3 && achv_aNewBeginning == false) {
    achv_aNewBeginning = true;

    var sound = new Howl({
      src: ['sound/achievemant.ogg']
    });

    sound.play();
    let div = document.createElement('div');
    div.innerHTML = "<p class='slide-in-left'><i style='color: #f9c22b;' class='fas fa-trophy'></i> You earned the 'A New Beginning' achievement.</p>";
    document.getElementById("messages_log_window").appendChild(div);
    plantHeight = 0.01;
    document.getElementById("plant_height").innerHTML = plantHeight.toFixed(2) + " m tall";
  }
}

function playMusic(option, previousTrack) {
  var musicTrack = getRandomInt(3);


  if(musicTrack == 0) {
    musicSource = "sound/grove_song_1.ogg";
  } else if(musicTrack == 1) {
    musicSource = "sound/grove_song_2.ogg";
  } else if(musicTrack == 2) {
    musicSource = "sound/grove_song_3.ogg";
  }

  if (option == "playMusic") {
    var sound = new Howl({
      src: [musicSource],
      loop: false
    });

    document.getElementById("music_checkbox").checked = true;
    document.getElementById("sound_checkbox").checked = true;
    document.getElementById("center_content_checkbox").checked = true;

    sound.play();
    // Fires when the sound finishes playing.
    sound.on('end', function(){
      console.log('Finished!');
      setTimeout(playMusic('playMusic', musicTrack), 120000);
    });
    //setTimeout(playMusic('playMusic'), duration([sound])*10);
  } else if(option == "volumeChange") {
    var musicVolume = document.getElementById("volume_range").value;
    sound.volume(musicVolume);
    console.log("bruh");
  }
}

function soundSwitch() {

}

function buttonHover() {

  var hover = new Howl({
    src: ['sound/snd_button_hover.ogg'],
  });

  hover.play();
}


function betaWarning() {
  $('#exampleModalCenter').modal('show');

  var sound = new Howl({
    src: ['sound/event_warning.ogg']
  });

  sound.play();
}

function betaWarningClose() {
  var button = new Howl({
    src: ['sound/click.ogg'],
  });

  button.play();

  $('#exampleModalCenter').modal('hide');
  $('#exampleModalCenter').modal('focus') = false;
  $('#exampleModalCenter').modal('dispose');
}

document.getElementById("music_checkbox").checked = true;
document.getElementById("sound_checkbox").checked = true;
document.getElementById("center_content_checkbox").checked = true;