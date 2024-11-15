
document.addEventListener('DOMContentLoaded', function() {
  const mm="";
        const form = document.getElementById('multiStepForm');
        const step1 = document.getElementById('step1');
        const step2 = document.getElementById('step2');
        const nextBtn = document.getElementById('nextBtn');
        const prevBtn = document.getElementById('prevBtn');
        const submitBtn = document.getElementById('submitBtn');
      function showError(fieldId, errorId) {
            document.getElementById(errorId).style.display = 'block';
            document.getElementById(fieldId).classList.add('is-invalid');
            document.getElementById(fieldId).classList.remove('is-valid');
        }
        function hideError(errorId) {
            document.getElementById(errorId).style.display = 'none';
        }
function dismissAlert(element) {
            element.parentElement.parentElement.remove(); 
        }
      

document.getElementById('phoneNumber').addEventListener('input', function() {
    const phone = this.value.trim();
    if (phone === '') {
        console.log("enter 1"); 
        showError('phoneNumber', 'phoneNumberError');
        hideError('phoneNumberdigitsError');
    } else if (!/^\d{8}$/.test(phone)) {
        showError('phoneNumber', 'phoneNumberdigitsError');
        hideError('phoneNumberError');
    } else {
        document.getElementById("phoneDesired").value = phone;
        hideError('phoneNumberError');
        hideError('phoneNumberdigitsError');
        this.classList.add('is-valid'); 
        this.classList.remove('is-invalid'); 
    }
});
  // Phone validation
  document.getElementById('phone').addEventListener('input', function() {
    const phone = this.value.trim();
    if (phone === '') {
        showError('phone', 'phoneError');
        hideError('phonedigitsError');
    } else if (!/^\d{8}$/.test(phone)) {
        showError('phone', 'phonedigitsError');
        hideError('phoneError');
    } else {
        hideError('phoneError');
        hideError('phonedigitsError');
        this.classList.add('is-valid'); 
        this.classList.remove('is-invalid'); 
    }
});
document.getElementById('prenom').addEventListener('input', function() {
    const prenom = this.value.trim();
   
    if (prenom === '') {
        showError('prenom', 'prenomError');
   
    } else {
        hideError('prenomError');
        this.classList.add('is-valid'); 
        this.classList.remove('is-invalid'); 
    }
});
document.getElementById('nom').addEventListener('input', function() {
    const nom = this.value.trim();
   
    if (nom === '') {
        showError('nom', 'nomError');
   
    } else {
        hideError('nomError');
        this.classList.add('is-valid'); 
        this.classList.remove('is-invalid'); 
    }
});
document.getElementById('ville').addEventListener('input', function() {
    const ville = this.value.trim();
   
    if (ville === '') {
        showError('ville', 'villeError');
   
    } else {
        hideError('villeError');
        this.classList.add('is-valid'); 
        this.classList.remove('is-invalid'); 
    }
});
document.getElementById('adresse').addEventListener('input', function() {
    const adresse = this.value.trim();
   
    if (adresse === '') {
        showError('adresse', 'adresseError');
   
    } else {
        hideError('adresseError');
        this.classList.add('is-valid'); 
        this.classList.remove('is-invalid'); 
    }
});
document.getElementById('codePostal').addEventListener('input', function() {
    const codePostal = this.value.trim();
   
    if (codePostal === '') {
        showError('codePostal', 'codePostalError');
        hideError('codePostalError2');
   
    }else if (!/^\d{4}$/.test(codePostal))  {
        showError('codePostal', 'codePostalError2');
        hideError('codePostalError');
    }  else {
        hideError('codePostalError');
        hideError('codePostalError2');
        this.classList.add('is-valid'); 
        this.classList.remove('is-invalid'); 
    }
});

document.getElementById('email').addEventListener('input', function() {
    const email = this.value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === '') {
        showError('email', 'emailError');
        hideError('emailError2');
    } else if (!emailPattern.test(email)) {
        showError('email', 'emailError2');
        hideError('emailError');
    } else {
        hideError('emailError');
        hideError('emailError2');
        this.classList.add('is-valid'); 
        this.classList.remove('is-invalid'); 
    }
});

const typeIdentitySelect = document.getElementById('typeIdentity');

document.getElementById('typeIdentity').addEventListener('change', function() {
    const typeIdentity = this.value;

    if (typeIdentity === '') {
        showError('typeIdentity', 'typeIdentityError');
        hideError('cinError');
        hideError('cinError2');
        hideError('passportError');
        this.classList.remove('is-valid'); 
        this.classList.add('is-invalid');
    } else {
        hideError('typeIdentityError');
        this.classList.add('is-valid'); 
        this.classList.remove('is-invalid');
     
    }
});
document.getElementById('gouvernorat').addEventListener('change', function() {
    const gouvernorat = this.value;
    if (gouvernorat === '') {
        showError('gouvernorat', 'gouvernoratError');
        this.classList.remove('is-valid'); 
        this.classList.add('is-invalid');
    } else {
        hideError('gouvernoratError');
        this.classList.add('is-valid'); 
        this.classList.remove('is-invalid');
     
    }
});
document.getElementById('ancienOperator').addEventListener('change', function() {
    const ancienOperator = this.value;
    if (ancienOperator === '') {
        showError('ancienOperator', 'ancienOperatorError');
        this.classList.remove('is-valid'); 
        this.classList.add('is-invalid');
    } else {
        hideError('ancienOperatorError');
        this.classList.add('is-valid'); 
        this.classList.remove('is-invalid');
     
    }
});
const typePersonSelect = document.getElementById('typePerson');
typePersonSelect.addEventListener('change', function() {
    const typePerson = this.value;
    const language = document.documentElement.lang;  
    if (typePerson === '') {
        showError('typePerson', 'typePersonError');
        this.classList.remove('is-valid');
        this.classList.add('is-invalid');
    } else {
        let options = '';
        if (language === 'ar') {
            if (typePerson === 'Personne morale') {
                options = `
                    <option value="">اختر</option>
                    <option value="Matricule fiscale">رقم التسجيل الضريبي</option>
                    <option value="CIN">بطاقة التعريف الوطنية</option>
                    <option value="Passeport">جواز السفر</option>
                `;
            } else {
                options = `
                    <option value="">اختر</option>
                    <option value="CIN">بطاقة التعريف الوطنية</option>
                    <option value="Passeport">جواز السفر</option>
                `;
            }
        } else {
            if (typePerson === 'Personne morale') {
                options = `
                    <option value="">Sélectionner</option>
                    <option value="Matricule fiscale">Matricule fiscale</option>
                    <option value="CIN">CIN</option>
                    <option value="Passeport">Passeport</option>
                `;
            } else {
                options = `
                    <option value="">Sélectionner</option>
                    <option value="CIN">CIN</option>
                    <option value="Passeport">Passeport</option>
                `;
            }
        }
        typeIdentitySelect.innerHTML = options;      
        hideError('typePersonError');
        this.classList.add('is-valid');
        this.classList.remove('is-invalid');
    }
});
document.getElementById('phoneDesired').value=mm;
 // Phone desired
 document.getElementById('phoneDesired').addEventListener('input', function() {
    const phone = this.value.trim();
    if (phone === '') {
        showError('phoneDesired', 'phoneDesiredError');
        hideError('phonedesdigitsError');
    } else if (!/^\d{8}$/.test(phone)) {
        showError('phoneDesired', 'phonedesdigitsError');
        hideError('phoneDesiredError');
    } else {
        hideError('phoneDesiredError');
        hideError('phonedesdigitsError');
        this.classList.add('is-valid'); 
        this.classList.remove('is-invalid'); 
    }
});

// Numéro de la pièce d'identité (CIN/Passport) validation on input
document.getElementById('cin').addEventListener('input', function() {
    const typeIdentity = document.getElementById('typeIdentity').value;
    const cin = this.value.trim();

    if (cin === '') {
        showError('cin', 'cinError');
    } else {
        hideError('cinError');
        if (typeIdentity === 'CIN' && !/^\d{8}$/.test(cin)) {
            showError('cin', 'cinError2');
            hideError('passportError');
            hideError('fiscaleError');
        } else if (typeIdentity === 'Passeport' && (
            cin.length < 7 || 
            cin.length > 13 || 
            !/^[a-zA-Z0-9]+$/.test(cin) || // Must contain only letters and numbers
            !(/[a-zA-Z]/.test(cin) && /\d/.test(cin)) // Must contain at least one letter and one number
        )){
            showError('cin', 'passportError');
            hideError('cinError2');
            hideError('fiscaleError');
        } else if (typeIdentity === 'Matricule fiscale' && (cin.length < 8 || cin.length > 13 )) {
            showError('cin', 'fiscaleError');
            hideError('passportError');
            hideError('cinError2');
        }else {
            hideError('fiscaleError');
            hideError('cinError2');
            hideError('passportError');
            this.classList.add('is-valid'); 
            this.classList.remove('is-invalid'); 
        }
    }
});

function validateStep1() {
    let isValid = true;
     const phoneNumber = document.getElementById('phoneNumber').value.trim();
     const ancienOperator = document.getElementById('ancienOperator').value.trim();
     const typePerson = document.getElementById('typePerson').value.trim();
    if (phoneNumber === '') {
        showError('phoneNumber', 'phoneNumberError');
        hideError('phoneNumberdigitsError');
        isValid = false;
    } else if (!/^\d{8}$/.test(phoneNumber)) {
        showError('phoneNumber', 'phoneNumberdigitsError');
        hideError('phoneNumberError');
        isValid = false;
    }else {
        hideError('phoneNumberError');
        hideError('phoneNumberdigitsError');
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
    const adresse = document.getElementById('adresse').value.trim();
    if (adresse === '') {
        showError('adresse', 'adresseError');
        isValid = false;
    } else {
        hideError('adresseError');
    }
    const pays = 'Tunisia'
    
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
        hideError('codePostalError2');
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
        hideError('phonedigitsError');
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
        hideError('phonedesdigitsError');
    }
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log("email form:",!emailPattern.test(email));
    if (email === '') {
        showError('email', 'emailError');
        isValid = false;
    } else if (!emailPattern.test(email)) {
        showError('email', 'emailError2');
        isValid = false;
    } else {
        hideError('emailError');
        hideError('emailError2');
    }
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0]; // This gives you "yyyy-mm-dd"
        document.getElementById('dateMiseEnServiceDes').value = formattedDate;
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif','image/jpg', 'application/pdf'];
    const cinRecto = document.getElementById('cinRecto').files.length === 0;
    const cinRectoInput = document.getElementById('cinRecto');
    const cinRectoFile = cinRectoInput.files[0];
    if (cinRecto) {
        showError('cinRecto', 'cinRectoError');
        isValid = false;
    } else if (!allowedTypes.includes(cinRectoFile.type)) {
        showError('cinRecto', 'cinRectoError2');
        isValid = false;
    }else {
        hideError('cinRectoError');
    }
    const cinVerso = document.getElementById('cinVerso').files.length === 0;
    const cinVersoInput = document.getElementById('cinVerso');
    const cinVersoFile = cinVersoInput.files[0];
    if (cinVerso) {
        showError('cinVerso', 'cinVersoError');
        isValid = false;
    } else if (!allowedTypes.includes(cinVersoFile.type)) {
        showError('cinVerso', 'cinVersoError2');
        isValid = false;
    }else {
        hideError('cinVersoError');
        hideError('cinVersoError2');
    }
    const codeRio = document.getElementById('codeRio').value.trim();
    const codeRioInput = document.getElementById('codeRio');
    const codeRioFile = codeRioInput.files[0];
    if (codeRio === '') {
        showError('codeRio', 'codeRioError');
        isValid = false;
    } else if (!allowedTypes.includes(codeRioFile.type)) {
        showError('codeRio', 'codeRioError2');
        isValid = false;
    } else {
        hideError('codeRioError');
        hideError('codeRioError2');
    }
    const confirmation = document.getElementById('confirmation').checked;
    if (!confirmation) {
        showError('confirmation', 'confirmationError');
        isValid = false;
    } else {
        hideError('confirmationError');
    }
if (typeIdentity === '') {
    showError('typeIdentity', 'typeIdentityError');
    isValid = false;
} else {
    if (typeIdentity === 'CIN') {
        if (!/^\d{8}$/.test(cin)) {
            showError('cin', 'cinError2');
            isValid = false;
        } else {
            hideError('cinError2');
        }
    } else if (typeIdentity === 'Passeport') {
        if (cin.length < 7 || cin.length > 13 || !/^[a-zA-Z0-9]+$/.test(cin)) {
            showError('cin', 'passportError');
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
                const language = document.documentElement.lang;
                formData.append('language', language);
                const data = {
                    "phoneNumber": formData.get('phoneNumber'),              
                    "ancienOperator": formData.get('ancienOperator'),   
                    "typePerson": formData.get('typePerson'),                                
                    "typeIdentity": formData.get('typeIdentity'),            
                    "prenom": formData.get('prenom'),                
                    "nom": formData.get('nom'),                          
                    "cin": formData.get('cin'),                          
                    "adresse": formData.get('adresse'),             
                    "pays": formData.get('pays'),                  
                    "gouvernorat": formData.get('gouvernorat'),    
                    "ville": formData.get('ville'),                
                    "codePostal": formData.get('codePostal'),               
                    "confirmation": formData.get('confirmation') === 'on' ? true : false,                
                    "cinRecto": formData.get('cinRecto'),  // file   
                    "cinVerso": formData.get('cinVerso'),  // file  
                    "codeRio": formData.get('codeRio'),                   
                    "phone": formData.get('phone'),                  
                    "phoneDesired": formData.get('phoneDesired'),              
                    "email": formData.get('email'),        
                    "dateMiseEnServiceDes": formData.get('dateMiseEnServiceDes'), 
                    "from": formData.get('from') ,    
                    "adresseLivraison": formData.get('adresseLivraison') ,
                    "language": formData.get('language')   
                };
             console.log("data", data);           
                var toastMixin = Swal.mixin({
                    //toast: true,
                    icon: 'success',
                    title: 'General Title',
                    animation: true,
                   // position: 'top-right',
                   /* showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer);
                        toast.addEventListener('mouseleave', Swal.resumeTimer);
                    }*/
                });
                 //   url: 'http://localhost/nety/rest/addportability',
                $.ajax({
                    url:'https://preprod.nety.tn/rest/addportability',
                  
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

   