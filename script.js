var container = document.querySelector(".container");
container.addEventListener("click", function(){
    var container = document.querySelector(".container").classList.toggle("show-menu");
});

var counter=1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter>27){
        counter=1;
    }
},5000);