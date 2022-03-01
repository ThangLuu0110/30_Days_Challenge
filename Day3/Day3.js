var y_axis = 0;
var a;

function appear(){
    y_axis += 350;
    document.getElementsByClassName("modal")[0].style.transform = "translateY("+y_axis+"px)";
    document.getElementsByClassName("cover")[0].style.display = "initial";
}

function disappear(){
    y_axis -= 350;
    document.getElementsByClassName("modal")[0].style.transform = "translateY("+y_axis+"px)";
    document.getElementsByClassName("cover")[0].style.display = "none";
}