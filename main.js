status=" ";
video=" ";

function preload() {
    video=createVideo("video.mp4");
    video.hide();
}

function setup() {
    canvas=createCanvas(600,400);
    canvas.center();
}

function draw() {
    image(video, 0,0, 600,400);
}


function start() {
    object_detector=ml5.objectDetector('cocossd', model_loaded);
    document.getElementById("detecting").innerHTML="Detecting objects...";
}

function model_loaded() {
    status=true;
    console.log("Model Loaded!");
    video.loop();
    video.speed(1);
    video.volume(0);
}