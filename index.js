// call popup

function navhide1(){
    document.getElementById("navh").style.display = "block";
}

function navhide2(){
    document.getElementById("navh").style.display = "none";
}

// form popup

function formShow(){
    document.getElementById("frm").style.display="block"
}

function close(){
    document.getElementById("frm").style.display="none"
}



// section

function pune(){
    
    document.getElementById("city").style.backgroundImage="url('./Assets/pune.jpg')"
}
function mumbai(){
    
    document.getElementById("city").style.backgroundImage="url('./Assets/mumbai.jpg')"
}
function Bangalore(){
    document.getElementById("city").style.backgroundImage="url('./Assets/Bangalore.jpg')"

}




// slider section

    function showcity(){
        console.log("working")
        let c1 = document.querySelector(".slide_c1");
        let c2 = document.querySelector(".slide_c2");
        let c3 = document.querySelector(".slide_c3");
        c1.style.backgroundImage = "url(../Assets/pune1.jpg)"
        c2.style.backgroundImage = "url(../Assets/pune2.jpg)"
        c3.style.backgroundImage = "url(../Assets/pune3.webp)"
    }

    function showpune(){
    let c1 = document.querySelector(".slide_c1");
    let c2 = document.querySelector(".slide_c2");
    let c3 = document.querySelector(".slide_c3");
    c1.style.backgroundImage = "url(../Assets/pune1.jpg)"
    c2.style.backgroundImage = "url(../Assets/pune2.jpg)"
    c3.style.backgroundImage = "url(../Assets/pune3.webp)"
    let p1 = document.querySelector(".propn");
    p1.textContent="hello"
    }
 
    function showmumbai(){
        let c1 = document.querySelector(".slide_c1");
        let c2 = document.querySelector(".slide_c2");
        let c3 = document.querySelector(".slide_c3");
        c1.style.backgroundImage = "url(../Assets/mumbai1.webp)"
        c2.style.backgroundImage = "url(../Assets/mumbai2.jpg)"
        c3.style.backgroundImage = "url(../Assets/mumbai3.webp)"
        let p1 = document.querySelector(".propn");
        p1.textContent="Good bye"
    }

    function showBangalore(){
    let c1 = document.querySelector(".slide_c1");
    let c2 = document.querySelector(".slide_c2");
    let c3 = document.querySelector(".slide_c3");
    c1.style.backgroundImage = "url(../Assets/bangalore1.webp)"
    c2.style.backgroundImage = "url(../Assets/bangalore2.jpg)"
    c3.style.backgroundImage = "url(../Assets/bangalore3.jpg)"
    }
    
    
    
    
    function showc1(){
        console.log("works1");
        let c1 = document.querySelector(".slide_c1");
        let c2 = document.querySelector(".slide_c2");
        let c3 = document.querySelector(".slide_c3");
        c1.style.width="42%";
        c1.style.filter="brightness(100%)";
        c2.style.width="29%";
        c2.style.filter="brightness(40%)";
        c3.style.width="29%";
        c3.style.filter="brightness(40%)";
    
    }
    function showc2(){
        console.log("works2");
        let c1 = document.querySelector(".slide_c1");
        let c2 = document.querySelector(".slide_c2");
        let c3 = document.querySelector(".slide_c3");
        c2.style.width="42%";
        c2.style.filter="brightness(100%)";
        c1.style.width="29%";
        c1.style.filter="brightness(40%)";
        c3.style.width="29%";
        c3.style.filter="brightness(40%)";
    }
    function showc3(){
        console.log("works3");
        let c1 = document.querySelector(".slide_c1");
        let c2 = document.querySelector(".slide_c2");
        let c3 = document.querySelector(".slide_c3");
        c3.style.width="42%";
        c3.style.filter="brightness(100%)";
        c2.style.width="29%";
        c2.style.filter="brightness(40%)";
        c1.style.width="29%";
        c1.style.filter="brightness(40%)";
    }
    



// navbar hide

// window.onscroll = function()
// {
//     myFunction();
// }

// function myFunction(){
//     var navbar = document.getElementById("pnav");
//     var picky = navbar.offsetTop;

//     if(window.pageYOffset >= picky){
//         console.log("working")
//         navbar.style.display = "none";
//     }
//     else{
//         navbar.style.display = "block";
//     }
// }

