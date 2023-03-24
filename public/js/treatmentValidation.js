const validate1 = () =>{
    let val = 0;

    var fName = document.register.fName;
    var lName = document.register.lName;
    var date = document.register.date;
    var age = document.register.age;
    var sickness = document.register.sickness;
    var weight = document.register.weight;
    var medicine = document.register.medicine;
    var nutrition = document.register.nutrition;
    var fee = document.register.fee;
    var resName = document.register.resName;


// Error

    var fNameError = document.getElementById('fNameerr');
    var lNameError = document.getElementById('lNameerr');
    var dateError = document.getElementById('dateerr');
    var ageError = document.getElementById('ageerr');
    var sicknessError = document.getElementById('sicknesserr');
    var weightError = document.getElementById('weighterr');
    var medicineError = document.getElementById('medicineerr');
    var nutritionError = document.getElementById('nutritionerr');
    var feeError = document.getElementById('feeerr');
    var resNameError = document.getElementById('resNameerr');

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
    if(age.value==''){
        age.style.border='1px solid red';
        ageError.textContent ='This field is required.'
        ageError.style='color: red; , font-size:10;'
        val++
    }else{
        age.style.border='1px solid green';
        ageError.textContent ='';
    }

    
////////////////////////////////////////////////////////////////////////////////
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
    if(medicine.value==''){
        medicine.style.border='1px solid red';
        medicineError.textContent ='This field is required.'
        medicineError.style='color: red; , font-size:10;'
        val++
    }else{
        medicine.style.border='1px solid green';
        medicineError.textContent ='';
    }

    
////////////////////////////////////////////////////////////////////////////////
    if(nutrition.value==''){
        nutrition.style.border='1px solid red';
        nutritionError.textContent ='This field is required.'
        nutritionError.style='color: red; , font-size:10;'
        val++
    }else if(!(nutrition.value.match(alphabet))){
        nutrition.style.border='1px solid red';
        nutritionError.textContent ='This field is alphabetic.'
        nutritionError.style='color: red; , font-size:10;'
        return false;
    }else{
        nutrition.style.border='1px solid green';
        nutritionError.textContent ='';
    }

////////////////////////////////////////////////////////////////////////////////
    if(fee.value==''){
        fee.style.border='1px solid red';
        feeError.textContent ='This field is required.'
        feeError.style='color: red; , font-size:10;'
        val++
    }else{
        fee.style.border='1px solid green';
        feeError.textContent ='';
    }
    
////////////////////////////////////////////////////////////////////////////////
    if(resName.value==''){
        resName.style.border='1px solid red';
        resNameError.textContent ='This field is required.'
        resNameError.style='color: red; , font-size:10;'
        val++
        return false
    }else if(!(resName.value.match(alphabet))){
        resName.style.border='1px solid red';
        resNameError.textContent ='This field is alphabetic.'
        resNameError.style='color: red; , font-size:10;'
        return false;
    }else{
        resName.style.border='1px solid green';
        resNameError.textContent ='';
    }

}