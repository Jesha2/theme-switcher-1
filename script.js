console.log("JS connected");
let count=0;
// when +clicked,increment. First step:
//1.find target:plus button2.buildthe Cb,3. combine the evetlistener wtih CB
let plusBtn = document.querySelector("#plusBtn");
let counter = document.querySelector("h1");

let minusBtn = document.querySelector("#minusBtn");

let resetBtn = document.querySelector("#resetBtn");


let increment = ()=>{
    count++;
    //console.log(count);
    counter.textContent = count;
}
let decrement = ()=>{
    count--;
    //console.log(count);
    counter.innerText = count;
}

let reset =()=>{
    count=0;
    //counter.textContent=0;
    counter.innerHTML= "<mark>" + count + "</mark>";
}

plusBtn.addEventListener("click",increment);

minusBtn.addEventListener("click", decrement);

resetBtn.addEventListener("click",reset);
/**************** */
//let facebookBtn = document.querySelector('#fb');

// let changeFb=()=>{
//     // grab the element
//     let buttons = document.querySelector(".themeButton");
//     let main = document.querySelector("main");
//     let body = document.querySelector("body");

//     //update  element css
//     main.className  = "facebook";
//     body.className = "facebook";
//     buttons[0].className= "facebook"

// }
// facebookBtn.addEventListener("click",changeFb); instead add onclick for each button

function selectTheme(theme){
    document.querySelector("main").className = theme;
    document.querySelector("body").className = theme;
    let buttons = document.querySelectorAll("button");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className =theme;
    }

}




