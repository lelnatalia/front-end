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
     
     if (message.length < 10) {
         document.getElementById("messageError").textContent = "Message must be at least 10 characters long.";
         isValid = false;
     }
     
     if (isValid) {
         const formData = new FormData(form);
         
         try {
             const response = await fetch("http://localhost:8000/Desktop/gitclass/front-end/submit-form.php", {
                 method: "POST",
                 headers: {
                     "Content-Type": "application/json"
                 },
                 body: formData,
             });
             
             const result = await response.json();
             
             if (response.ok) {
                 alert("Form submitted successfully!");
                 form.reset();
             } else {
                 alert("Error: " + result.message);
             }
         } catch (error) {
             alert("Submission failed. Please try again later.");
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
         let regex = /^[a-zA-Z0-9 .,!?'"()-@]+$/;
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
         if(this.id ==="email" && this.value !=""){
             let email = document.getElementById("email").value.trim();
             if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                 document.getElementById("emailError").textContent = "Enter a valid email address.";
                 isValid = false;
                }else if(email.length > 150 ){
                    document.getElementById("emailError").textContent = "Name must be 150 characters maximum.";
                    isValid = false;
                }else if(!regex.test(email)){
                    document.getElementById("emailError").textContent = "Invalid email: special characters are not allowed!";
                    isValid = false;
             }else{
                 document.getElementById("emailError").textContent = ""; 
                 isValid = true;}
         }
         if(this.id ==="message" && this.value !=""){
             let message = document.getElementById("message").value.trim();
             if (this.value.trim() =="") {
                document.getElementById("messageError").textContent = "Message cannot be empty or only spaces!";
                isValid = false;
               }else if(message.length > 1000){
                   document.getElementById("messageError").textContent = "Name must be 1000 characters maximum";
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
 