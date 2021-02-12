// console.log('linked')

(function () {
    const root = document.documentElement
    $("body").mousemove(handleMouseMove)
    function handleMouseMove(event) {
        var eventDoc, doc, body;
        event = event || window.event; // IE-ism

        $("#body-mask").css('--clip-position', `${event.clientX}px ${event.clientY}px`)


        
        console.log('x: ', event.clientX, 'y: ', event.clientY);
        }
})();