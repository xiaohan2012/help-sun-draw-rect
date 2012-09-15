window.onload = init;

var rect_w,rect_h;
var rect_x,rect_y;
var bottom_left_x , bottom_left_y;
var top_left_x , top_left_y;

function init(){
    var viewBtn = document.getElementById("view");
    viewBtn.onclick = viewHandler;    
    viewBtn.click();
}
function viewHandler(){
    var canvas = document.getElementById("rect-canvas");
    var context = canvas.getContext("2d");
    clearCanvas(canvas,context);

    drawRect(canvas,context);
    markRectPoints(canvas , context);

    drawBottomLine(canvas , context);
    drawTopLine(canvas , context);

    concatBottomTop(canvas , context);
}

function drawRect(canvas,c){
    rect_w = getRectWidth();
    rect_h = getRectHeight();
    rect_x = (canvas.width - rect_w) / 2;
    rect_y = (canvas.height - rect_h) / 2;
    c.strokeStyle = "black";
    c.lineWidth = 2;
    c.strokeRect( rect_x , rect_y , rect_w , rect_h);
}

function drawBottomLine(canvas , c){
    c.lineWidth = 3;
    c.strokeStyle = "red";

    c.beginPath();
    c.moveTo(rect_x , rect_y + rect_h)

    bottom_left_x = rect_x + getBottomLineLength();
    bottom_left_y = rect_y + rect_h;
    c.lineTo( bottom_left_x , bottom_left_y );

    c.stroke()
}

function drawTopLine(canvas , c){
    var length = getK() * getBottomLineLength(); 

    c.lineWidth = 3;
    c.strokeStyle = "red";

    c.beginPath();
    c.moveTo(rect_x,rect_y);

    top_left_x = rect_x + length;
    top_left_y = rect_y;
    c.lineTo(top_left_x , top_left_y);

    c.stroke();
}

function concatBottomTop(canvas , c){
    c.lineWidth = 3;
    c.strokeStyle = "red";
    c.beginPath();
    c.moveTo(bottom_left_x,bottom_left_y);

    c.lineTo(top_left_x , top_left_y);

    c.stroke();
}
function markRectPoints(canvas , c){
    var offset = 20;
    //bottom left x and y
    var bl_x = rect_x - offset;
    var bl_y = rect_y + rect_h + offset;

    //bottom right x and y
    var br_x = rect_x + rect_w + offset;
    var br_y = rect_y + rect_h + offset;

    //top left x and y
    var tl_x = rect_x - offset; 
    var tl_y = rect_y - offset;

    //top right x and y
    var tr_x = rect_x + rect_w + offset; 
    var tr_y = rect_y - offset;

    c.font = "20px italic";
    //fill A: bottom left 
    c.fillStyle = "black";
    c.fillText("A" , bl_x , bl_y);
    //fill B: bottom right 
    c.fillStyle = "black";
    c.fillText("B" , br_x , br_y);
    //fill C: top left
    c.fillStyle = "black";
    c.fillText("C" , tl_x , tl_y);
    //fill D: top right
    c.fillStyle = "black";
    c.fillText("D" , tr_x , tr_y);
}

function getRectWidth(){
    var text = document.getElementById("rect-width");
    return parseFloat(text.value);
}

function getRectHeight(){
    var text = document.getElementById("rect-height");
    return parseFloat(text.value);
}

function getBottomLineLength(){
    var text = document.getElementById("length");
    return parseFloat(text.value);
}

function getK(){
    var text = document.getElementById("k-value");
    return parseFloat(text.value);
}

function clearCanvas(canvas,c){
    c.fillStyle= "white";
    c.fillRect(0 , 0 , canvas.width , canvas.height);
}
