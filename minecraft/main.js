var canvas = new fabric.Canvas('myCanvas');
block_img_width=30;
block_img_height=30;
player_x=10;
player_y=10;
player_object= "";
block_image_object= "";

function player_update(){
    fabric.Image.fromURL("body.png", function(Img) {
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}
function new_Image(get_Image){
    fabric.Image.fromURL(get_Image, function(Img) {
        block_image_object=Img;

        block_image_object.scaleToWidth(block_img_width);
        block_image_object.scaleToHeight(block_img_height);
        block_image_object.set({
            top:player_y,
            left:player_x+100
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{ 
    keypressed = e.keyCode;
    console.log(keypressed);
    if (e.shiftKey == true && keypressed == '80'){
        console.log("shift and p pressed");
        block_img_height = block_img_height + 10;
        block_img_width = block_img_width + 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }
    if (e.shiftKey == true && keypressed == '77'){
        console.log("shift and m pressed");
        block_img_height = block_img_height - 10;
        block_img_width = block_img_width - 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }
    if (keypressed == '38'){
        up();
        console.log("up pressed");
    }
    if (keypressed == '39'){
        right();
        console.log("right pressed");
    }
    if (keypressed == '40'){
        down();
        console.log("down pressed");
    }
    if (keypressed == '37'){
        left();
        console.log("left pressed");
    }
    if (keypressed == '87'){
        new_Image("wall.jpg");
        console.log("w");
    }
    if (keypressed == '71'){
        new_Image("ground.png");
        console.log("g");
    }
    if (keypressed == '76'){
        new_Image("light_green.png");
        console.log("l");
    }
    if (keypressed == '84'){
        new_Image("trunk.jpg");
        console.log("t");
    }
    if (keypressed == '82'){
        new_Image("roof.jpg");
        console.log("r");
    }
    if (keypressed == '89'){
        new_Image("yellow_wall.png");
        console.log("y");
    }
    if (keypressed == '68'){
        new_Image("dark_green.png");
        console.log("d");
    }
    if (keypressed == '85'){
        new_Image("unique.png");
        console.log("u");
    }
    if (keypressed == '67'){
        new_Image("cloud.png");
        console.log("c");
    }
} 
function up(){
    if (player_y >= 0){
        player_y = player_y - block_img_height;
        console.log("block height = " + block_img_height);
        console.log("When up arrow is pressed player y = "+player_y+" player x = "+player_x);
        canvas.remove(player_object);
        player_update();
    }
} 
function down(){
    if (player_y <= 500){
        player_y = player_y + block_img_height;
        console.log("block height = " + block_img_height);
        console.log("When down arrow is pressed player y = "+player_y+" player x = "+player_x);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if (player_x >= 0){
        player_x = player_x - block_img_height;
        console.log("block height = " + block_img_height);
        console.log("When up arrow is pressed player y = "+player_y+" player x = "+player_x);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if (player_x <= 850){
        player_x = player_x + block_img_height;
        console.log("block height = " + block_img_height);
        console.log("When up arrow is pressed player y = "+player_y+" player x = "+player_x);
        canvas.remove(player_object);
        player_update();
    }
}