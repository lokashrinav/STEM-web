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
    src.setAttribute("onclick", "moose()")
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
let arra = [];
let container = document.querySelector(".container")


function orange() {
    paused = false;
    //need to delete div
    let second = document.querySelector(".hackathons");
    supreme.removeChild(second);
    count2++;
    arra.push("Hackathons");
    paused = true;
}

function orangeback() {
    paused = false;
    cp = document.querySelector(".competitive-programming");
    let obj = document.createElement("div");
    supreme.insertBefore(obj, supreme.children[5]);
    obj.setAttribute('class', 'hackathons heads all');
    let a = document.createElement("a");
    obj.appendChild(a);
    a.setAttribute('href', "./hackathon.html");
    a.innerHTML = "Hackathon";
    count2--;
    arra.pop();
    paused = true;
}

function yellow() {
    paused = false;
    //need to delete div
    cp = document.querySelector(".competitive-programming");
    supreme.removeChild(cp);
    count3++;
    arra.push("Competitive Programming")
    paused = true;
}

function yellowback() {
    paused = false;
    //need to delete div
    ltc = document.querySelector(".learn-to-code");
    let obj = document.createElement("div");
    supreme.insertBefore(obj, supreme.children[4]);
    obj.setAttribute('class', 'competitive-programming heads all');
    let a = document.createElement("a");
    obj.appendChild(a);
    a.setAttribute('href', "./cp.html");
    a.innerHTML = "Competitive Programming";
    count3--;
    arra.pop();
    paused = true;
}

function blue() {
    //need to delete div
    paused = false;
    ltc = document.querySelector(".learn-to-code");
    supreme.removeChild(ltc);
    count4++;
    arra.push("Learn to Code");
    paused = true;
}

function blueback() {
    //need to delete div
    paused = false;
    ca = document.querySelector(".coding-aspects");
    let obj = document.createElement("div");
    supreme.insertBefore(obj, supreme.children[3]);
    obj.setAttribute('class', 'learn-to-code heads all');
    let a = document.createElement("a");
    obj.appendChild(a);
    a.setAttribute('href', "./learntocode.html");
    a.innerHTML = "Learn to Code";
    count4--;
    arra.pop();
    paused = true;
}

function black() {
    //need to delete div
    paused = false;
    ca = document.querySelector(".coding-aspects");
    supreme.removeChild(ca);
    count5++;
    arra.push("Coding Fields");
    paused = true;
}

function blackback() {
    //need to delete div
    paused = false;
    wic = document.querySelector(".what-is-coding");
    let obj = document.createElement("div");
    supreme.insertBefore(obj, supreme.children[2]);
    obj.setAttribute('class', 'coding-aspects heads all');
    let a = document.createElement("a");
    obj.appendChild(a);
    a.setAttribute('href', "./Career.html");
    a.innerHTML = "Coding Jobs";
    count5--;
    arra.pop();
    paused = true;
}

function flow() {
    //need to delete div
    paused = false;
    wic = document.querySelector(".what-is-coding");
    supreme.removeChild(wic);
    count6++;
    arra.push("What is Coding?")
    paused = true;
}

function flowback() {
    //need to delete div
    paused = false;
    lang = document.querySelector(".languages");
    let obj = document.createElement("div");
    supreme.insertBefore(obj, supreme.children[1]);
    obj.setAttribute('class', 'what-is-coding heads all');
    let a = document.createElement("a");
    obj.appendChild(a);
    a.setAttribute('href', "./whatiscoding.html");
    a.innerHTML = "Where to Code?";
    count6--;
    arra.pop();
    paused = true;
}

function grow() {
    //need to delete div
    paused = false;
    lang = document.querySelector(".languages");
    supreme.removeChild(lang);
    count7++;
    arra.push("Languages");
    paused = true;
}

function growback() {
    //need to delete div
    paused = false;
    let obj = document.createElement("div");
    supreme.prepend(obj);
    obj.setAttribute('class', 'languages heads all');
    let a = document.createElement("a");
    obj.appendChild(a);
    a.setAttribute('href', "./languages.html");
    a.innerHTML = "Languages";
    count7--;
    arra.pop();
    paused = true;
}


let widths = [1350, 1200, 1050, 900, 750, 600];

function resizeFn() {
    var count = src.childElementCount;

    if (window.innerWidth < widths[0] && count == 0) {
        red();
    }
    else if (window.innerWidth > widths[0] && count == 1) {
        green();
    }
    else if(window.innerWidth < widths[0] && count2 == 0) {
        orange();
    }
    else if(window.innerWidth > widths[0] && count2 == 1) {
        orangeback();
    }
    else if(window.innerWidth < widths[1] && count3 == 0) {
        yellow();
    }
    else if(window.innerWidth > widths[1] && count3 == 1) {
        yellowback();
    }
    else if(window.innerWidth < widths[2] && count4 == 0) {
        blue();
    }
    else if(window.innerWidth > widths[2] && count4 == 1) {
        blueback();
    }
    else if(window.innerWidth < widths[3] && count5 == 0) {
        black();
    }
    else if(window.innerWidth > widths[3] && count5 == 1) {
        blackback();
    }
    else if(window.innerWidth < widths[4] && count6 == 0) {
        flow();
    }
    else if(window.innerWidth > widths[4] && count6 == 1) {
        flowback();
    }
    else if(window.innerWidth < widths[5] && count7 == 0) {
        grow();
    }
    else if(window.innerWidth > widths[5] && count7 == 1) {
        growback();
    }

}

let lucky = 0;

function moose() {
    if(lucky == 0) {
        for(let i = 0; i < arra.length; i++) {
            let object = document.createElement("div");
            container.insertBefore(object, container.children[1]);
            object.innerHTML = arra[i];
            object.setAttribute("class","fun");
        }
        lucky++;
    }
    else{
        for(let i = 0; i < arra.length; i++) {
            container.removeChild(container.children[1])
        }
        lucky = 0;
    }

}

window.onresize = resizeFn;
resizeFn();