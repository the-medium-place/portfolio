// LISTEN FOR CLICK TO OPEN SIDE NAV
let menuState = false;
$("body").on('click','.menu-btn', (e)=>{
    console.log("clicked")

    if (menuState===false){
        $(".menu-open").hide(600)
        $(".side-nav").css("left","0")
        menuState = true;
        console.log(menuState)
    } else {
        $(".menu-open").show(600)
        $(".side-nav").css("left","-20vw")
        menuState = false;
        console.log(menuState)
    }
})