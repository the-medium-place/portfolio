// console.log('linked')

(function () {
    $("#flashlight").hide();
    $("#body-mask").hide();
    $("body").mousemove(handleMouseMove)
    function handleMouseMove(event) {
        if(event.target.classList.value.split(' ').includes('hover-me')){
            $("#body-mask")
                .css('--clip-size', '800px')
        } else {
            $("#body-mask")
            .css('--clip-size', '300px')
        }

        $("#body-mask")
            .css('--clip-position', `${event.clientX}px ${event.clientY}px`)
            .show();


        // $("#flashlight")
        //     .css('--mouse-X', `${event.clientX - 150}px`)
        //     .css('--mouse-Y', `${event.clientY - 150}px`)
        //     .show();
        // $("#body-mask").append(newDiv);

        console.log('x: ', event.clientX, 'y: ', event.clientY);
    }

    let lightSizeTrigger = false;
    $("body").click((e) => {
        lightSizeTrigger = !lightSizeTrigger;

        if (lightSizeTrigger) {

            $("#body-mask")
                .css('--clip-size', '800px')
                // .css('transition', '');
            // $("#flashlight")
            //     .css('height', '800px')
            //     .css('width', '800px')
            //     .css('--mouse-X', `${e.clientX - 400}px`)
            //     .css('--mouse-Y', `${e.clientY - 400}px`)
        } else {
            $("#body-mask").css('--clip-size', '300px')
            // $("#flashlight")
            //     .css('height', '300px')
            //     .css('width', '300px')
            //     .css('--mouse-X', `${e.clientX - 150}px`)
            //     .css('--mouse-Y', `${e.clientY - 150}px`)
        }
        // $("#body-mask").css('transition', '');

    })

    // $("body").dblclick((e)=>{
    //     $("#body-mask").css('--clip-size', '300px')
    //     $("#flashlight")
    //     .css('height','300px')
    //     .css('width','300px')
    //     .css('--mouse-X', `${e.clientX - 150}px`)
    //     .css('--mouse-Y', `${e.clientY - 150}px`)

    // })


    // $("#body-mask").mousemove((event) => {
    //     const newDiv = $("<div>", {
    //         id: 'flashlight'
    //     })
    //     newDiv.remove();
    //     newDiv.css('--mouse-X', `${event.clientX - 150}px`).css('--mouse-Y', `${event.clientY - 150}px`).show();
    //     $("#body-mask").append(newDiv);


    // })
})();

