
var c = 0;
function myFunction(){
    linebreak = document.createElement("br");
    document.body.appendChild(linebreak);

    var x = document.createElement("textarea");
    x.placeholder = "Take a note";
    x.cols="30";
    x.rows="5";
    x.id= c++ + "a";
    x.style.borderRadius= "15px";
    x.style.fontSize= "20px";
    document.body.appendChild(x); 

    var div = document.createElement("div");
    div.style.id = c++ + "a";
    document.getElementById("div.style.id").appendChild(div);


    var img = document.createElement("img");
    img.src = "http://www.google.com/intl/en_com/images/logo_plain.png";
    var src = document.getElementById("div.style.id");
    src.appendChild(img);
}

