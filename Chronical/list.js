// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    document.getElementById("new-date").innerHTML = localStorage.getItem("#new-date");
    document.getElementById("new-title").innerHTML = localStorage.getItem("#new-title");
    document.getElementById("new-text").innerHTML = localStorage.getItem("#new-text");
});


//clear input
var deletes = document.querySelectorAll('#noteList')

deletes.forEach(label =>{
    label.addEventListener('click', function(){
        var li = this.parentNode
        li.remove();
    })
})

