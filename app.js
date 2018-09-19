var firstDay = document.getElementById("firstDay");
var info = document.getElementById("info")

firstDay.addEventListener('mouseover', function(){
    info.innerHTML = "This is the first day of 2019! Happy Belated New Year!"
})
firstDay.addEventListener('mouseout', function(){
    info.innerHTML = "";
})