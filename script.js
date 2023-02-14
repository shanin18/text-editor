function findElement(id){
    const element = document.getElementById(id);
    return element;
}

// function bold
document.getElementById("bold").addEventListener("click",function(){
    const element = findElement("textarea");
    element.classList.toggle("bold")
});

// function italic
document.getElementById("italic").addEventListener("click",function(){
    const element = findElement("textarea");
    element.classList.toggle("italic");
});

// function underline
document.getElementById("underline").addEventListener("click",function(){
    const element = findElement("textarea");
    element.classList.toggle("underline");
});

// function text-left
document.getElementById("text-left").addEventListener("click",function(){
    const element = findElement("textarea");
    element.style.textAlign = "left";
});

// function text-center
document.getElementById("text-center").addEventListener("click",function(){
    const element = findElement("textarea");
    element.style.textAlign = "center";
});

// function text-right
document.getElementById("text-right").addEventListener("click",function(){
    const element = findElement("textarea");
    element.style.textAlign = "right";
});

// function text-justify
document.getElementById("text-justify").addEventListener("click",function(){
    const element = findElement("textarea");
    element.style.textAlign = "justify";
});

// function font-size
document.getElementById("font-size").addEventListener("change",function(e){
    const element = findElement("textarea");
    const value = e.target.value;
    element.style.fontSize = value +"px";
    console.log(value)
});

// function upperCase
document.getElementById("upperCase").addEventListener("click", function(){
    const element = findElement("textarea");
    element.classList.toggle("upperCase")
});

// function changeColor
document.getElementById("changeColor").addEventListener("change", function(e){
    const element = findElement("textarea");
    const value = e.target.value;
    element.style.color = value;
});