const validate3 = () =>{
    let val = 0;

    var drugName = document.register.drugName;
    var sickness = document.register.sickness;
    var image = document.register.image;
    var regDate = document.register.regDate;
    var weight = document.register.weight;
    var manDate = document.register.manufactureDate;
    var expDate = document.register.expiryDate;
    var cost = document.register.cost;
    var role = document.register.role;


// Error

    var drugNameError = document.getElementById('drugNameerr');
    var sicknessError = document.getElementById('sicknesserr');
    var regDateError = document.getElementById('dateerr');
    var imageError = document.getElementById('imageerr');
    var weightError = document.getElementById('weighterr');
    var manDateError = document.getElementById('mandateerr');
    var expDateError = document.getElementById('expdateerr');
    var costError = document.getElementById('costerr');
    var roleError = document.getElementById('roleerr');

////////////////////////////////////////////////////////////////////////////////////
    const alphabet = /^([A-Za-z]{2,25})$/;
    if(drugName.value==''){
        drugName.style.border='1px solid red';
        drugNameError.textContent ='This field is required.'
        drugNameError.style='color: red; , font-size:10;'
        val++
    }else if(!(drugName.value.match(alphabet))){
        drugName.style.border='1px solid red';
        drugNameError.textContent ='This field is alphabetic.'
        drugNameError.style='color: red; , font-size:10;'
        return false;
    }else{
        drugName.style.border='1px solid green';
        drugNameError.textContent ='';
    }


/////////////////////////////////////////////////////////////////////////////////////
    if(sickness.value==''){
        sickness.style.border='1px solid red';
        sicknessError.textContent ='This field is required.'
        sicknessError.style='color: red; , font-size:10;'
        val++
    }else if(!(sickness.value.match(alphabet))){
        sickness.style.border='1px solid red';
        sicknessError.textContent ='This field is alphabetic.'
        sicknessError.style='color: red; , font-size:10;'
        return false;
    }else{
        sickness.style.border='1px solid green';
        sicknessError.textContent ='';
    }


//////////////////////////////////////////////////////////////////////////////
    if(image.value==''){
        image.style.border='1px solid red';
        imageError.textContent ='This field is required.'
        imageError.style='color: red; , font-size:10;'
        val++
    }else{
        image.style.border='1px solid green';
        imageError.textContent ='';
    }


///////////////////////////////////////////////////////////////////////////////
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
    if(weight.value==''){
        weight.style.border='1px solid red';
        weightError.textContent ='This field is required.'
        weightError.style='color: red; , font-size:10;'
        val++
    }else{
        weight.style.border='1px solid green';
        weightError.textContent ='';
    }

//////////////////////////////////////////////////////////////////////////////
    if(manDate.value==''){
        manDate.style.border='1px solid red';
        manDateError.textContent ='This field is required.'
        manDateError.style='color: red; , font-size:10;'
        val++
    }else{
        manDate.style.border='1px solid green';
        manDateError.textContent ='';
    }

//////////////////////////////////////////////////////////////////////////////
    if(expDate.value==''){
        expDate.style.border='1px solid red';
        expDateError.textContent ='This field is required.'
        expDateError.style='color: red; , font-size:10;'
        val++
    }else{
        expDate.style.border='1px solid green';
        expDateError.textContent ='';
    }

//////////////////////////////////////////////////////////////////////////////
    if(cost.value==''){
        cost.style.border='1px solid red';
        costError.textContent ='This field is required.'
        costError.style='color: red; , font-size:10;'
        val++
    }else{
        cost.style.border='1px solid green';
        costError.textContent ='';
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