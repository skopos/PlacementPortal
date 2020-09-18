function LoginValidation(){
    var em = document.getElementById("email");
    var pas = document.getElementById("pass");
    if (/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(em)){
        if(length(pas) == 8){
            window.location.href = "https://anjali-rgpt.github.io/PlacementPortal/HTML/Student/companies_list.html#";
        }
        else{
            alert("You have entered an invalid password!");
        }
    }
    else{
        alert("You have entered an invalid email address!");
    }
}