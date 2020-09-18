const emailRegex=/^[a-z][a-z\d]+@(gmail|hotmail|yahoo)\.com$/

function LoginValidation(){
    var em = document.getElementById("email").value;
    var pas = document.getElementById("pass").value;
    if(!emailRegex.test(em)){
        if(length(pas) == 8){
            window.location.href = "https://anjali-rgpt.github.io/PlacementPortal/HTML/Student/companies_list.html#";
        }
        else{
            alert("You have entered an invalid password!");
            document.write(em);
        }
    }
    else{
        alert("You have entered an invalid email address!");
        document.write(em);
    }
};
