const openMenu = () => {
    $(".menu-open").hide(600)
    $(".side-nav-mask").css("right", "0")
    $("body").css('overflow-y', 'hidden')
    $(".side-nav").css("left", "0")
    menuState = true;
    console.log(menuState)
}

const closeMenu = () => {
    $(".menu-open").show(600)
    $(".side-nav-mask").css("right", '-100vw')
    $("body").css('overflow-y', '')
    $(".side-nav").css("left", "-20vw")
    menuState = false;
    console.log(menuState)
}

$("form").hide();
// LISTEN FOR CLICK TO OPEN SIDE NAV
let menuState = false;
$("body").on('click', (e) => {

    if (e.target.classList.value.split(' ').includes('menu-btn')) {
        if (menuState === false) {
            openMenu();
        } else {
            closeMenu();
        }
    } else if (!e.target.classList.value.split(' ').includes('side-nav')) {
        if (menuState === true) {
            closeMenu();
        }
    }

})

// CLOSE MENU WHEN CLICKING A LINK
$(".nav-link").on('click', (e) => {
    closeMenu();
})

// LISTEN FOR SCROLL 
$(window).on("scroll", (e) => {
    console.log("Scroll Y position: ",window.scrollY)
})

let formViewState = false;
$(".open-form-btn").on('click', (e) => {
    console.log('form clicked')
    if (formViewState === false) {
        $("form").show(300);
        formViewState = true;
    }
    else {
        $("form").hide(300)
        formViewState = false;
    }
})

// LISTEN FOR CONTACT-FORM SUBMIT
$("#contactme-form").on("submit", function (event) {
    event.preventDefault();
    // console.log(username, userEmail, userMessage)
    const messageObj = {
        username: $("#sender-name").val().trim(),
        userEmail: $("#sender-email").val().trim(),
        userMessage: $("#sender-message").val().trim()
    }
    console.log(messageObj)
    $.ajax({
        url: "/contactme",
        method: "POST",
        data: messageObj
    }).then(response => {
        console.log("it's been sent!");
        // $("#sender-name").val(''),
        //     $("#sender-email").val(''),
        //     $("#sender-message").val('')
        console.log(response)
        // window.location.reload()
    })
        .catch(err => console.log(err))
})


if (window.location.pathname === '/portfolio') {
    console.log('on the portfolio');
    $.get({
        url: '/getprojects',
        method: 'GET',
    }).then(res => {

        res.projects.forEach(project => {
            const projArr = [project.github, project.screenshot, project.tagline, project.technologies]
            // CREATE PROJECT CARD
            const newCard = $("<div>", {
                class: 'port-card'
            })

            // CARD IMAGE
            const cardImg = $("<img>", {
                src: project.screenshot,
                alt: project.title,
                class: 'port-card-img'
            })

            // PROJECT TITLE
            const cardTitle = $("<h3>", {
                class: 'card-title',
                text: project.title
            })

            // PROJECT DESCRIPTION
            const cardDescDiv = $("<div>", {
                class: 'card-desc-wrapper'
            })
            const cardDesc = $("<p>", {
                class: 'card-desc',
                text: project.description
            })
            cardDescDiv.append(cardDesc);
            console.log(project.description)

            const newUl = $("<ul>")
            projArr.forEach(key => {
                const listItem = $("<li>", { text: key })
                newUl.append(listItem)
            })

            // BUILDING THE CARD
            newCard
                .append(cardImg)
                .append(cardTitle)
                .append(cardDescDiv)
                // .append(newUl);

            // PUTTING THE CARD ON THE PAGE
            $(".card-wrapper").append(newCard)
        })

        res.wip.forEach(project => {
            const projArr = [project.description, project.github, project.screenshot, project.technologies]

            const newCard = $("<div>", {
                class: 'port-card'
            })

            const cardImg = $("<img>", {
                src: project.screenshot,
                alt: project.title,
                class: 'port-card-img'
            })
            const cardTitle = $("<h3>", {
                text: project.title
            })

            const newUl = $("<ul>")
            projArr.forEach(key => {
                const listItem = $("<li>", { text: key })
                newUl.append(listItem)
            })

            newCard.append(cardImg).append(cardTitle).append(newUl);
            $(".wip-wrapper").append(newCard);
        })

        console.log(res)
    }).catch(err => console.log(err))
}

