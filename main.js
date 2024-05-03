noseX=0;
noseY=0;
diff=0
rWX=0;
lWX=0;
function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,100);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses); 
}

function draw(){
    background("grey");
    document.getElementById("square_side").innerHTML = "Width And Height of Your Square Will Be  "+diff+"px";
    fill("turquoise");
    stroke("turquoise");
    square(noseX,noseY,diff);
}

function modelLoaded()
{
    console.log("PoseNet Model is successfuly rickrolled! XD");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseX = results[0].pose.nose.y;
        console.log("noseX = " + noseX +"noseY = " + noseY);

        lWX = results[0].pose.leftWrist.x;
        rWX = results[0].pose.rightWrist.x;
        diff= floor(lWX - rWX);
    }
}

