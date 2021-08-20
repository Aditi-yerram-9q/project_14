canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var random_img = ["nasa1.jpg", "nasa2.jpg", "nasa3.jpg", "nasa4.jpg"];
var random_number = Math.floor(Math.random() * 4);
background_image = random_img[random_number];
rover_image = "rover.png";
rover_width = 100;
rover_height = 90;
rover_x = 10;
rover_y = 10;

function add() {
    background_img_tag = new Image();
    background_img_tag.onload = uploadBackground;
    background_img_tag.src = background_image;

    rover_img_tag = new Image();
    rover_img_tag.onload = uploadRoverImg;
    rover_img_tag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_img_tag, 0, 0, canvas.width, canvas.height);
}

function uploadRoverImg() {
    ctx.drawImage(rover_img_tag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", mykeydown);

function mykeydown(e) {
    keypress = e.keyCode;
    console.log(keypress);
    if (keypress == "38") {
        up()
        console.log("up");
    }
    if (keypress == "40") {
        down()
        console.log("down");
    }
    if (keypress == "37") {
        left()
        console.log("left");
    }
    if (keypress == "39") {
        right()
        console.log("right");
    }
}

function up() {
    if (rover_y > 0) {
        rover_y -= 10;
        console.log("when up arrow is pressed, X=" + rover_x + " and y=" + rover_y);
        uploadBackground();
        uploadRoverImg();
    }
}

function down() {
    if (rover_y <= 500) {
        rover_y += 10;
        console.log("when up arrow is pressed, X=" + rover_x + " and y=" + rover_y);
        uploadBackground();
        uploadRoverImg();
    }
}

function left() {
    if (rover_x > 0) {
        rover_x -= 10;
        console.log("when up arrow is pressed, X=" + rover_x + " and y=" + rover_y);
        uploadBackground();
        uploadRoverImg();
    }
}

function right() {
    if (rover_x <= 700) {
        rover_x += 10;
        console.log("when up arrow is pressed, X=" + rover_x + " and y=" + rover_y);
        uploadBackground();
        uploadRoverImg();
    }
}