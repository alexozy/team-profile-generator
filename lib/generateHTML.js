const generateThem = (data) => {

    const html1 = [];

// manager's card & styling for html
    const managerCard = Manager =>{
        let managerHTML =  `
        
    <div class="card bg-info">
        <h2 class="card-header text-center text-warning"> ${Manager.name} </h2>
            <h4 class="card-body text-center text-white">${Manager.getRole()}
                <span> 
                    <ion-icon name="shield-checkmark-outline"></ion-icon>
                </span>
            </h4>
                <div class="card-footer bg-warning"> ID: ${Manager.id} </div>
                <div class="card-footer bg-light"> Email: <a href ="mailto:${Manager.email}"> ${Manager.email}</a></div>
                <div class="card-footer bg-light"> Office Number: ${Manager.officeNumber} </div>
    </div>

        `;
        html1.push(managerHTML)
    }
// intern's card & styling for html

const internCard = intern =>{
    let internHTML =  `
    
<div class="card bg-secondary">
    <h2 class="card-header text-center text-warning"> ${intern.name} </h2>
        <h4 class="card-body text-center text-white"> ${intern.getRole()}
            <span> 
            <ion-icon name="school-outline"></ion-icon>
            </span>
        </h4>
            <div class="card-footer bg-warning"> ID: ${intern.id} </div>
            <div class="card-footer bg-light"> Email: <a href ="mailto:${intern.email}">${intern.email}</a></div>
            <div class="card-footer bg-light"> School: ${intern.school} </div>
</div>

    `;
    html1.push(internHTML)
}

// engineer's card & styling for html

const engineerCard = engineer =>{
    let engineerHTML =  `
    
<div class="card bg-primary">
    <h2 class="card-header text-center text-warning"> ${engineer.name} </h2>
        <h4 class="card-body text-center text-white"> ${engineer.getRole()}
            <span> 
            <ion-icon name="build-outline"></ion-icon>
            </span>
        </h4>
            <div class="card-footer bg-warning"> ID: ${engineer.id} </div>
            <div class="card-footer bg-light"> Email: <a href =" mailto:${engineer.email}"> ${engineer.email} </a></div>
            <div class="card-footer bg-light"> GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">Visit My Github!</a></div>

</div>

    `;
    html1.push(engineerHTML)
}

// this cycles through the user inputs and employee cards

for( let i = 0; i < data.length; i++) {
    if(data[i].getRole() === "Manager"){
        managerCard(data[i]);
    }
    if(data[i].getRole() === "Intern"){
        internCard(data[i]);
    }
    if(data[i].getRole() === "Engineer"){
        engineerCard(data[i]);
    }
}


return html1.join('');
}

// this actually prints the html syntax to the new html document the $generateThem prints the cards to that div tag

function generatePage (data){
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <link rel="stylesheet" href="css/style.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        
        <title>Team Profile Generator</title>
    </head>
    <body>
        <br>
        <nav class="navbar navbar-expand-sm bg-light navbar-light justify-content-center navText">
            <h1>Build-A-Squad</h1>
        </nav>
    <br>
        <!-- card skeleton examples-->
    <div class="container-fluid card-columns d-flex">
        ${generateThem(data)}
        
    </div>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </body>
    </html>
    
    
    `;
}


module.exports = generatePage;
