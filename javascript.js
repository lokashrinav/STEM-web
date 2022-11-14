let width = window.innerWidth;
let x = document.querySelector(".hackathons");
let img = document.createElement("img");
let src = document.getElementById("three-lines");
let header = document.getElementsByClassName(".header");
let cp = document.querySelector(".competitive-programming");
let ltc = document.querySelector(".learn-to-code");
let ca = document.querySelector(".coding-aspects");
let wic = document.querySelector(".what-is-coding");
let lang = document.querySelector(".languages");
let supreme = document.querySelector(".supreme");
let paused = true;

function red() {
    src = document.getElementById("three-lines");
    img.src = "menu.png";
    src.appendChild(img);
}

function green() {
    let first = src.firstElementChild;
    src.removeChild(first);
    //for(let i = 0; i < 3; i++) {

   // }
}

let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
let count7 = 0;

function orange() {
    paused = false;
    //need to delete div
    let second = document.querySelector(".hackathons");
    supreme.removeChild(second);
    count2++;
    paused = true;
}

function orangeback() {
    paused = false;
    cp = document.querySelector(".competitive-programming");
    let obj = document.createElement("div");
    supreme.insertBefore(obj, supreme.children[5]);
    obj.setAttribute('class', 'hackathons heads');
    obj.innerHTML = "Hackathons";
    count2--;
    paused = true;
}

function yellow() {
    paused = false;
    //need to delete div
    cp = document.querySelector(".competitive-programming");
    supreme.removeChild(cp);
    count3++;
    paused = true;
}

function yellowback() {
    paused = false;
    //need to delete div
    ltc = document.querySelector(".learn-to-code");
    let obj = document.createElement("div");
    supreme.insertBefore(obj, supreme.children[4]);
    obj.setAttribute('class', 'competitive-programming heads');
    obj.innerHTML = "Competitive Programming";
    count3--;
    paused = true;
}

function blue() {
    //need to delete div
    paused = false;
    ltc = document.querySelector(".learn-to-code");
    supreme.removeChild(ltc);
    count4++;
    paused = true;
}

function blueback() {
    //need to delete div
    paused = false;
    ca = document.querySelector(".coding-aspects");
    let obj = document.createElement("div");
    supreme.insertBefore(obj, supreme.children[3]);
    obj.setAttribute('class', 'learn-to-code heads');
    obj.innerHTML = "Learn to Code";
    count4--;
    paused = true;
}

function black() {
    //need to delete div
    paused = false;
    ca = document.querySelector(".coding-aspects");
    supreme.removeChild(ca);
    count5++;
    paused = true;
}

function blackback() {
    //need to delete div
    paused = false;
    wic = document.querySelector(".what-is-coding");
    let obj = document.createElement("div");
    supreme.insertBefore(obj, supreme.children[2]);
    obj.setAttribute('class', 'coding-aspects heads');
    obj.innerHTML = "Coding Fields";
    count5--;
    paused = true;
}

function flow() {
    //need to delete div
    paused = false;
    wic = document.querySelector(".what-is-coding");
    supreme.removeChild(wic);
    count6++;
    paused = true;
}

function flowback() {
    //need to delete div
    paused = false;
    lang = document.querySelector(".languages");
    let obj = document.createElement("div");
    supreme.insertBefore(obj, supreme.children[1]);
    obj.setAttribute('class', 'what-is-coding heads');
    obj.innerHTML = "What is Coding?";
    count6--;
    paused = true;
}

function grow() {
    //need to delete div
    paused = false;
    lang = document.querySelector(".languages");
    supreme.removeChild(lang);
    count7++;
    paused = true;
}

function growback() {
    //need to delete div
    paused = false;
    let obj = document.createElement("div");
    supreme.prepend(obj);
    obj.setAttribute('class', 'languages heads');
    obj.innerHTML = "Languages";
    count7--;
    paused = true;
}


let widths = [1350, 1200, 1050, 900, 750, 600];

function resizeFn() {
    var count = src.childElementCount;

    if (window.innerWidth < widths[0] && count == 0 && paused == true) {
        red();
    }
    else if (window.innerWidth > widths[0] && count == 1 && paused == true) {
        green();
    }
    else if(window.innerWidth < widths[0] && count2 == 0 && paused == true) {
        orange();
    }
    else if(window.innerWidth > widths[0] && count2 == 1 && paused == true) {
        orangeback();
    }
    else if(window.innerWidth < widths[1] && count3 == 0 && paused == true) {
        yellow();
    }
    else if(window.innerWidth > widths[1] && count3 == 1 && paused == true) {
        yellowback();
    }
    else if(window.innerWidth < widths[2] && count4 == 0 && paused == true) {
        blue();
    }
    else if(window.innerWidth > widths[2] && count4 == 1 && paused == true) {
        blueback();
    }
    else if(window.innerWidth < widths[3] && count5 == 0 && paused == true) {
        black();
    }
    else if(window.innerWidth > widths[3] && count5 == 1 && paused == true) {
        blackback();
    }
    else if(window.innerWidth < widths[4] && count6 == 0 && paused == true) {
        flow();
    }
    else if(window.innerWidth > widths[4] && count6 == 1 && paused == true) {
        flowback();
    }
    else if(window.innerWidth < widths[5] && count7 == 0 && paused == true) {
        grow();
    }
    else if(window.innerWidth > widths[5] && count7 == 1 && paused == true) {
        growback();
    }

}

window.onresize = resizeFn;
resizeFn();