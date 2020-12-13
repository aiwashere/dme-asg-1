

const firstNameInput = document.querySelector("#input-first-name");
const lastNameInput = document.querySelector("#input-last-name");
const emailInput = document.querySelector("#input-email");
const passwordInput = document.querySelector("#input-password");
const registerButton = document.querySelector("#button-register");


$(registerButton).click(function(){
    if($(firstNameInput,lastNameInput,emailInput,passwordInput).val() == ''){
        alert('Input cannot be left blank')
       }
       
   });




   /* Start js file for budget */


const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#input-amount");
const cancelBtn = document.querySelector("#btn-cancel");
const confirmBtn = document.querySelector("#btn-confirm");
const clearBtn = document.querySelector("#btn-submit");





// expense button


$(confirmBtn).click(function(){
  if($(amountInput).val() == ''){
     alert('Input cannot be left blank')
    }
     else if ($(amountInput).val() <= 0){
      alert('Input cannot be less than 0')

  } else {
    var newExpense = $("#new-expense");
    var newAmount =$("#new-amount");

    const enteredReason = reasonInput.value;
 const enteredAmount = amountInput.value;

    newExpense.append(enteredReason +"<br/>" );
    newAmount.append("$"+ enteredAmount + "<br/>");
  }
});


function goBack() {
  window.history.back();
}