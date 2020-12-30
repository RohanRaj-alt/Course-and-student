

function update(){
    var x = document.createElement("INPUT");
    
    x.setAttribute("type", "text");
    x.style.marginTop = "10px";
    x.style.width="150px";
    x.style.padding = "4px 8px";
    document.getElementById("coursename").appendChild(x);
    var x1 = document.createElement("button");
    x1.innerHTML = "&#10004";
    x1.style.margin = "5px";
    x1.style.cursor ="pointer";
    document.getElementById("coursename").appendChild(x1);
    var x2 = document.createElement("button");
    x2.innerHTML = "&#10006";
    x2.style.margin = "5px";
    x2.style.cursor ="pointer";
    document.getElementById("coursename").appendChild(x2);
    x1.onclick() = function add() {
        var a1 = document.getElementById("course");
        var option = document.createElement("option");
        option.text = x.value;
        a1.add(option);
    }
    x2.onclick() = function rem(){
        x.parentNode.removeChild(x);
    }
}

function update2() {
    var y = document.createElement("INPUT");
    y.setAttribute("type", "text");
    y.style.marginTop = "10px";
    y.style.width="150px";
    y.style.padding = "4px 8px";
    document.getElementById("studentname").appendChild(y);
    var y1 = document.createElement("button");
    y1.innerHTML = "&#10004";
    y1.style.margin = "5px";
    y1.style.cursor ="pointer";
    document.getElementById("studentname").appendChild(y1);
    var y2 = document.createElement("button");
    y2.innerHTML = "&#10006";
    y2.style.margin = "5px";
    y2.style.cursor ="pointer";
    document.getElementById("studentname").appendChild(y2);

}