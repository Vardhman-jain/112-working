function preload() {
    
}
function setup() {
    canvas=createCanvas(600,600);
    canvas.position(15, 300);
    video=createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 15 , 300, 200,200);
    fill(255, 0, 0);
     stroke(255, 0, 0);
      circle(50, 50, 80);
       circle(50, 430, 80);
        circle(590, 50, 80); circle(590, 430, 80);
         fill(0, 255, 255); stroke(0, 128, 0); rect(90, 40, 460, 20); rect(90, 420, 460, 20); rect(40, 90, 20, 300); rect(580, 90, 20, 300);

}
function take_snapshot()
{ save('student_name.png'); }