// INITIALIZE LIST OF PROJECTS AND POPULATE PORTFOLIO SECTION
let inProgress =
    [
        {
            "id": "audioTest",
            "github": "https://github.com/the-medium-place/audio-test",
            "deployed": "https://zgstowell-audiology.herokuapp.com/",
            "description": "This application will be a tool for audiologists and the parents of hearing-impaired children. It will allow a user to enter information provided by the audiologist and subsequently record and playback audio that has been modified to match their child's hearing impairment, or their hearing while using aid devices.",
            "title": "Audio Test",
            "tagline": "",
            "screenshot": "https://i.imgur.com/sNkzfnw.png",
            "technologies": "Node.js, Express, React JS, Sequelize, HTML5, CSS3, Bootstrap CSS"
        },

        {
            "id": "phpcms",
            "github": "https://github.com/the-medium-place/PHP_cms_project",
            "deployed": null,
            "description": "This application is serving as a vehicle for me to learn PHP.  The front end came mostly finished in a template, but all the back-end PHP is written in conjunction with the uDemy tutorial. It will allow for login as a user and as an admin, with a full dashboard of control for all admin users. ",
            "title": "PHP CMS",
            "tagline": "",
            "screenshot": "https://i.imgur.com/NIPx948.png",
            "technologies": "HTML5, CSS3, PHP, MySQL, Bootstrap CSS"
        }
    ]
let projects =
    [
        {
            "id": "markit",
            "github": "https://github.com/dianastebbins/mark-it-react",
            "deployed": "https://awesome-mark-it.herokuapp.com/",
            "description": "Search for local markets, contact market vendors, buy or sell your wares at your favorite local farmer's market! Mark-It transcends the age of COVID and brings farm-fresh produce into the age of social-distancing!",
            "title": "Mark-It",
            "tagline": "Farm-to-market-to-internet-database...",
            "screenshot": "https://i.imgur.com/rcTeF3S.jpg",
            "technologies": "Node.js, Express, React JS, Sequelize, HTML5, CSS3, Bulma CSS"
        },

        {
            "id": "togather",
            "github": "https://github.com/the-medium-place/group-planner",
            "deployed": "http://awesome-group-planner.herokuapp.com/",
            "description": "This application allows multiple users to collaborate on multiple events. It utilizes a Sequelize database to store all relevant data and allows the user to view, edit, and delete user information (full CRUD functionality!). Multiple users can collaborate on multiple projects or events, while keeping track of event specific tasks and expenditures. This was a one-week collaborative project with a team of four, for which I acted as Project Manager",
            "title": "To-Gather",
            "tagline": "Getting people together, Helping them ToGather...",
            "screenshot": "https://i.imgur.com/tj8sCI5.jpg",
            "technologies": "HTML5, CSS3, Node.js, Sequelize, Handlebars JS, Express, Foundation CSS"
        },
        {
            "id": "googlebooks",
            "github": "https://github.com/the-medium-place/google-books-search",
            "deployed": "https://awesome-google-books-react.herokuapp.com/",
            "description": "This Full-Stack (MERN) application uses React JS and Mongoose, allowing a user to search the Google Books API, and save any results to a list that is displayed on the 'Saved' page. The user can also delete books from this list giving the app CR-D functionality.",
            "title": "Google Books Search",
            "tagline": "Simple but elegant book search...",
            "screenshot": "https://i.imgur.com/4ZhnYG9.png",
            "technologies": "Mongoose DB, Express, React JS, Node.js, HTML5, CSS3, Bootstrap/React-Bootstrap CSS Framework"
        },
        {
            "id": "socialdistance",
            "github": "https://github.com/the-medium-place/covidDistractions",
            "deployed": " https://the-medium-place.github.io/covidDistractions/",
            "description": "This application is designed for a user who is looking for the option to escape a depressing new cycle (specifically the COVID-19 pandemic). While one path (social) leads to news feeds with all the anxiety of the outside world, the other path (distance) takes the user away with movies, games and a relaxing breath time. This was a one-week collaborative project in a team of four.",
            "title": "Social // Distance",
            "tagline": "There's good news AND bad news...",
            "screenshot": "https://i.imgur.com/m4b4xIC.jpg",
            "technologies": "HTML5, CSS3, JQuery, Skeleton Framework"
        }
    ]

const init = () =>{
    //HIDE THE PORTFOLIO INFO DIV
    $("#port-click-info").hide();

    //POPULATE PROJECTS FIELD WITH SCREENSHOTS
    projects.forEach(project => {
        const newImg = $("<img>", {
            src: project["screenshot"],
            alt: project["title"],
            class: "mx-1 hover-me img-thumbnail w-25",
            id: project["id"],
            "data-status": 'complete'
        })
        $("#screenshot-div").append(newImg)
    })
    
    // POPULATE IN PROGRESS FIELD WITH SCREENSHOTS
    inProgress.forEach(project => {
        const newImg = $("<img>", {
            src: project["screenshot"],
            alt: project["title"],
            class: "mx-1 hover-me img-thumbnail w-25",
            id: project["id"],
            "data-status": 'in-progress'
        })
        $("#wip-screenshot-div").append(newImg)
    })
}
// RUN THE INIT FUNTION
init();


$("body").click(function (event) {
    // DIV WITH PORTFOLIO LOGO TEXT
    const portLogoDiv = $("#logo-box");
    // DIV WITH PORTFOLIO PROJECT INFO
    const portInfoDiv = $("#port-click-info")
    // CLASSLIST OF CLICKED ELEMENT
    const clickClass = $(event.target).attr('class');
    // IF LOGO DIV IS HIDDEN AND CLICK IS NOT ON
    // PORTFOLIO IMAGE OR INFO BOX, ADJUST VISIBILITY
    if (portLogoDiv.is(':hidden') && (!clickClass || (!clickClass.includes('hover-me') && !clickClass.includes('info-box')))) {
        setVisibility()
        console.log('conditions met to make logo visible and info hidden')
    } else {
        console.log('conditions NOT MET')
    }

    // SET INFO BOX TO HIDDEN, SHOW LOGO BOX
    function setVisibility() {
        portInfoDiv.hide('fast');
        portLogoDiv.show('slow');
        console.log('SETTING VISIBILITY')
    }

})


// CLICKING ON PORTFOLIO / IN PROGRESS SCREENSHOT IMG
$("body").on("click", ".hover-me", function () {
    console.log('clicked a hover-me image')
    console.log($(this).data().status)
    // HIDE THE PORTOLIO LOGO DIV
    $("#logo-box").is(':visible') ? $("#logo-box").hide() : null;
    $("#port-click-info").is(':visible') ? $("#port-click-info").hide() : null;
 
    const clickID = $(this).attr("id");
    const clickSRC = $(this).attr("src");
    console.log('clicked info: ', clickID, clickSRC)

    const github = $('#github');
    const deployed = $("#deployed");
    const desc = $("#project-desc");//
    const title = $(".proj-title")//
    const technologies = $("#project-techs")

    $("#click-img").addClass("port-info-img").attr("src", clickSRC);

    // SET VALUES ON PROJECT INFO DIV
    if ($(this).data().status === 'complete') {
        $("#deployed-btn").prop('disabled') === true ? $("#deployed-btn").prop('disabled', false) : null;
        projects.forEach(project => {
            if (project.id === clickID) {
                console.log(project);
                github.attr("href", project.github);
                deployed.attr("href", project.deployed);
                desc.text(project.description);
                title.text(project.title);
                technologies.text(project.technologies);
            }
        })
    } else if ($(this).data().status === 'in-progress') {
        $("#deployed-btn").prop('disabled') === true ? $("#deployed-btn").prop('disabled', false) : null;
        inProgress.forEach(project => {
            if (project.id === clickID) {
                console.log(project);
                github.attr("href", project.github);
                project.deployed ? deployed.attr("href", project.deployed) : $("#deployed-btn").prop('disabled', true);
                desc.text(project.description);
                title.text(project.title);
                technologies.text(project.technologies);
            }
        })
    }
    // SHOWING PROJECT INFO DIV
    $("#port-click-info").show('slow');
})

// =====================
// CONTACT ME FORM SETUP
// =====================
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
        $("#sender-name").val(''),
            $("#sender-email").val(''),
            $("#sender-message").val('')
        console.log(response)
        // window.location.reload()
    })

    //     setTimeout(function() {
    //         window.location.reload();
    //    },0);
})
