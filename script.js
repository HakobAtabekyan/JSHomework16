
let sliderdata = [
    {
        image: "./images/1.jpeg",
        title: "Ո՞ր երկիրն է ամենից նոսր բնակչության թիվ ունեցողը:",
        answer1: "Իսլանդիա",
        answer2: "Ավստրալիա",
        answer3true: "Սերբիա",
        answer4: "Մոնղոլիա"
    },
    {
        image: "./images/2.jpeg",
        title: "Ո՞ր երկիրը ելք չունի դեպի Միջերկրական ծով:",
        answer1: "Թուրքիա",
        answer2: "Հունաստան",
        answer3: "Իտալիա",
        answer4true: "Պորտուգալիա"
    },
    {
        image: "./images/3.jpeg",
        title: "Ո՞ր լեզվով են աշխարհում ամենաշատ թվով մարդիկ խոսում:",
        answer1: "Անգլերեն",
        answer2: "Իսպաներեն",
        answer3: "Հինդի",
        answer4true: "Չինարեն"
    },
    {
        image: "./images/4.jpeg",
        title: "Ո՞ր երկրի մայրաքաղաքն է Դամասկոսը:",
        answer1: "Իրան",
        answer2true: "Սիրիա",
        answer3: "Եմեն",
        answer4: "Իրաք"
    },
    {
        image: "./images/5.jpeg",
        title: "Նշված երկրներից որո՞ւմ բացարձակ միապետություն չէ:",
        answer1: "Միացյալ արաբական Էմիրություններ",
        answer2: "Օման",
        answer3: "Վատիկան",
        answer4true: "Բութան"
    },
    {
        image: "./images/6.jpeg",
        title: "Որտե՞ղ է գտնվում Մատերխորն լեռը:",
        answer1true: "Իտալիա",
        answer2: "Ավստրիա",
        answer3: "Ֆրանսիա",
        answer4: "Շվեյցարիա"
    },
    {
        image: "./images/7.jpeg",
        title: "Ո՞րն է Աֆրիկայի ամենամեծ երկիրը:",
        answer1true: "Ալժիր",
        answer2: "Եգիպտոս",
        answer3: "Հարավաֆրիկյան Հանրապետություն",
        answer4: "Կոնգո"
    },
    {
        image: "./images/8.jpeg",
        title: "Թվարկվածներից ո՞րը եվրոպական մայրաքաղաք չէ:",
        answer1: "Վարշավա",
        answer2true: "Բարսելոնա",
        answer3: "Բեռլին",
        answer4: "Վիենա"
    },
    {
        image: "./images/9.jpeg",
        title: "ԱՄՆ-ի ո՞ր նահանգ պետք է գնաք, որպեսզի տեսնեք Նիագարայի ջրվեժը:",
        answer1: "Այդահո",
        answer2: "Մոնտանա",
        answer3true: "Նյու Յորք",
        answer4: "Մեն"
    },
    {
        image: "./images/9.jpeg",
        title: "Ո՞ր նեղուցով են նավերը հասնում Սև ծովից Մարմարա ծով.",
        answer1true: "Բոսֆոր",
        answer2: "Ջիբրալթար",
        answer3: "Լա Մանշ",
        answer4: "Պանամա"
    }
]
let slideIndex = 1;
let points = 0;
let answered = 0;
let index = 0;
let boxcollection = document.querySelector(".slider");
let tabs = document.querySelector(".tabs");
for (const iterator of sliderdata) {
    index++;
    let box = document.createElement("div");
    box.id = `${index}`;
    box.className = "item";
    let image = document.createElement("img");
    image.src = iterator.image;
    image.alt = "image";
    box.append(image)
    // box.style.backgroundImage = `url(${iterator.image})`;

    let imgtitle = document.createElement("h2");
    imgtitle.innerHTML = iterator.title;
    box.append(imgtitle);

    for (const key in iterator) {

        if (key.includes("answer")) {
            let answerbox = document.createElement("div");
            answerbox.classList.add("answer");
            answerbox.classList.add("activ");

            let answertext = document.createElement("h3");
            answertext.innerHTML = iterator[key];

            answerbox.append(answertext);
            let statusimg = document.createElement("img");
            if (key.includes("true")) {
                statusimg.src = "./images/true.png";
                answerbox.setAttribute("answer", "true")
            } else {
                statusimg.src = "./images/false.png";
                answerbox.setAttribute("answer", "false")
            }
            statusimg.alt = "image";
            statusimg.classList.add("statusnotactiv");
            answerbox.append(statusimg)
            answerbox.classList.contains("activ")

            box.append(answerbox)
            answerbox.addEventListener("click", getanswer)

        }


    }
    boxcollection.append(box);

    let tab = document.createElement("div");
    tab.className = "tab";
    tab.id = `${100 + index}`;
    tab.innerHTML = `${index}`;
    tab.classList.add(`tab${index}`)
    tab.addEventListener("click", (e) => {
        slideIndex = + e.target.innerHTML;
        showSlides(slideIndex);

    })
    tabs.append(tab);
}

function getanswer() {
    if (this.classList.contains("activ")) {
        let parent = this.parentNode;
        let children = parent.getElementsByClassName("answer");
        for (const it of children) {
            let answer = it.getAttribute("answer");
            it.classList.remove("activ");
            if (it == this && answer == "true") {
                it.classList.add("true");
                points++;
                answered++;
                let tab = document.querySelector(`.tab${parent.id}`)
                tab.style.color = "green"
                tab.style.borderColor = "green"
            } else if (it == this && answer == "false") {
                it.classList.add("false");
                let tab = document.querySelector(`.tab${parent.id}`)
                tab.style.color = "red"
                tab.style.borderColor = "red"
                answered++;
            } else if (it != this && answer == "true") {
                it.classList.add("showtrue");
                it.classList.add("disabled");
            } else {
                it.classList.add("disabled");
            }
        }
        if (answered == sliderdata.length) {
            setTimeout(endtest, 3000,timerid);
        }

        setTimeout(nextSlide, 1000);
   
    }
}



showSlides(slideIndex);
function nextSlide() {
    showSlides(slideIndex += 1);
}


function previousSlide() {
    showSlides(slideIndex -= 1);
}


function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {

    let slides = document.getElementsByClassName("item");


    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let slide of slides) {
        slide.style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
    let activtab = document.querySelector(".activtab");
    if (activtab) {
        activtab.classList.remove("activtab");
    }

    let tab = document.querySelector(`.tab${slideIndex}`);
    tab.classList.add("activtab")

}
let time = 0;
let timebar = document.querySelector(".timestatus");
let timebar1 = document.querySelector(".timebarbox h4");
let timerid = "";
function starttest() {
    time = 0;
    let startpage = document.querySelector(".startpage");
    startpage.style.display = "none";
    let header = document.querySelector("header");
    header.style.display = "block";
    let slider = document.querySelector(".slider");
    slider.style.display = "block";
    timerid = setInterval(settime, 1000);
    setTimeout(endtest, 60002, timerid);
}

function endtest(timerid) {  
    clearInterval(timerid)
    let endpage = document.querySelector(".endpage");
    endpage.style.display = "block";
    let endpagetext = document.querySelector(".endpage h1");
    endpagetext.innerHTML = `${sliderdata.length} հարցից պատասխանել եք ${answered}-ին, որից ճիշտ՝ ${points}: <br> Շնորհակալություն մասնակցության համար`
    let header = document.querySelector("header");
    header.style.display = "none";
    let slider = document.querySelector(".slider");
    slider.style.display = "none";

}

function settime() {
    time++;
    let widthvalue = 100 - Math.floor(time / 60 * 100);   
    timebar.style.width = `${widthvalue}%`;
    timebar1.innerHTML = `${60 - time}`;
    if (widthvalue > 50) {
        timebar.style.backgroundColor = "green"
        timebar1.style.color = "green"
    } else if (widthvalue > 30) {
        timebar.style.backgroundColor = "yellow"
        timebar1.style.color = "yellow"
    } else {
        timebar.style.backgroundColor = "red"
        timebar1.style.color = "red"
    }



}

let startbutton = document.querySelector(".startpage button");
startbutton.addEventListener("click", ()=>{
    starttest();
})


