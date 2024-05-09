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
    function validateForm() {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var subject = document.getElementById("subject").value;
        var message = document.getElementById("message").value;
        var isValid = true;
    
        // Validare nume
        var nameRegex = /^[A-Za-z\s]+$/; // Expresie regulată pentru a verifica numele format doar din litere și spații
        if(!nameRegex.test(name) || name.length < 6 || name.length > 7 || /[^\w\s]/.test(name)) { // Verificăm și lungimea minimă și maximă a numelui, precum și prezența altor caractere speciale
            alert("Please enter a valid name with exactly two words, each with 6 to 7 characters and containing only letters and spaces");
            isValid = false;
        }
    
        // Validare email
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresie regulată pentru validarea adresei de email
        if(!emailRegex.test(email) || !email.includes('@')) {
            alert("Please enter a valid email address");
            isValid = false;
        }
    
        // Validare subiect
        if(subject.trim().length < 5) { // Adaugăm o validare pentru lungimea minimă a subiectului
            alert("Please enter a subject with at least 5 characters");
            isValid = false;
        }
    
        // Validare mesaj
        if(message.trim().length < 10) { // Adaugăm o validare pentru lungimea minimă a mesajului
            alert("Please enter a message with at least 10 characters");
            isValid = false;
        }
    
        return isValid;
    }
    // Path: contact.html
    const form = document.getElementById('contact-form');
    if(form) {
        form.addEventListener('submit', (event) => {
            if(!validateForm()) {
                event.preventDefault();
            }
        });
    }
