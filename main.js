nosex=0;
nosey=0;
function preload(){
clown_image=loadImage("https://i.postimg.cc/d1TDq3d3/Clown-Nose-PNG-High-Quality-Image.png");
mustache=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}
function gotPoses(results){
    if (results.length>0){console.log(results);
        console.log("noseX= "+results[0].pose.nose.x);
        console.log("nosey= "+results[0].pose.nose.y);
        nosex=results[0].pose.nose.x-15;
        nosey=results[0].pose.nose.y-10;
    }
}
function modelLoaded(){
    console.log("posenet is loaded");
}
function draw(){
image(video, 0,0,300,300);
image(clown_image,nosex,nosey,30,30);
image(mustache,nosex-10,nosey+20,50,30);
}

function take_snapshot(){
    save('pic.png');
}