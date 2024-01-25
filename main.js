function setup() {
    video = createCapture(VIDEO);
    video.size(550,550);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
console.log("Pose Net I Initialized!");
}

function gotPoses() {
    if(results.length>0) {
        console.log(results);
        noseX = results.pose.nose.x;
        noseY = results.pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftWristX = results[0].pose.leftWristX;
        rightWristX = results[0].pose.rightWristX;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}

function draw() {
    background("white");
}