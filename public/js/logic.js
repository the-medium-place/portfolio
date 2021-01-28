// INITIALIZE LIST OF PROJECTS AND POPULATE PORTFOLIO SECTION
let projects;
$.getJSON('http://localhost:8080/api/projects')
.then(data => {
    $("#port-click-info").hide();
    projects = data;
    projects.forEach(project => {
        const newImg = $("<img>",{
            src:project["screenshot"],
            alt:project["title"],
            class:"mx-1 hover-me img-thumbnail w-25",
            id: project["id"],
            "data-status":'complete'
        })
        $("#screenshot-div").append(newImg)
    })
})
let inProgress;
$.getJSON('http://localhost:8080/api/inprogress')
.then(data => {
    $("#port-click-info").hide();
    inProgress = data;
    console.log(inProgress)
    inProgress.forEach(project => {
        const newImg = $("<img>",{
            src:project["screenshot"],
            alt:project["title"],
            class:"mx-1 hover-me img-thumbnail w-25",
            id: project["id"],
            "data-status":'in-progress'
        })
        $("#wip-screenshot-div").append(newImg)
    })
})

// const projects = [{
//     id: "socialdistance",
//     github: "https://github.com/bbelka/covidDistractions",
//     deployed: "https://bbelka.github.io/covidDistractions/",
//     description: "This application is designed for a user who is looking for the option to escape a depressing new cycle (specifically the COVID-19 pandemic). While one path (social) leads to news feeds with all the anxiety of the outside world, the other path (distance) takes the user away with movies, games and a relaxing breath time. This was a one-week collaborative project in a team of four.",
//     title: "Social // Distance",
//     technologies: "HTML5, CSS3, JQuery, Skeleton Framework"
// },
// {
//     id: "weatherdashboard",
//     github: "https://github.com/the-medium-place/weather-dashboard",
//     deployed: "http://the-medium-place.github.io/weather-dashboard",
//     description: "An application allowing a user to search by city for current weather conditions and the 5-day forecast. This project utilizes JQuery AJAX calls on a simble BootStrap grid to populate the weather and map data.",
//     title: "Weather Dashboard",
//     technologies: "HTML5, CSS3, JQuery, Bootstrap"
// },
// {
//     id: "workdayscheduler",
//     github: "https://github.com/the-medium-place/work-day-scheduler",
//     deployed: "https://the-medium-place.github.io/work-day-scheduler/",
//     description: "This application utilizes local storage to save the user inputs in text fields which change color to follow the time of day (but only during work hours!)",
//     title: "Workday Scheduler",
//     technologies: "HTML5, CSS3"
// },
// {
//     id: "togather",
//     github: "https://github.com/the-medium-place/group-planner",
//     deployed: "http://awesome-group-planner.herokuapp.com/",
//     description: "This application allows multiple users to collaborate on multiple events. It utilizes a Sequelize database to store all relevant data and allows the user to view, edit, and delete user information (full CRUD functionality!). Multiple users can collaborate on multiple projects or events, while keeping track of event specific tasks and expenditures. This was a one-week collaborative project with a team of four, for which I acted as Project Manager",
//     title: "To-Gather",
//     technologies: "HTML5, CSS3, Node.js, Sequelize, Handlebars JS, Express"
// },
// {
//     id: "employeemanager",
//     github: "https://github.com/the-medium-place/employee-tracker",
//     deployed: "https://github.com/the-medium-place/employee-tracker",
//     description: "This is a CLI (Command Line Interface) program allowing a user to keep track of all types of employee information and display it in useful, easy-to-read ways. It was built using Node JS and MySQL, and I'm pretty proud of the layout and design I was able to put together for this Bootcamp assignment.",
//     title: "Employee Manager",
//     technologies: "JavaScript, Node.js, Inquirer NPM, Figlet NPM"
// },
// {
//     id: "codequiz",
//     github: "https://github.com/the-medium-place/code-quiz",
//     deployed: "https://the-medium-place.github.io/code-quiz/",
//     description: "The Ninja Turtles Quiz is retro-themed quiz game. When the start button is pressed the user is presented with a series of knowledge questions about the Teenage Mutant Ninja Turtles!",
//     title: "Ninja Turtles Quiz",
//     technologies: "HTML5, CSS3, JQuery, Bootstrap"
// },
// {
//     id: "readmegenerator",
//     github: "https://github.com/the-medium-place/README-generator",
//     deployed: "https://github.com/the-medium-place/README-generator",
//     description: "This is a CLI (Command Line Interface) program allowing a user to auto-generate a README markdown file for any project. The file includes 'license' and 'contributor' badges, as well as the user's GitHub profile information.  Node JS and JQuery are used to gather user info and generate the end file.",
//     title: "README Generator",
//     technologies: "JavaScript, JQuery, Node.js, Inquirer NPM"
// },
// {
//     id: "passwordgenerator",
//     github: "https://github.com/the-medium-place/random-password",
//     deployed: "https://the-medium-place.github.io/random-password/",
//     description: "This application generates a random password based on input from the user.",
//     title: "Random Password Generator",
//     technologies: "JavaScript, JQuery, Node.js, Inquirer NPM"
// },
// {
//     id: "burgerapp",
//     github: "https://github.com/the-medium-place/burger",
//     deployed: "https://kinda-good-burger.herokuapp.com/",
//     description: "Make a list of all the burger's you would want to eat! Then, with the click of a button you can place the burger on your list of 'Burger Conquests'. This app utilizes Handlebars JS for rendering and MySQL for the database. I appreciated how this assignment didn't pretend to be anything useful. It's just a burger list.",
//     title: "Burger Listing",
//     technologies: "HTML5, CSS3, Node.js, Express, MySQL"
// },
// {
//     id: "fitnessmonkey",
//     github: "https://github.com/the-medium-place/fitness-tracker",
//     deployed: "https://awesome-fitness-tracker.herokuapp.com/",
//     description: "This is a simple fitness tracker app that utilizes Node JS, Handlebars and Mongoose DB to allow a user to create workout regimens and then add/edit/delete the individual exercises within. My test data while building consistently focused, for some reason, on eating bananas. So, I called the app Fitness Monkey!",
//     title: "Fitness Monkey",
//     technologies: "HTML5, CSS3, Mongoose DB, Express, Handlebars JS, Node.js"
// },
// {
//     id: "googlebooks",
//     github: "https://github.com/the-medium-place/google-books-search",
//     deployed: "https://pacific-earth-75465.herokuapp.com/",
//     description: "This Full-Stack (MERN) application uses React JS and Mongoose, allowing a user to search the Google Books API, and save any results to a list that is displayed on the 'Saved' page. The user can also delete books from this list giving the app CR_D functionality.",
//     title: "Google Books Search",
//     technologies: "Mongoose DB, Express, React JS, Node.js, HTML5, CSS3"
// },
// {
//     id: "markit",
//     github: "https://github.com/dianastebbins/mark-it-react",
//     deployed: "https://awesome-mark-it.herokuapp.com/",
//     description: "This full-stack application provides a way for users to search for local farmer's markets as well as create a vendor profile which allows the user to list and sell products - creating a way for consumers to get their farmer's market shopping done at a safe 'social distance'.  Items created appear on the app's map function, and users can favorite a vendor, item or market and have it appear on their profile page. Created using Sequelize, Node JS, Express JS and React.",
//     title: "Mark-It",
//     technologies: "Node.js, Express, React JS, Sequelize, HTML5, CSS3"
// },
// {
//     id: "employeeOrganizer",
//     github: "https://github.com/the-medium-place/react-employee-directory",
//     deployed: "https://infinite-gorge-44449.herokuapp.com/",
//     description: "This application utilized the Random User API to create a table of fake employees. The front-end is built with ReactJS and allows the user to organize the resultant employees by Name or Location as well as to search the employees by any data with real-time results.",
//     title: "Employee Organizer",
//     technologies: "Node.js, Express, React JS, HTML5, CSS3"
// }];

$("body").click(function (event) {
    // DIV WITH PORTFOLIO LOGO TEXT
    const portLogoDiv = $("#logo-box");
    // DIV WITH PORTFOLIO PROJECT INFO
    const portInfoDiv = $("#port-click-info")
    // CLASSLIST OF CLICKED ELEMENT
    const clickClass = $(event.target).attr('class');
    // IF LOGO DIV IS HIDDEN AND CLICK IS NOT ON
    // PORTFOLIO IMAGE OR INFO BOX, ADJUST VISIBILITY
    if(portLogoDiv.is(':hidden') && (!clickClass || (!clickClass.includes('hover-me') && !clickClass.includes('info-box')))){
        setVisibility()
        console.log('conditions met to make logo visible and info hidden')
    } else {
        console.log('conditions NOT MET')
    }

    // SET INFO BOX TO HIDDEN, SHOW LOGO BOX
    function setVisibility(){
        portInfoDiv.hide('fast');
        portLogoDiv.show('slow');
        console.log('SETTING VISIBILITY')
    }
 
})

$("body").on("click",".hover-me", function () {
    console.log('clicked a hover-me image')
    console.log($(this).data().status)
    // HIDE THE PORTOLIO LOGO DIV
    $("#logo-box").is(':visible') ? $("#logo-box").hide() : null;
    $("#port-click-info").is(':visible') ? $("#port-click-info").hide() : null;

    // 
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
    if($(this).data().status === 'complete'){
        $("#deployed-btn").prop('disabled') === true ? $("#deployed-btn").prop('disabled', false) : null;
        projects.forEach(project => {
            if (project.id === clickID) {
                github.attr("href", project.github);
                deployed.attr("href", project.deployed);
                desc.text(project.description);
                title.text(project.title);
                technologies.text(project.technologies);
            }
        })
    } else if ($(this).data().status === 'in-progress'){
        $("#deployed-btn").prop('disabled') === true ? $("#deployed-btn").prop('disabled', false) : null;
        inProgress.forEach(project => {
            if (project.id === clickID) {
                github.attr("href", project.github);
                project.deployed ? deployed.attr("href", project.deployed): $("#deployed-btn").prop('disabled', true);
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
// HTML CSS JSResult
// EDIT ON

