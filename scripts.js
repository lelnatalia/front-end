document.addEventListener("DOMContentLoaded", () => {
   const hamburger = document.getElementById("hamburger-id"); // gets DIV hamburger to listen for clicks
   const menu = document.getElementById("mobile-menu-list-id"); // gets DIV with mobile menu items
   const btn = document.getElementById("dropbtn"); //gets DIV containing hamburger to change it's border color
 
   hamburger.addEventListener("click", () => {
     //triggered when hamburger cliked
     menu.classList.toggle("show"); // adds/removes visible style to mobile pop-up menu
     btn.classList.toggle("cliked"); // adds/removes green border style around hamburger
   });
       
   
   const form = document.getElementById("contactForm");
   form.addEventListener("submit", async function(event) {
     event.preventDefault();
 
     let isValid = true;
   let name = document.getElementById("name").value.trim();
   let email = document.getElementById("email").value.trim();
   let message = document.getElementById("message").value.trim();
   
   document.getElementById("nameError").textContent = "";
   document.getElementById("emailError").textContent = "";
   document.getElementById("messageError").textContent = "";
     if (name.length < 3 || /[^a-zA-Z ]/.test(name)) {
         document.getElementById("nameError").textContent = "Name must be at least 3 characters and contain only letters.";
         isValid = false;
     }else{isValid = true;}
     
     if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
         document.getElementById("emailError").textContent = "Enter a valid email address.";
         isValid = false;
     }
     
     if (message.length < 1) {
         document.getElementById("messageError").textContent = "Message cannot be empty or only spaces!";
         isValid = false;
     }
     
     if (isValid) {
         const formData = new FormData(form);
         
         try {
             const response = await fetch("https://leleko.net/natalia/submit-form.php", {
                 method: "POST",
                 headers: {
                     "Content-Type": "application/json"
                 },
                 body: formData,
             });
             
             const result = await response.json();
             
             if (response.ok) {
                document.getElementById("nameError").textContent = "Form submitted successfully!"; 
                alert("Form submitted successfully!");
                 form.reset();
             } else {
                document.getElementById("nameError").textContent = "Error: " + result.message;
                 alert("Error: " + result.message);
             }
         } catch (error) {
            document.getElementById("nameError").textContent = "Submission failed. Please try again later.." + error;
             alert("Submission failed. Please try again later..");
             console.error("Error submitting form:", error);
         }
         
     }
 });
 
 document.querySelectorAll("input, textarea").forEach(element => {
     element.addEventListener("focus", function() {
         this.classList.add("highlight");
     });
     element.addEventListener("blur", function() {
         this.classList.remove("highlight");
         if(this.id ==="name" && this.value !=""){  
             let name = document.getElementById("name").value.trim();
             if (name.length < 3 || /[^a-zA-Z ]/.test(name)) {
                 document.getElementById("nameError").textContent = "Name must be at least 3 characters and contain only letters.";
                 isValid = false;
             }else if(name.length > 150 ){
                    document.getElementById("nameError").textContent = "Name must be 150 characters maximum";
                    isValid = false;
             }else{
                 document.getElementById("nameError").textContent = ""; 
                 isValid = true;}
            }
            if (this.id === "email" && this.value.trim() !== "") {
                let emailField = document.getElementById("email");
                let email = emailField.value.trim();
                let emailError = document.getElementById("emailError");
            
                let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Standard email format check
                let allowedCharsRegex = /^[a-zA-Z0-9._%+-@]+$/; // Allows valid email characters
            
                if (!emailRegex.test(email)) {
                    emailError.textContent = "Enter a valid email address.";
                    isValid = false;
                } else if (email.length > 150) {
                    emailError.textContent = "Email must be 150 characters maximum.";
                    isValid = false;
                } else if (!allowedCharsRegex.test(email)) {
                    emailError.textContent = "Invalid email: special characters are not allowed!";
                    isValid = false;
                } else {
                    emailError.textContent = "";
                    isValid = true;
                }
            }
         if(this.id ==="message" && this.value !=""){
             let message = document.getElementById("message").value.trim();
             let regex = /^[a-zA-Z0-9 .,!?'"()-@]+$/;
             if (this.value.trim() =="") {
                document.getElementById("messageError").textContent = "Message cannot be empty or only spaces!";
                isValid = false;
               }else if(message.length > 1000){
                   document.getElementById("messageError").textContent = "Message must be 1000 characters maximum";
                   isValid = false;
               }else if(!regex.test(message)){
                   document.getElementById("messageError").textContent = "Invalid message: special characters are not allowed!";
                   isValid = false;
             }else{
                 document.getElementById("messageError").textContent = ""; 
                 isValid = true;}
         }
     });
 });
 });
 