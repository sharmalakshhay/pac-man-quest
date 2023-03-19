var gameState = "wait"
var bgimg, splashscreen


function preload() {

    bgimg = loadImage("assets/splashscreenimg.png")



}


function setup() {
    createCanvas(windowWidth, windowHeight)

    // splashscreen = createSprite(width/2,height/2)
    // splashscreen.addImage(bgimg)




}


function draw() {
    background(bgimg)

}