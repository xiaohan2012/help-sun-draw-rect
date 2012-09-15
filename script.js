window.onload = init;

var rect_w,rect_h;
var rect_x,rect_y;

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
    
    drawComputedLines(canvas , context);
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

function drawComputedLines(canvas,c){
    //draw the AC side line
    var line1_length = getLine1Length();
    var top_line1_length = getK1() * line1_length ; 
    var bottom_left_x = rect_x + line1_length;
    var bottom_left_y = rect_y + rect_h;
    
    var top_left_x = rect_x + top_line1_length;
    console.log(top_line1_length);
    var top_left_y = rect_y;

    c.lineWidth = 3;
    c.strokeStyle = "red";

    c.beginPath();
    c.moveTo(bottom_left_x , bottom_left_y);
    c.lineTo(top_left_x , top_left_y);
    
    c.stroke();

    //draw the BD side line
    var line2_length = getLine2Length();
    var bottom_line2_length = getK2() * line2_length ; 
    var bottom_right_x = rect_x + rect_w - bottom_line2_length ;
    var bottom_right_y = rect_y + rect_h;

    var top_right_x = rect_x + rect_w - line2_length;
    var top_right_y = rect_y;

    c.lineWidth = 3;
    c.strokeStyle = "blue";

    c.beginPath();
    c.moveTo(bottom_right_x , bottom_right_y);
    c.lineTo(top_right_x , top_right_y);

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
    //fill C: top right
    c.fillStyle = "black";
    c.fillText("C" , tr_x , tr_y);
    //fill D: top left
    c.fillStyle = "black";
    c.fillText("D" , tl_x , tl_y);
}

function getRectWidth(){
    var text = document.getElementById("rect-width");
    return parseFloat(text.value);
}

function getRectHeight(){
    var text = document.getElementById("rect-height");
    return parseFloat(text.value);
}

function getLine1Length(){
    var text = document.getElementById("length1");
    return parseFloat(text.value);
}

function getLine2Length(){
    var text = document.getElementById("length2");
    return parseFloat(text.value);
}

function getK1(){
    var text = document.getElementById("k1-value");
    return parseFloat(text.value);
}

function getK2(){
    var text = document.getElementById("k2-value");
    return parseFloat(text.value);
}
function clearCanvas(canvas,c){
    c.fillStyle= "white";
    c.fillRect(0 , 0 , canvas.width , canvas.height);
}
