/* Start js file for budget */


const nameInput = document.querySelector("#input-name");
const usernameInput = document.querySelector("#input-username");
const emailInput = document.querySelector("#input-email");
const passwordInput = document.querySelector("#input-cancel");
const confirmBtn = document.querySelector("#btn-submit");






// confirm button

    $(confirmBtn).click(function(){
        if($(emailInput).val() == ''){
           alert('Input cannot be left blank');
         
          }
          else { 
          var newname = $("#new-name");
          var newemail =$("#new-email");
          var newusername =$("#new-username");
          var newpassword =$("#new-password");
          
      
        
          localStorage.setItem("#new-name", nameInput.value);
          localStorage.setItem("#new-email", emailInput.value);
          localStorage.setItem("#new-username", usernameInput.value);
          onclick="goProfile()";
      
        
          
      
      
        }


});



// Back button in edit
function goProfile() {
    window.location.href='./profile.html';
}