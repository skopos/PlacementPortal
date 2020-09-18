function validate(){

    stringRegex=/^[A-Z][a-z]+$/
    phoneNumRegex=/^[789]\d{9}$/
    rollNumRegex=/^CB[.]EN[.](U4|P2)(CSE|ECE|MEE|EEE|CIV|CHE)[1][78][0123456][0123456]\d{1}$/
    emailRegex=/^[a-z][a-z\d]+[@](gmail|hotmail|yahoo)[.]com$/
    cgpaRegex=/^\d{1}([.]\d{2}){0,1}$/

    try{
    fname=document.getElementById('fname').value;
    mname=document.getElementById('mname').value;
    lname=document.getElementById('lname').value;

    }

    catch{
        alert('There has been an error.')
    }
}