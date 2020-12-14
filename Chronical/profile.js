// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    document.getElementById("new-name").innerHTML = localStorage.getItem("#new-name");
    document.getElementById("new-email").innerHTML = localStorage.getItem("#new-email");
    document.getElementById("new-username").innerHTML = localStorage.getItem("#new-username");
    document.getElementById("new-desc").innerHTML = localStorage.getItem("#new-desc");
    document.getElementById("new-birth").innerHTML = localStorage.getItem("#new-birth");
});

const descInput = document.querySelector("#input-desc");
const birthInput = document.querySelector("#input-birth");
const updatebtn = document.querySelector("#btn-update");


$(updatebtn).click(function(){
    if($(birthInput).val() == ''){
        alert('Input cannot be left blank')
    }
    else {
      var newdesc = $("#new-desc");
      var newbirth =$("#new-birth");
     
  
  
      localStorage.setItem("#new-desc", descInput.value);
      localStorage.setItem("#new-birth", birthInput.value);

     
     
   
  
    }
  });
  
  
    
// Back button in edit
function goBack() {
    window.location.href='./list.html';
  }