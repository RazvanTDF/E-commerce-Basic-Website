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
            }
        }
    });
}