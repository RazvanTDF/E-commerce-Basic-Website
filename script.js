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
// Funcția pentru a salva datele într-un fișier text
function saveDataToFile() {
    var formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    // Convertim obiectul formData într-un șir de text formatat
    var dataString = '';
    for (var key in formData) {
        if (formData.hasOwnProperty(key)) {
            dataString += key + ': ' + formData[key] + '\n';
        }
    }

    // Cream un obiect Blob cu datele și un fișier cu extensia .txt
    var blob = new Blob([dataString], { type: 'text/plain' });

    // Creăm un element de ancoră pentru a descărca fișierul
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'formData.txt';

    // Adăugăm elementul de ancoră la document și simulăm un click pe el pentru a descărca fișierul
    document.body.appendChild(a);
    a.click();

    // Ștergem elementul de ancoră din document
    document.body.removeChild(a);
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
    
}// Function to update the subtotal price based on the quantity
function updateSubtotal() {
    const quantityInput = document.getElementById('quantity');
    const priceElement = document.getElementById('price');
    const subtotalElement = document.getElementById('subtotal');

    // Obțineți textul prețului și eliminați toate caracterele non-numerice
    const priceText = priceElement.innerText.replace(/\D/g, '');

    // Convertiți textul prețului într-un număr
    const price = parseInt(priceText);

    const quantity = parseInt(quantityInput.value);

    // Calculează subtotalul
    const subtotal = quantity * price;

    // Actualizează subtotalul în HTML
    subtotalElement.innerText = '$' + subtotal.toLocaleString(); // Formatul numărului pentru a afișa virgulele
}

// Adăugați un ascultător de eveniment pentru input-ul de cantitate
const quantityInput = document.getElementById('quantity');
if (quantityInput) {
    quantityInput.addEventListener('input', updateSubtotal);
}
// Funcția pentru actualizarea subtotalului și totalului în funcție de cantitate
function updateCartTotals() {
    const quantityInput = document.getElementById('quantity');
    const priceElement = document.getElementById('price');
    const subtotalElement = document.getElementById('cart-subtotal');
    const totalElement = document.getElementById('cart-total');

    const quantity = parseFloat(quantityInput.value);
    const price = parseFloat(priceElement.innerText.replace('$', ''));

    const subtotal = quantity * price;
    const total = subtotal; // Totalul este același ca subtotalul în acest exemplu

    subtotalElement.innerText = '$' + subtotal.toFixed(2);
    totalElement.innerText = '$' + total.toFixed(2);
}

// Adăugăm un ascultător de eveniment pentru câmpul de introducere a cantității
    if (quantityInput) {
    quantityInput.addEventListener('input', updateCartTotals);
}

// Funcția pentru aplicarea cuponului
function applyCoupon() {
    const couponInput = document.getElementById('coupon-input');
    const couponCode = couponInput.value.trim();

    if (couponCode === "razvitdf") {
        const subtotal = document.getElementById('cart-subtotal');
        const total = document.getElementById('cart-total');

        const newSubtotal = parseFloat(subtotal.innerText.replace('$', '').trim()) - 1000;
        const newTotal = parseFloat(total.innerText.replace('$', '').trim()) - 1000;

        subtotal.innerText = '$' + newSubtotal.toFixed(2);
        total.innerText = '$' + newTotal.toFixed(2);

        applyButton.removeEventListener('click', applyCoupon);
        applyButton.disabled = true;
    }
}

// Adăugați un ascultător de eveniment pentru butonul "Apply"
const applyButton = document.getElementById('apply-coupon-button');
if (applyButton) {
    applyButton.addEventListener('click', applyCoupon);
}