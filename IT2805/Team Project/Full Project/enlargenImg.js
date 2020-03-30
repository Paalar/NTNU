/**
 * Created by Peter on 11.10.2016.
 */

/**
function getImg(){
    var folder = "img/img/downsize/";

    content += "<p class='imageHolder'>";
    content += "<img id='flag' onclick=\"flagContent('" + attachmentInfo.url + "')\" src='file.png'/>";
    content += "Flag as inappropriate...";
    content += "</p>";
}
**/



function resize(getSize) {
    img = document.getElementById("enlargenable");
    simg = document.getElementById("enlargenable").src;

    console.log(getSize);
    console.log(img.src.indexOf(getSize));

    if(img.src.indexOf(getSize)){
        console.log("large");
        img.src = getSize;
    }
    else {
        console.log("small");
        img = simg;
    }
}