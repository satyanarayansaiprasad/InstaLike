var love = document.querySelector("i");
var con = document.querySelector("#container");
document.querySelector("h1").innerHTML = "Double Tap to Like";


con.addEventListener("dblclick", function(){
    love.style.transform = "translate(-50%, -50%) scale(1)";
    love.style.opacity = "0.8";
    document.querySelector("h1").innerHTML = "Liked";
    setTimeout(function(){
        document.querySelector("h1").innerHTML = "Double Tap to Like";
        love.style.opacity = "0";
    }, 500);
    setTimeout(function(){
        love.style.transform = "translate(-50%, -50%) scale(0)";
    }, 2000);
});
