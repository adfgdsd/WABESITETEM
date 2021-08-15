

let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");

// one.classList.add('active')
// one.addEventListener("click",()=>{
//     one.classList.add('active')
//     two.classList.remove('active')
//     three.classList.remove('active')
//     four.classList.remove('active')
//     one.style.color="red"
// })
// two.addEventListener("click",()=>{
//     one.classList.remove('active')
//     two.classList.add('active')
//     three.classList.remove('active')
//     four.classList.remove('active')

// })

// three.addEventListener("click",()=>{
//     one.classList.remove('active')
//     two.classList.remove('active')
//     three.classList.add('active')
//     four.classList.remove('active')
// })

// four.addEventListener("click",()=>{
//     one.classList.remove('active')
//     two.classList.remove('active')
//     three.classList.remove('active')
//     four.classList.add('active')
// })

let about_me = document.querySelector(".about_me");
let skill_my = document.querySelector(".skill_my");
let experence = document.querySelector(".experence");

let about_me_sec=document.querySelector(".about_me_sec");
let skisll_sec =document.querySelector(".skisll_sec");
let exprence_sec =document.querySelector(".exprence_sec");
about_me.classList.add('bactiv')

about_me.addEventListener("click",()=>{
    about_me.classList.add("bactiv")
    skill_my.classList.remove("bactiv")
    experence.classList.remove("bactiv")

    skisll_sec.style.display="none"
    about_me_sec.style.display="block"
    exprence_sec.style.display="none"
})
skill_my.addEventListener("click",()=>{
    about_me.classList.remove("bactiv")
    skill_my.classList.add("bactiv")
    experence.classList.remove("bactiv")

    about_me_sec.style.display="none"
    skisll_sec.style.display="block"
    exprence_sec.style.display="none"
})
experence.addEventListener("click",()=>{
    about_me.classList.remove("bactiv")
    skill_my.classList.remove("bactiv")
    experence.classList.add("bactiv")

    about_me_sec.style.display="none"
    skisll_sec.style.display="none"
    exprence_sec.style.display="block"
})
