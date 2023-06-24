var studentSeatAllocationApp = (function() {
//     var password;

// function getStudentdetails(){
//     var studentPassword = document.querySelector("#studentPassword");
//     password = studentPassword.value;
//     // var data = new FormData();
//     console.log(password);
// }

var studentDetails =  [
    {
        Name: "Baskaran",
        regNo:"21cs01",
        Year:"I year",
        Class:"Computer science",
        hallNo:"H1",
        seatNo:"s1",
        Session:"FN"
    },
    {
        Name: "chaudari",
        regNo:"21cs02",
        Year:"I year",
        Class:"Computer science",
        hallNo:"H1",
        seatNo:"s2",
        Session:"FN"
    },
    {
        Name: "Dhivya",
        regNo:"21cs03",
        Year:"I year",
        Class:"Computer science",
        hallNo:"H1",
        seatNo:"s3",
        Session:"FN"
    },
    {
        Name: "Deepak",
        regNo:"21cs04",
        Year:"I year",
        Class:"Computer science",
        hallNo:"H1",
        seatNo:"s4",
        Session:"FN"
    },
    {
        Name: "Dinesh kumar",
        regNo:"21cs05",
        Year:"I year",
        Class:"Computer science",
        hallNo:"H1",
        seatNo:"s5",
        Session:"FN"
    },
    {
        Name: "Madhumitha",
        regNo:"20bca01",
        Year:"II year",
        Class:"BCA",
        hallNo:"H1",
        seatNo:"s6",
        Session:"FN"
    },
    {
        Name: "Manikandan",
        regNo:"20bca02",
        Year:"II year",
        Class:"BCA",
        hallNo:"H1",
        seatNo:"s7",
        Session:"FN"
    },
    {
        Name: "Paramesh",
        regNo:"20bca03",
        Year:"II year",
        Class:"BCA",
        hallNo:"H1",
        seatNo:"s8",
        Session:"FN"
    },
    {
        Name: "Pooja",
        regNo:"20bca04",
        Year:"II year",
        Class:"BCA",
        hallNo:"H1",
        seatNo:"s9",
        Session:"FN"
    },
    {
        Name: "Priyadharshini",
        regNo:"20bca05",
        Year:"II year",
        Class:"BCA",
        hallNo:"H1",
        seatNo:"s10",
        Session:"FN"
    },
    {
        Name: "Harsithiga",
        regNo:"19IT01",
        Year:"III year",
        Class:"IT",
        hallNo:"H1",
        seatNo:"s11",
        Session:"FN"
    },
    {
        Name: "Haridha",
        regNo:"19IT02",
        Year:"III year",
        Class:"IT",
        hallNo:"H1",
        seatNo:"s12",
        Session:"FN"
    },
    {
        Name: "Hari krishnan",
        regNo:"19IT03",
        Year:"III year",
        Class:"IT",
        hallNo:"H1",
        seatNo:"s13",
        Session:"FN"
    },
    {
        Name: "Janani",
        regNo:"19IT04",
        Year:"III year",
        Class:"IT",
        hallNo:"H1",
        seatNo:"s14",
        Session:"FN"
    },
    {
        Name: "jeyandhan",
        regNo:"19IT05",
        Year:"III year",
        Class:"IT",
        hallNo:"H1",
        seatNo:"s15",
        Session:"FN"
    },
    {
        Name: "Sneka",
        regNo:"21bca01",
        Year:"I year",
        Class:"BCA",
        hallNo:"H2",
        seatNo:"s1",
        Session:"FN"
    },
    {
        Name: "vishwa",
        regNo:"21bca02",
        Year:"I year",
        Class:"BCA",
        hallNo:"H2",
        seatNo:"s2",
        Session:"FN"
    },
    {
        Name: "Eswari",
        regNo:"21bca03",
        Year:"I year",
        Class:"BCA",
        hallNo:"H2",
        seatNo:"s3",
        Session:"FN"
    },
    {
        Name: "Mohan kumar",
        regNo:"21bca04",
        Year:"I year",
        Class:"BCA",
        hallNo:"H2",
        seatNo:"s4",
        Session:"FN"
    },
    {
        Name: "Santhosh kumar",
        regNo:"21bca05",
        Year:"I year",
        Class:"BCA",
        hallNo:"H2",
        seatNo:"s5",
        Session:"FN"
    },
    {
        Name: "Rajeshwari",
        regNo:"20IT01",
        Year:"II year",
        Class:"IT",
        hallNo:"H2",
        seatNo:"s6",
        Session:"FN"
    },
    {
        Name: "Sanjay kumar",
        regNo:"20IT02",
        Year:"II year",
        Class:"IT",
        hallNo:"H2",
        seatNo:"s7",
        Session:"FN"
    },
    {
        Name: "Vinothini",
        regNo:"20IT03",
        Year:"II year",
        Class:"IT",
        hallNo:"H2",
        seatNo:"s8",
        Session:"FN"
    },
    {
        Name: "Vishnu kumar",
        regNo:"20IT04",
        Year:"II year",
        Class:"IT",
        hallNo:"H2",
        seatNo:"s9",
        Session:"FN"
    },
    {
        Name: "Yogavarshini",
        regNo:"20IT05",
        Year:"II year",
        Class:"IT",
        hallNo:"H2",
        seatNo:"s10",
        Session:"FN"
    },
    
    {
        Name: "Abirami",
        regNo:"19cs01",
        Year:"III year",
        Class:"computer science",
        hallNo:"H2",
        seatNo:"s11",
        Session:"FN"
    },
    {
        Name: "Ajay kumar",
        regNo:"19cs02",
        Year:"III year",
        Class:"computer science",
        hallNo:"H2",
        seatNo:"s12",
        Session:"FN"
    },
    {
        Name: "Archanna",
        regNo:"19cs03",
        Year:"III year",
        Class:"computer science",
        hallNo:"H2",
        seatNo:"s13",
        Session:"FN"
    },
    {
        Name: "Arvin",
        regNo:"19cs04",
        Year:"III year",
        Class:"computer science",
        hallNo:"H2",
        seatNo:"s14",
        Session:"FN"
    },
    {
        Name: "Balagurunadhan",
        regNo:"19cs05",
        Year:"III year",
        Class:"computer science",
        hallNo:"H2",
        seatNo:"s15",
        Session:"FN"
    },
    {
        Name: "Saravana",
        regNo:"21IT01",
        Year:"I year",
        Class:"IT",
        hallNo:"H3",
        seatNo:"s1",
        Session:"FN",
    },
    {
        Name: "Shanmugarajan",
        regNo:"21IT02",
        Year:"I year",
        Class:"IT",
        hallNo:"H3",
        seatNo:"s2",
        Session:"FN",
    },
    {
        Name: "Sobha",
        regNo:"21IT03",
        Year:"I year",
        Class:"IT",
        hallNo:"H3",
        seatNo:"s3",
        Session:"FN",
    },
    {
        Name: "Sriram",
        regNo:"21IT04",
        Year:"I year",
        Class:"IT",
        hallNo:"H3",
        seatNo:"s4",
        Session:"FN",
    },
    {
        Name: "vijay",
        regNo:"21IT05",
        Year:"I year",
        Class:"IT",
        hallNo:"H3",
        seatNo:"s5",
        Session:"FN",
    },
    {
        Name: "Jayapraveen",
        regNo:"20cs01",
        Year:"II year",
        Class:"Computer science",
        hallNo:"H3",
        seatNo:"s6",
        Session:"FN",
    },
    {
        Name: "Kalaivani",
        regNo:"20cs02",
        Year:"II year",
        Class:"Computer science",
        hallNo:"H3",
        seatNo:"s7",
        Session:"FN",
    },
    {
        Name: "Kavitha",
        regNo:"20cs03",
        Year:"II year",
        Class:"Computer science",
        hallNo:"H3",
        seatNo:"s8",
        Session:"FN",
    },
    {
        Name: "Keerthana",
        regNo:"20cs04",
        Year:"II year",
        Class:"Computer science",
        hallNo:"H3",
        seatNo:"s9",
        Session:"FN",
    },
    {
        Name: "Kirankumar",
        regNo:"20cs05",
        Year:"II year",
        Class:"Computer science",
        hallNo:"H3",
        seatNo:"s10",
        Session:"FN",
    },
    {
        Name: "Balaji Roy",
        regNo:"19bca01",
        Year:"III year",
        Class:"BCA",
        hallNo:"H3",
        seatNo:"s11",
        Session:"FN",
    },
    {
        Name: "Baranidharan",
        regNo:"19bca02",
        Year:"III year",
        Class:"BCA",
        hallNo:"H3",
        seatNo:"s12",
        Session:"FN",
    },
    {
        Name: "Barath",
        regNo:"19bca03",
        Year:"III year",
        Class:"BCA",
        hallNo:"H3",
        seatNo:"s13",
        Session:"FN",
    },
    {
        Name: "Gokulnath",
        regNo:"19bca04",
        Year:"III year",
        Class:"BCA",
        hallNo:"H3",
        seatNo:"s14",
        Session:"FN",
    },
    {
        Name: "Harishankar",
        regNo:"19bca05",
        Year:"III year",
        Class:"BCA",
        hallNo:"H3",
        seatNo:"s15",
        Session:"FN",
    }
],

adminDetails = [
    {
        name: "janani",
        password: "password"
    },
    {
        name: "raja",
        password: "password"
    },
    {
        name: "yoga",
        password: "password"
    },
],

formOptions = ["Student", "Admin"],

form = document.getElementById('login-form'),

currentOption,
DomStudents,
DomStudent;

// Send a message when the form is submitted.
form.onsubmit = function(e) {

  //Do something... 

  e.preventDefault();
};

function changeFormOption(option) {
    currentOption = option
    for(let i = 0; i < formOptions.length; i++) {
        if(option == formOptions[i]) {
            document.getElementById(formOptions[i]).classList.add("activeOption");
        } else {
            document.getElementById(formOptions[i]).classList.remove("activeOption");
        }
        document.getElementById("form-title").innerHTML = option + " login"
    }
}

function actionOnSubmit() {
    var name = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;
    
    if(currentOption == "Student") {
        DomStudent = "";
        document.getElementById("student-details-page").style.display = "grid";
        document.getElementById("ifStudentAvailable").style.display = "none";
        for(let i = 0; i < studentDetails.length; i++) {
            if(studentDetails[i].Name == name && studentDetails[i].regNo == password) {
                document.getElementById("ifStudentAvailable").style.display = "grid";
                DomStudent += `
                <tr>
                <td>${studentDetails[i].Name}</td>
                <td>${studentDetails[i].regNo}</td>
                <td>${studentDetails[i].Year}</td>
                <td>${studentDetails[i].Class}</td>
                <td>${studentDetails[i].hallNo}</td>
                <td>${studentDetails[i].seatNo}</td>
                <td>${studentDetails[i].Session}</td>
                </tr>`;
            } 
            }
            console.log(DomStudent);
            document.getElementById("student-details-table").innerHTML = DomStudent;
    } else {
        DomStudents = "";
        document.getElementById("student-details-page").style.display = "grid";
        document.getElementById("ifStudentAvailable").style.display = "none";
        for(let i = 0; i < adminDetails.length; i++) {
            if(adminDetails[i].name == name && adminDetails[i].password == password) {
                document.getElementById("ifStudentAvailable").style.display = "grid";
                for(let j = 0; j < studentDetails.length; j++) {
                    DomStudents += `
                    <tr>
                        <td>${studentDetails[j].Name}</td>
                        <td>${studentDetails[j].regNo}</td>
                        <td>${studentDetails[j].Year}</td>
                        <td>${studentDetails[j].Class}</td>
                        <td>${studentDetails[j].hallNo}</td>
                        <td>${studentDetails[j].seatNo}</td>
                        <td>${studentDetails[j].Session}</td>
                    </tr>`
                }
            }
        }
        document.getElementById("student-details-table").innerHTML = DomStudents;
    }
}

function closeDetailsPage() {
    document.getElementById("student-details-page").style.display = "none";
}

changeFormOption('Student')
return {
    changeFormOption: changeFormOption,
    actionOnSubmit: actionOnSubmit,
    closeDetailsPage: closeDetailsPage
}

})();