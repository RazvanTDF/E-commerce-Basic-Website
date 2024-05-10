 const bar=document.getElementById('bar');
   const close=document.getElementById('close');
   const nav=document.getElementById('navbar');

     if(bar){
       bar.addEventListener('click',()=>{
           nav.classList.add('active');
       });
   }
    if(close){
         close.addEventListener('click',()=>{
              nav.classList.remove('active');
         });
    }
// Funcția pentru validarea formularului
// Funcția pentru validarea formularului
function validateForm() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var subject = document.getElementById("subject");
    var message = document.getElementById("message");
    var isValid = true;
    // Validarea numelui
    var nameRegex = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
    if (!nameRegex.test(name.value)) {
        name.style.border = "2px solid red";
        isValid = false;
        window.alert('Numele trebuie să conțină două cuvinte cu prima literă mare pentru fiecare, separate de un spațiu.');
    } else {
        name.style.border = "";
    }
    // Validarea emailului
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        email.style.border = "2px solid red";
        isValid = false;
        window.alert('Adresa de email trebuie să fie într-un format valid (exemplu: nume@exemplu.com).');
    } else {
        email.style.border = "";
    }
    // Validarea subiectului
    if (subject.value.trim().length < 5) {
        subject.style.border = "2px solid red";
        isValid = false;
        window.alert('Subiectul trebuie să conțină cel puțin 5 caractere.');
    } else {
        subject.style.border = "";
    }
    // Validarea mesajului
    if (message.value.trim().length < 10) {
        message.style.border = "2px solid red";
        isValid = false;
        window.alert('Mesajul trebuie să conțină cel puțin 10 caractere.');
    } else {
        message.style.border = "";
    }

    return isValid;
}
const submitButton = document.getElementById('submit-button');
if (submitButton) {
    submitButton.addEventListener('click', (event) => {
        if (!validateForm()) {
            event.preventDefault(); // Prevenim trimiterea formularului dacă nu este valid
            window.alert('Formularul conține erori. Vă rugăm să verificați din nou datele introduse.'); // Afișăm un mesaj de alertă cu erorile de validare
        } else {
            // Afișăm un mesaj de confirmare simplu
            var confirmation = window.confirm('Datele au fost completate corect. Confirmați trimiterea formularului?');
            if (!confirmation) {
                event.preventDefault(); // Prevenim trimiterea formularului dacă utilizatorul a anulat confirmarea
            } else {
                saveDataToFile(); // Salvăm datele într-un fișier text dacă formularul este valid și utilizatorul confirmă
            }
        }
    });
}

// Adăugăm un ascultător de eveniment pentru submit-ul formularului
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevenim comportamentul implicit de trimitere a formularului

        if (validateForm()) {
            saveDataToFile(); // Salvăm datele într-un fișier text dacă formularul este valid
        } else {
            window.alert('Formularul conține erori. Vă rugăm să verificați din nou datele introduse.'); // Afișăm un mesaj de alertă cu erorile de validare
        }
    });
    
}
