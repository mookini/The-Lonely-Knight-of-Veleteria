//Stat variables
let health;
let stamina=100;
let goback11;
let goback;
let right;
let left;
let up;
let down;
let moveup;
let movedown;
let moveleft;
let moveright;
let levelup;
///Enemy Variables
let mushroom;
let goblin;
let skeleton;
let mushroomi;
let goblini;
let skeletoni;
let enemyhealth;
let enemyhealth2;
let enemyattack;
let enemyattack2;
let enemy1;
let enemy2;
//tele
let place;
let telebat;
let gotol2 = false;
let gotol3 = false;
let gobacktol1 = false;
let gotol4 = false;
let gotol5 = false;
let gobacktol3 = false;
let gobacktol4 =false;
let gotol6 = false;
let gotol7 = false;
let gotol8 = false;
let gotol9 = false;
let gobacktoforest = false;
//
let firsttime;
let gold;
let xp;
let goldadd;
let xpadd;
//potion & heal variables
let potion;
let heal;
let fromdeath;
let time;
///Attack
let suattack;
let fate;
let randomin;
let sandinc;
//Music
let music_start;
let levelm1;
let battlem1;
let musiconce;
//Upgrades
let armor;
function ranattack(){
    sessionStorage.setItem("health",health)
    window.location.href = "ranenemy.html"
    
}
function ranattackdual(){
    sessionStorage.setItem("health",health)
    window.location.href = "attack(dual).html"
    
}

function gotogame() {
    location.href = "index.html";
}
function restart(){
    location.href = "title.html"
}
