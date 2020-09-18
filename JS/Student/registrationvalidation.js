function validate(event){

    const stringRegex=/^[A-Z][a-z]+$/
    const phoneNumRegex=/^[789]\d{9}$/
    const rollNumRegex=/^(CB\.EN)(U4|P2)(CSE|ECE|MEE|EEE|CIV|CHE)[1][78][0123456][0123456][\d{1}]$/
    const emailRegex=/^[a-z][a-z\d]+[@](gmail|hotmail|yahoo)[.]com$/
    
    var flag=0;

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
        console.log(fname, mname, lname);
        event.preventDefault();

    }

    var rollNum=document.getElementById('rollnum').value;
    if(!rollNumRegex.test(rollNum)){
        alert('Invalid Roll Number format entered');
        console.log(rollNum);
        event.preventDefault();
    }

    var emailiD=document.getElementById('email').value;
    if(!emailRegex.test(emailiD)){
        console.log(emailiD);
        alert('Invalid email format');
        event.preventDefault();
    }

    var phone=document.getElementById('phonenum').value;
    if(!phoneNumRegex.test(toString(phone))){
        console.log(phone);
        alert('Invalid phone number');
        event.preventDefault();
    }

    var cgpa=document.getElementById('cgpa').value;
    var temp=cgpa.ToFixed(2);
    if (temp.contains('e')){
        console.log(temp);
        alert('Invalid number entered');
        event.preventDefault();
    }

    else if(parseFloat(temp)>10.0 || parseFloat(temp)<0.0){
        console.log(temp)
        alert('Bad range');
        event.preventDefault();
    }

    company=document.getElementById('companybox').value;
    if(company.length==0){
        alert('No company selected');
        event.preventDefault();
    }

    while (flag){
        event.preventDefault();
        console.log('Here');
    }

    }

    catch(err){
        console.log(err);
        event.preventDefault();
    }
}