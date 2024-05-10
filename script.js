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
//functie ca sa intru pe produsul din index.html
document.getElementById("produsul1").addEventListener("click", function() {
    window.location.href = "sproduct.html";
    });

// Funcția pentru validarea formularului
function validateForm() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var subject = document.getElementById("subject");
    var message = document.getElementById("message");
    var isValid = true;

    // Validarea numelui, emailului, subiectului și mesajului aici...
    var nameRegex = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
    if (!nameRegex.test(name.value)) {
        name.style.border = "2px solid red";
        isValid = false;
    } else {
        name.style.border = "";
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        email.style.border = "2px solid red";
        isValid = false;
    } else {
        email.style.border = "";
    }

    if (subject.value.trim().length < 5) {
        subject.style.border = "2px solid red";
        isValid = false;
    } else {
        subject.style.border = "";
    }

    if (message.value.trim().length < 10) {
        message.style.border = "2px solid red";
        isValid = false;
    } else {
        message.style.border = "";
    }

    return isValid;
}

// Adăugăm un ascultător de eveniment pentru click-ul butonului de submit
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
//functie ca sa intru pe produsul din index.html
const product1 = document.getElementById("produsul1");
if (product1) {
    product1.addEventListener("click", function() {
        window.location.href = "sproduct.html";
    });
}
