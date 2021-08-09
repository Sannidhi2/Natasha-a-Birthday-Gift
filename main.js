function preload(){
}

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();

    tint_color="";
}

function draw(){
    image(video,160,130,320,240);

    fill(255,192,203);
    rect(10,10,55,55);

    fill(255,192,203);
    rect(575,10,55,55);

    fill(255,192,203);
    rect(575,415,55,55);

    fill(255,192,203);
    rect(10,415,55,55);


    
    fill(230,230,250);
    rect(65,25,70,20);

    fill(230,230,250);
    rect(28,65,20,70);

    fill(230,230,250);
    rect(505,25,70,20);

    fill(230,230,250);
    rect(594,65,20,70);

    fill(230,230,250);
    rect(65,432,70,20);

    fill(230,230,250);
    rect(28,345,20,70);

    fill(230,230,250);
    rect(505,432,70,20);

    fill(230,230,250);
    rect(594,345,20,70);


    fill(0,255,255);
    circle(95, 80, 40);

    fill(0,255,255);
    circle(540, 80, 40);

    fill(0,255,255);
    circle(90, 385, 40);

    fill(0,255,255);
    circle(540, 385, 40);
}

function take_snapshot(){
    save('Images.png');
}