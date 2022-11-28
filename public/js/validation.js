const validate = () =>{
    let val = 0;

    var fName = document.register.fName;
    var lName = document.register.lName;
    var date = document.register.date;
    var resName = document.register.resName;
    var weight = document.register.weight;
    var role = document.register.role;


// Error

    var fNameError = document.getElementById('fNameerr');
    var lNameError = document.getElementById('lNameerr');
    var dateError = document.getElementById('dateerr');
    var resNameError = document.getElementById('resNameerr');
    var weightError = document.getElementById('weighterr');
    var roleError = document.getElementById('roleerr');

////////////////////////////////////////////////////////////////////////////////////
    const alphabet = /^([A-Za-z]{2,25})$/;
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
    if(weight.value==''){
        weight.style.border='1px solid red';
        weightError.textContent ='This field is required.'
        weightError.style='color: red; , font-size:10;'
        val++
    }else{
        weight.style.border='1px solid green';
        weightError.textContent ='';
    }


    ////////////////////////////////////////////////////////////////////////////////
    if(role.value==''){
        role.style.border='1px solid red';
        roleError.textContent ='This field is required.'
        roleError.style='color: red; , font-size:10;'
        val++
        return false;
    }else{
        role.style.border='1px solid green';
        roleError.textContent ='';
    }

}