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
let gobackl1;
let gobackl11;
let gotol2 = false;
let gotol3 = false;
let gotol4 = false;
let gotol5 = false;
let gotol6 = false;
let gotol7 = false;
let gotol8 = false;
let gotol9 = false;
let gobacktol1 = false;
let gobacktol2 = false;
let gobacktol3 = false;
let gobacktol4 = false;
let gobacktol5 = false;
let gobacktol6 = false;
let gobacktol7 = false;
let gobacktol8 = false;
let gobacktol9 = false;
let gobackl8;
let gobackl7;
let gobackl6;
let gobackl5;
let gobackl4;
let gobackl44;


let securitygaurd2;
let mushroomboss;

//Uneeded
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
let snowinc;
//Music
let music_start;
let levelm1;
let levelm2;
let levelm3;
let randommusic;
let battlem1;
let battlem2;
let battlem3;
let musiconce;
//SFX sounds
let slash1;
let slash2;
let slash3;
let slash4;
let slash5;
let slash6;
let dead;
//Intiate SFX sounds
let startslash;
let changeslash;
let startstab;
let changestab;
let startdead;
let enemystab;
let enemychangestab;
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
