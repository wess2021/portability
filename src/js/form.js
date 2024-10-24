
document.addEventListener('DOMContentLoaded', function() {
  
        const form = document.getElementById('multiStepForm');
        const step1 = document.getElementById('step1');
        const step2 = document.getElementById('step2');
        const nextBtn = document.getElementById('nextBtn');
        const prevBtn = document.getElementById('prevBtn');
        const submitBtn = document.getElementById('submitBtn');
      function showError(fieldId, errorId) {
            document.getElementById(errorId).style.display = 'block';
        }
        function hideError(errorId) {
            document.getElementById(errorId).style.display = 'none';
        }
function dismissAlert(element) {
            element.parentElement.parentElement.remove(); // Remove the entire alert block
        }
function validateStep1() {
    let isValid = true;
     const phoneNumber = document.getElementById('phoneNumber').value.trim();
     const ancienOperator = document.getElementById('ancienOperator').value.trim();
     const typePerson = document.getElementById('typePerson').value.trim();
    if (phoneNumber === '') {
        showError('phoneNumber', 'phoneNumberError');
        isValid = false;
    } else if (!/^\d{8}$/.test(phoneNumber)) {
        showError('phoneNumber', 'phoneNumberdigitsError');
        isValid = false;
    }else {
        hideError('phoneNumberError');
    }
    if (ancienOperator === '') {
        showError('ancienOperator', 'ancienOperatorError');
        isValid = false;
    } else {
        hideError('ancienOperatorError');
    }
    if (typePerson === '') {
        showError('typePerson', 'typePersonError');
        isValid = false;
    } else {
        hideError('typePersonError');
    }
   if (isValid) {
        document.getElementById('hiddenPhoneNumber').value = phoneNumber;
    }

    return isValid;
}
        function validateStep2() {
  
    let isValid = true;
    const civility = document.getElementById('civility').value.trim();
    if (civility === '') {
        showError('civility', 'civilityError');
        isValid = false;
    } else {
        hideError('civilityError');
    }
    const typeIdentity = document.getElementById('typeIdentity').value.trim();
    if (typeIdentity === '') {
        showError('typeIdentity', 'typeIdentityError');
        isValid = false;
    } else {
        hideError('typeIdentityError');
    }
    const prenom = document.getElementById('prenom').value.trim();
    if (prenom === '') {
        showError('prenom', 'prenomError');
        isValid = false;
    } else {
        hideError('prenomError');
    }
    const nom = document.getElementById('nom').value.trim();
    if (nom === '') {
        showError('nom', 'nomError');
        isValid = false;
    } else {
        hideError('nomError');
    }
    const cin = document.getElementById('cin').value.trim();
    if (cin === '') {
        showError('cin', 'cinError');
        isValid = false;
    } else {
        hideError('cinError');
    }
    const confirmCin = document.getElementById('confirmcin').value.trim();
    if (confirmCin === '') {
        showError('confirmcin', 'confirmcinError');
        isValid = false;
    } else {
        hideError('confirmcinError');
    }
    
    if (cin !== '' && confirmCin !== '' && cin !== confirmCin) {
        showError('confirmcin', 'cinMatchError');
        isValid = false;
    } else {
        hideError('cinMatchError');
    }
    const deliveryCin = document.getElementById('deliveryCin').value.trim();
    if (deliveryCin === '') {
        showError('deliveryCin', 'deliveryCinError');
        isValid = false;
    } else {
        hideError('deliveryCinError');
    }
    const deliveryCinUntil = document.getElementById('delveryplace').value.trim();
    if (deliveryCinUntil === '') {
        showError('delveryplace', 'delveryplaceError');
        isValid = false;
    } else {
        hideError('delveryplaceError');
    }
    const adresse = document.getElementById('adresse').value.trim();
    if (adresse === '') {
        showError('adresse', 'adresseError');
        isValid = false;
    } else {
        hideError('adresseError');
    }
    const pays = document.getElementById('pays').value.trim();
    if (pays === '') {
        showError('pays', 'paysError');
        isValid = false;
    } else {
        hideError('paysError');
    }
    const gouvernorat = document.getElementById('gouvernorat').value.trim();
    if (gouvernorat === '') {
        showError('gouvernorat', 'gouvernoratError');
        isValid = false;
    } else {
        hideError('gouvernoratError');
    }
    const ville = document.getElementById('ville').value.trim();
    if (ville === '') {
        showError('ville', 'villeError');
        isValid = false;
    } else {
        hideError('villeError');
    }
    const codePostal = document.getElementById('codePostal').value.trim();
    if (codePostal === '') {
        showError('codePostal', 'codePostalError');
        isValid = false;
    } else if (!/^\d{4}$/.test(codePostal)) {
        showError('codePostal', 'codePostalError2');
        isValid = false;
    }else {
        hideError('codePostalError');
    }
    const birthday = document.getElementById('birthday').value.trim();
    if (birthday === '') {
        showError('birthday', 'birthdayError');
        isValid = false;
    } else {
        hideError('birthdayError');
    }
    const phone = document.getElementById('phone').value.trim();
    if (phone === '') {
        showError('phone', 'phoneError');
        isValid = false;
    } else if (!/^\d{8}$/.test(phone)) {
        showError('phone', 'phonedigitsError');
        isValid = false;
    }else {
        hideError('phoneError');
    }
    const phoneDesired = document.getElementById('phoneDesired').value.trim();
    if (phoneDesired === '') {
        showError('phoneDesired', 'phoneDesiredError');
        isValid = false;
    } else if (!/^\d{8}$/.test(phoneDesired)) {
        showError('phoneDesired', 'phonedesdigitsError');
        isValid = false;
    }else {
        hideError('phoneDesiredError');
    }
    const email = document.getElementById('email').value.trim();
    if (email === '') {
        showError('email', 'emailError');
        isValid = false;
    } else {
        hideError('emailError');
    }
    const dateMiseEnServiceDes = document.getElementById('dateMiseEnServiceDes').value.trim();
    if (dateMiseEnServiceDes === '') {
        showError('dateMiseEnServiceDes', 'dateMiseEnServiceDesError');
        isValid = false;
    } else {
        hideError('dateMiseEnServiceDesError');
    }
    const cinRecto = document.getElementById('cinRecto').files.length === 0;
    if (cinRecto) {
        showError('cinRecto', 'cinRectoError');
        isValid = false;
    } else {
        hideError('cinRectoError');
    }
    const cinVerso = document.getElementById('cinVerso').files.length === 0;
    if (cinVerso) {
        showError('cinVerso', 'cinVersoError');
        isValid = false;
    } else {
        hideError('cinVersoError');
    }
    const codeRio = document.getElementById('codeRio').value.trim();
    if (codeRio === '') {
        showError('codeRio', 'codeRioError');
        isValid = false;
    } else {
        hideError('codeRioError');
    }
    const confirmation = document.getElementById('confirmation').checked;
    if (!confirmation) {
        showError('confirmation', 'confirmationError');
        isValid = false;
    } else {
        hideError('confirmationError');
    }

//verif cin or passport number of caractère
if (typeIdentity === '') {
    showError('typeIdentity', 'typeIdentityError');
    isValid = false;
} else {
    if (typeIdentity === 'CIN') {
        // Validate CIN: Must be 8 digits
        if (!/^\d{8}$/.test(cin)) {
            showError('cin', 'cinError2');
           // document.getElementById('cinError2').innerText = 'Le CIN doit comporter exactement 8 chiffres.';
            isValid = false;
        } else {
            hideError('cinError2');
        }
    } else if (typeIdentity === 'Passeport') {
        // Validate Passport: Must be at least 7 alphanumeric characters
        if (cin.length < 7 || !/^[a-zA-Z0-9]+$/.test(cin)) {
            showError('cin', 'passportError');
           // document.getElementById('passportError').innerText = 'Le passeport doit comporter au moins 7 caractères alphanumériques.';
            isValid = false;
        } else {
            hideError('passportError');
        }
    }
}
    return isValid;
}
        nextBtn.addEventListener('click', function() {
            if (validateStep1()) {
                step1.classList.remove('active');
                step2.classList.add('active');
                nextBtn.style.display = 'none';
                submitBtn.style.display = 'inline-block';
                prevBtn.style.display = 'inline-block';
            }
        });
        prevBtn.addEventListener('click', function() {
            step2.classList.remove('active');
            step1.classList.add('active');
            nextBtn.style.display = 'inline-block';
            submitBtn.style.display = 'none';
            prevBtn.style.display = 'none';
        });
        const language = document.documentElement.lang; 
        console.log(language);

        form.addEventListener('submit', function(event) {
            event.preventDefault(); 
            document.querySelectorAll('.error').forEach(function(errorElement) {
                errorElement.style.display = 'none';
            });
          if (validateStep2()) {
                const formData = new FormData(form);
                const data = {
                    "phoneNumber": formData.get('phoneNumber'),              
                    "ancienOperator": formData.get('ancienOperator'),   
                    "typePerson": formData.get('typePerson'),           
                    "civility": formData.get('civility'),                        
                    "typeIdentity": formData.get('typeIdentity'),            
                    "prenom": formData.get('prenom'),                
                    "nom": formData.get('nom'),                          
                    "cin": formData.get('cin'),                     
                    "confirmcin": formData.get('confirmcin'),          
                    "deliveryCin": formData.get('deliveryCin'),              
                    "delveryplace": formData.get('delveryplace'),       
                    "adresse": formData.get('adresse'),             
                    "pays": formData.get('pays'),                  
                    "gouvernorat": formData.get('gouvernorat'),    
                    "ville": formData.get('ville'),                
                    "codePostal": formData.get('codePostal'),               
                    "confirmation": formData.get('confirmation') === 'on' ? true : false,                
                    "cinRecto": formData.get('cinRecto'),  // file   
                    "cinVerso": formData.get('cinVerso'),  // file  
                    "codeRio": formData.get('codeRio'),              
                    "birthday": formData.get('birthday'),       
                    "phone": formData.get('phone'),                  
                    "phoneDesired": formData.get('phoneDesired'),              
                    "email": formData.get('email'),        
                    "dateMiseEnServiceDes": formData.get('dateMiseEnServiceDes'), 
                    "from": formData.get('from') ,    
                    "adresseLivraison": formData.get('adresseLivraison')    
                };
             console.log("data", data);           
                var toastMixin = Swal.mixin({
                    toast: true,
                    icon: 'success',
                    title: 'General Title',
                    animation: true,
                    position: 'top-right',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer);
                        toast.addEventListener('mouseleave', Swal.resumeTimer);
                    }
                });
                 //   url: 'http://localhost/nety/rest/addportability',
                $.ajax({
                    url: 'https://preprod.nety.tn/rest/addportability',
                  
                    type: 'POST',
                    data: formData,
                    processData: false, 
                    contentType: false, 
                    cache: false,
                    success: function(response) {
                        if (response.success) {
                            toastMixin.fire({
                                icon: 'success',
                                title: language === 'fr' ? 'Demande de portabilité a été envoyée !' : 'تم إرسال طلب التحويل!'
                            });
                            form.reset();
                            step2.classList.remove('active');
                            step1.classList.add('active');
                            nextBtn.style.display = 'inline-block';
                            submitBtn.style.display = 'none';
                            prevBtn.style.display = 'none';
                        } else {
                            toastMixin.fire({
                                icon: 'error',
                                title: language === 'fr' ? response.message : 'حدث خطأ في الطلب: ' + response.message
                            });
                            console.log('Error: ' + response.message);
                        }
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        toastMixin.fire({
                            icon: 'error',
                            title: language === 'fr' ? 'Une erreur est survenue lors de l\'envoi !' : 'حدث خطأ أثناء الإرسال'
                        });
                        console.error('AJAX Error:', textStatus, errorThrown);
                    }
                });             
                
            }
        });
    });

   