function signup(){
    var fname, lname, pass, repass, uname, email, phone, men, women, dob;
    fname = document.getElementById('fname').value;
    lname = document.getElementById('lname').value;
    uname = document.getElementById('uname').value;
    pass = document.getElementById('pass').value;
    repass = document.getElementById('repass').value;
    email = document.getElementById('email').value;
    phone = document.getElementById('phone').value;
    dob = document.getElementById('dob').value;
    men = document.getElementById('men').checked;
    women = document.getElementById('women').checked;
    if (men==false && women==false)
    {
        alert("Please choose your sex <3");
        return;
    }
    if (fname=="" || lname=="" || pass=="" || uname=="" || repass=="" || email=="" || phone==""|| dob=="" )
    {
        alert("Please do not miss any information <3");
        return;
    }
    if (pass!=repass)
    {
        alert("Both of them do not match !!!!!!")
        return;
    }

    var currdate = new Date();
    currdate = Date.parse(currdate);
    dob = Date.parse(dob);
    if(dob>currdate){
        alert("CAN NOT DEFINE");
        return;
    }


}