const navList = document.querySelector(".navList")
const hamburger = document.querySelector(".hamburger")

hamburger.addEventListener('click', () =>{        // the word function is removed and replaced with =>     es6
    navList.classList.toggle('active');
    console.log('clicked');
});

// hamburger.addEventListener("click", function(){
//     navList.classList.toggle("active");
//     console.log('clicked2')
// })