<!--


// initial images (pre-load)
if (document.images) {
for (i=0; i<imgArray.length; i++) {
eval("imgObj" + i + "= new Image()");
eval("imgObj" + i + ".src = '" + imgDir + imgArray[i] + "'");
}
} 


function toPrevious() {

if (pos == 0) { pos = imgArray.length - 1; }
else { pos = pos - 1 };

eval("document.screenshots.src = imgObj"+pos+".src");
//document.theForm.desc.value = descArray[pos]; 
}

function toNext() {

if (pos == imgArray.length - 1) { pos = 0; }
else { pos = pos + 1; }

eval("document.screenshots.src = imgObj"+pos+".src");
//    document.theForm.desc.value = descArray[pos];
}


//-->

