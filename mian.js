mouseEvent = "";

canvas = 
document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", my,mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line")
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";
}