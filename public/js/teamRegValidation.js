const validate2 = () =>{
    let val = 0;

    var fName = document.register.fName;
    var lName = document.register.lName;
    var userId = document.register.userId;
    var date = document.register.DOB;
    var regDate = document.register.regDate;
    var nin = document.register.nin;
    var image = document.register.image;
    var nationality = document.register.nationality;
    var role = document.register.role;
    var resName = document.register.resName;
    var contact = document.register.contact;
    var password = document.register.password;
    var comfirmPassword = document.register.comfirmPassword;
    


// Error

    var fNameError = document.getElementById('fNameerr');
    var lNameError = document.getElementById('lNameerr');
    var userIdError = document.getElementById('userIderr');
    var dateError = document.getElementById('DOBerr');
    var regDateError = document.getElementById('regDateerr');
    var ninError = document.getElementById('ninerr');
    var imageError = document.getElementById('imageerr');
    var nationalityError = document.getElementById('nationalityerr');
    var roleError = document.getElementById('roleerr');
    var resNameError = document.getElementById('resNameerr');
    var contactError = document.getElementById('contacterr');
    var passwordError = document.getElementById('passworderr');
    var comfirmPasswordError = document.getElementById('comfirmPassworderr');

////////////////////////////////////////////////////////////////////////////////////
    const alphabet = /^([A-Za-z]{2,25})$/;
    const alphanumeric = /^([0-9a-zA-Z]{14})+$/;
    const alphanumeriks = /^([0-9a-zA-Z]{1,25})$/;
    const NMCregex = /^NMC-([0-9]{4})+$/;
    let phonenumberRegex = /^\+\d{12}$/;
    if(fName.value==''){
        fName.style.border='1px solid red';
        fNameError.textContent ='This field is required.'
        fNameError.style='color: red; , font-size:10;'
        val++
    }else if(!(fName.value.match(alphabet))){
        fName.style.border='1px solid red';
        fNameError.textContent ='This field is alphabetic.'
        fNameError.style='color: red; , font-size:10;'
        return false;
    }else{
        fName.style.border='1px solid green';
        fNameError.textContent ='';
    }


/////////////////////////////////////////////////////////////////////////////////////
    if(lName.value==''){
        lName.style.border='1px solid red';
        lNameError.textContent ='This field is required.'
        lNameError.style='color: red; , font-size:10;'
        val++
    }else if(!(lName.value.match(alphabet))){
        lName.style.border='1px solid red';
        lNameError.textContent ='This field is alphabetic.'
        lNameError.style='color: red; , font-size:10;'
        return false;
    }else{
        lName.style.border='1px solid green';
        lNameError.textContent ='';
    }


    /////////////////////////////////////////////////////////////////////////////////////
    if(userId.value==''){
        userId.style.border='1px solid red';
        userIdError.textContent ='This field is required.'
        userIdError.style='color: red; , font-size:10;'
        val++
    }else if(!(userId.value.match(NMCregex))){
        userId.style.border='1px solid red';
        userIdError.textContent ='This field is alphabetic.'
        userIdError.style='color: red; , font-size:10;'
        return false;
    }else{
        userId.style.border='1px solid green';
        userIdError.textContent ='';
    }

///////////////////////////////////////////////////////////////////////////////
    if(date.value==''){
        date.style.border='1px solid red';
        dateError.textContent ='This field is required.'
        dateError.style='color: red; , font-size:10;'
        val++
    }else{
        date.style.border='1px solid green';
        dateError.textContent ='';
    }

    
////////////////////////////////////////////////////////////////////////////////
    if(regDate.value==''){
        regDate.style.border='1px solid red';
        regDateError.textContent ='This field is required.'
        regDateError.style='color: red; , font-size:10;'
        val++
    }else{
        regDate.style.border='1px solid green';
        regDateError.textContent ='';
    }

    
////////////////////////////////////////////////////////////////////////////////
    if(nin.value==''){
        nin.style.border='1px solid red';
        ninError.textContent ='This field is required.'
        ninError.style='color: red; , font-size:10;'
        val++
    }else if(!(nin.value.match(alphanumeric))){
        nin.style.border='1px solid red';
        ninError.textContent ='This field is alphanumeric.'
        ninError.style='color: red; , font-size:10;'
        return false;
    }else{
        nin.style.border='1px solid green';
        ninError.textContent ='';
    }

    ////////////////////////////////////////////////////////////////////////////////
    if(image.value==''){
        image.style.border='1px solid red';
        imageError.textContent ='This field is required.'
        imageError.style='color: red; , font-size:10;'
        val++
    }else{
        image.style.border='1px solid green';
        imageError.textContent ='';
    }


    ////////////////////////////////////////////////////////////////////////////////
    if(nationality.value==''){
        nationality.style.border='1px solid red';
        nationalityError.textContent ='This field is required.'
        nationalityError.style='color: red; , font-size:10;'
        val++
    }else{
        nationality.style.border='1px solid green';
        nationalityError.textContent ='';
    }

    
////////////////////////////////////////////////////////////////////////////////
    if(role.value==''){
        role.style.border='1px solid red';
        roleError.textContent ='This field is required.'
        roleError.style='color: red; , font-size:10;'
        val++
    }else{
        role.style.border='1px solid green';
        roleError.textContent ='';
    }

////////////////////////////////////////////////////////////////////////////////
    if(resName.value==''){
        resName.style.border='1px solid red';
        resNameError.textContent ='This field is required.'
        resNameError.style='color: red; , font-size:10;'
        val++
    }else if(!(resName.value.match(alphabet))){
        resName.style.border='1px solid red';
        resNameError.textContent ='This field is alphabetic.'
        resNameError.style='color: red; , font-size:10;'
        return false;
    }else{
        resName.style.border='1px solid green';
        resNameError.textContent ='';
    }

////////////////////////////////////////////////////////////////////////////////
    if(contact.value==''){
        contact.style.border='1px solid red';
        contactError.textContent ='This field is required.'
        contactError.style='color: red; , font-size:10;'
        val++
    }else if(!(contact.value.match(phonenumberRegex))){
        contact.style.border='1px solid red';
        contactError.textContent ='This field is alphanumeric.'
        contactError.style='color: red; , font-size:10;'
        return false;
    }else{
        contact.style.border='1px solid green';
        contactError.textContent ='';
    }

////////////////////////////////////////////////////////////////////////////////
    if(password.value==''){
        password.style.border='1px solid red';
        passwordError.textContent ='This field is required.'
        passwordError.style='color: red; , font-size:10;'
        val++
    }else if(!(password.value.match(alphanumeriks))){
        password.style.border='1px solid red';
        passwordError.textContent ='This field is alphanumeric.'
        passwordError.style='color: red; , font-size:10;'
        return false;
    }else{
        password.style.border='1px solid green';
        passwordError.textContent ='';
    }

////////////////////////////////////////////////////////////////////////////////
    if(comfirmPassword.value==''){
        comfirmPassword.style.border='1px solid red';
        comfirmPasswordError.textContent ='This field is required.'
        comfirmPasswordError.style='color: red; , font-size:10;'
        val++
        return false
    }else if(!(comfirmPassword.value.match(alphanumeriks))){
        comfirmPassword.style.border='1px solid red';
        comfirmPasswordError.textContent ='This field is alphanumeric.'
        comfirmPasswordError.style='color: red; , font-size:10;'
        return false;
    }else{
        comfirmPassword.style.border='1px solid green';
        comfirmPasswordError.textContent ='';
    }
    


}