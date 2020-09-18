function validate(){

    const stringRegex=/^[A-Z][a-z]+$/
    const phoneNumRegex=/^[789]\d{9}$/
    const rollNumRegex=/^CB[.]EN[.](U4|P2)(CSE|ECE|MEE|EEE|CIV|CHE)[1][78][0123456][0123456]\d{1}$/
    const emailRegex=/^[a-z][a-z\d]+[@](gmail|hotmail|yahoo)[.]com$/
    

    try{
    var fname=document.getElementById('fname').value;
    var mname=document.getElementById('mname').value;
    var lname=document.getElementById('lname').value;

    if (mname.length==0){

        var isValid=stringRegex.test(fname) && stringRegex.test(lname);
    }

    else{

        var isValid=stringRegex.test(fname) && stringRegex.test(lname) && stringRegex.test(mname);
    }

    if (!isValid){
        alert('Name is not valid string expression.');
        return false;

    }

    var rollNum=document.getElementById('rollnum').value;
    if(!rollNumRegex.test(rollNum)){
        alert('Invalid Roll Number format entered');
        return false;
    }

    var emailiD=document.getElementById('email').value;
    if(!emailRegex.test(emailiD)){
        alert('Invalid email format');
        return false;
    }

    var phone=document.getElementById('phonenum').value;
    if(!phoneNumRegex.test(toString(phone))){
        alert('Invalid phone number');
        return false;
    }

    var cgpa=document.getElementById('cgpa').value;
    var temp=cgpa.ToFixed(2);
    if (temp.contains('e')){
        alert('Invalid number entered');
        return false;
    }

    company=document.getElementById('companybox').value;
    if(company.length==0){
        alert('No company selected');
        return false;
    }

    return true;

    }

    catch{
        alert('There has been an error.')
    }
}