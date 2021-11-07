
var loadingProgress = 0;

setTimeout(loadGame, 100);
setInterval(changeLoadingText, 2000);

function loadGame() {
    if(loadingProgress < 100) {
    loadingProgress += getRandomInt(10);
    document.getElementById("loading_progress").style = "width: "+ loadingProgress + "%;";
    document.getElementById("loading_progress").innerHTML = loadingProgress + "%";
    setTimeout(loadGame, getRandomInt(1000));
    } else {
        betaWarning();
        playMusic('playMusic');
        document.getElementById("loading_container").hidden = true;
        document.getElementById("main_navbar").hidden = false;
        document.getElementById("main_game").hidden = false;
    }
}

function changeLoadingText() {
    var loadingText = getRandomInt(11);

    if(loadingText == 0) {
        document.getElementById("loading_info").innerHTML = "Putting chlorophil in plants...";
    } else if(loadingText == 1) {
        document.getElementById("loading_info").innerHTML = "Simulating plant consciousness...";
    } else if(loadingText == 2) {
        document.getElementById("loading_info").innerHTML = "Giving plants free will...";
    } else if(loadingText == 3) {
        document.getElementById("loading_info").innerHTML = "Beginning photosynthesis...";
    } else if(loadingText == 4) {
        document.getElementById("loading_info").innerHTML = "Absorbing CO2...";
    } else if(loadingText == 5) {
        document.getElementById("loading_info").innerHTML = "Creating meat-eating plants...";
    } else if(loadingText == 6) {
        document.getElementById("loading_info").innerHTML = "Growing roots...";
    } else if(loadingText == 7) {
        document.getElementById("loading_info").innerHTML = "Absorbing sunlight...";
    } else if(loadingText == 8) {
        document.getElementById("loading_info").innerHTML = "Making pretty flowers...";
    } else if(loadingText == 9) {
        document.getElementById("loading_info").innerHTML = "Spreading pollen UwU...";
    } else if(loadingText == 10) {
        document.getElementById("loading_info").innerHTML = "Preparing for winter...";
    }
}