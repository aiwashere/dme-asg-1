/* Start js file for budget */


const dateInput = document.querySelector("#input-date");
const titleInput = document.querySelector("#input-title");
const textInput = document.querySelector("#input-text");
const cancelBtn = document.querySelector("#btn-cancel");
const confirmBtn = document.querySelector("#btn-confirm");
const clearBtn = document.querySelector("#btn-submit");





// date button


$(confirmBtn).click(function(){
  if($(textInput).val() == ''){
     alert('Input cannot be left blank')
    }
    else {
    var newdate = $("#new-date");
    var newtext =$("#new-text");
    var newTitle =$("#new-title")


    localStorage.setItem("#new-date", dateInput.value);
    localStorage.setItem("#new-text", titleInput.value);
    localStorage.setItem("#new-title", textInput.value);

    

  }
});



   
// Back button in edit
function goBack() {
  window.history.back();
}