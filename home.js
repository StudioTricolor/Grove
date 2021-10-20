/*
  We can use [body] or the element class/id that wraps the elements with tooltip/popover.
  Include the data-[] attribute in each element that needs it.
*/
$(document).ready(function () {
  //can also be wrapped with:
  //1. $(function () {...});
  //2. $(window).load(function () {...});
  //3. Or your own custom named function block.
  //It's better to wrap it.

  //Tooltip, activated by hover event
  $("body").tooltip({   
    selector: "[data-toggle='tooltip']",
    container: "body"
  })
    //Popover, activated by clicking
    .popover({
    selector: "[data-toggle='popover']",
    container: "body",
    html: true
  });
  //They can be chained like the example above (when using the same selector).
  
});

var MyApp = {}; // Globally scoped object

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function homeButton() {
    var sound = new Howl({
        src: ['sound/click.ogg'],
      });
      
      sound.play();

      document.getElementById("home_tab").hidden = false;
      document.getElementById("upgrades_tab").hidden = true;
    document.getElementById("settings_tab").hidden = true;
    document.getElementById("achievements_tab").hidden = true;
}

function upgradesButton() {
  var sound = new Howl({
    src: ['sound/click.ogg']
  });
  
  sound.play(); 

  document.getElementById("home_tab").hidden = true;
  document.getElementById("upgrades_tab").hidden = false;
  document.getElementById("settings_tab").hidden = true;
  document.getElementById("achievements_tab").hidden = true;
}

function achievementsButton() {
  var sound = new Howl({
    src: ['sound/click.ogg']
  });
  
  sound.play(); 

  document.getElementById("home_tab").hidden = true;
  document.getElementById("achievements_tab").hidden = false;
  document.getElementById("upgrades_tab").hidden = true;
  document.getElementById("settings_tab").hidden = true;
}

function settingsButton() {
  var sound = new Howl({
    src: ['sound/click.ogg']
  });
  
  sound.play(); 

  document.getElementById("home_tab").hidden = true;
  document.getElementById("upgrades_tab").hidden = true;
  document.getElementById("settings_tab").hidden = false;
  document.getElementById("achievements_tab").hidden = true;
}

function germinate() {
  plantXp++;

  if(getRandomInt(10) == 5) {
    if(water < waterMax)
            water++;
  }


  document.getElementById("plant_lvl_bar").style="width: " + (plantXp/plantMaxXp)*100 + "%;";
  document.getElementById("plant_lvl_bar").innerHTML = plantXp+"xp/"+Math.floor(plantMaxXp)+"xp";
  if(plantXp >= plantMaxXp) {
    plantLvl++;
    plantXp = 0;
    plantMaxXp *= 1.65;
    let div = document.createElement('div');
    div.innerHTML = "<p class='slide-in-left'><i style='color: #f04f78;' class='fas fa-level-up-alt'></i> You're now Plant Lvl "+ plantLvl +".</p>";
    document.getElementById("messages_log_window").appendChild(div);

    document.getElementById("plant_lvl_bar").style="width: " + (plantXp/plantMaxXp)*100 + "%;";
    document.getElementById("plant_lvl").innerHTML ="<i class='fas fa-leaf'></i> " + "Plant Lvl: " + plantLvl;

    if(plantLvl == 1) {
      document.getElementById("plant_selection").hidden = false;
      document.getElementById("main_game").hidden = true;
    }

    if(plantLvl == 3) {
      document.getElementById("sprout_button").hidden = false;
    }
  }
}

function updatePlantType() {
  if(plantType = "moon_flower")
    document.getElementById("plant_type_text").innerHTML = "Moonflower ('Ipomoea alba')";
  else if(plantType = "bleeding_heart")
    document.getElementById("plant_type_text").innerHTML = "Bleeding Heart ('Lamprocapnos')";
  else if(plantType = "morning_glory")
    document.getElementById("plant_type_text").innerHTML = "Morning Glory ('Ipomoea indica')";
}

function sprout() {
  document.getElementById("sprout_button").remove();
  document.getElementById("germinate_button").remove();

  if (plantLvl >= 3 && achv_aNewBeginning == false) {
    achv_aNewBeginning = true;
    var myToastEl = document.getElementById('test_toast');
    var myToast = bootstrap.Toast.getOrCreateInstance(myToastEl)
    myToast.show();

    var sound = new Howl({
        src: ['sound/achievemant.ogg']
    });

    sound.play();
    let div = document.createElement('div');
    div.innerHTML = "<p class='slide-in-left'><i style='color: #f9c22b;' class='fas fa-trophy'></i> You earned the 'A New Beginning' achievement.</p>";
    document.getElementById("messages_log_window").appendChild(div);
}
}

function playMusic() {
  document.getElementById("music_checkbox").checked = true;
  document.getElementById("sound_checkbox").checked = true;

  var sound = new Howl({
    src: ['sound/grove_song_1.ogg'],
    loop: true
  });
  
  var music = sound.play();
}

function soundSwitch() {

}