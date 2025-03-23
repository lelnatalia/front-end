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
          if(document.getElementById("nameError").textContent != "" ){
              let name = document.getElementById("name").value.trim();
              if (document.getElementById("name").value.trim().length < 3 || /[^a-zA-Z ]/.test(name)) {
                  document.getElementById("nameError").textContent = "Name must be at least 3 characters and contain only letters.";
                  isValid = false;
              }else{
                  document.getElementById("nameError").textContent = ""; 
                  isValid = true;}
          }
          if(document.getElementById("emailError").textContent != ""){
              let email = document.getElementById("email").value.trim();
              if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                  document.getElementById("emailError").textContent = "Enter a valid email address.";
                  isValid = false;
              }else{
                  document.getElementById("emailError").textContent = ""; 
                  isValid = true;}
          }
          if(document.getElementById("messageError").textContent != ""){
              let message = document.getElementById("message").value.trim();
              if (message.length < 10) {
                  document.getElementById("messageError").textContent = "Message must be at least 10 characters long.";
                  isValid = false;
              }else{
                  document.getElementById("messageError").textContent = ""; 
                  isValid = true;}
          }
      });
  });
  });
  