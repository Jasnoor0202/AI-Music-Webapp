Peter_pan_song="";
Harry_potter_theme_song="";
leftwristx = 0;
leftwristy = 0;
rightwristx = 0;
rightwristy = 0;

function preload(){
    Peter_pan_song = loadSound("PeterPan.mp3");
    Harry_potter_theme_song = loadSound("Harry Potter");
}

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('poseNet is initialised');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftwristx = results[0].pose.leftWrist.x;
        leftwristy = results[0].pose.leftWrist.y;
        rightwristx = results[0].pose.rightWrist.x;
        rightwristy = results[0].pose.rightWrist.y;
        console.log("leftwristx = " + leftwristx + "leftwristy = " + leftwristy);
        console.log("rightwristx = " + rightwristx + "rightwristy = " + rightwristy);
    }
}

function draw(){
    image(video,0,0,600,530);
}

function play(){
    song.play();
    song.volume(1);
    song.rate(1);
}