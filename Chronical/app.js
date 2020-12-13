

   /* Start js file for registration */
const firstNameInput = document.querySelector("#input-first-name");
const lastNameInput = document.querySelector("#input-last-name");
const emailInput = document.querySelector("#input-email");
const passwordInput = document.querySelector("#input-password");
const registerButton = document.querySelector("#button-register");


$(registerButton).click(function(){
    if($(firstNameInput,lastNameInput,emailInput,passwordInput).val() == ''){
        alert('Input cannot be left blank')
       }   
   }
   );

  

   
   
// Back button in edit
function goBack() {
  window.history.back();
}