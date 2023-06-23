let canvas = document.getElementById('desenho1')
let ctx = canvas.getContext('2d')
const CANVAS_WIDTH=canvas.width=900
const CANVAS_HEIGHT=canvas.height=1100
const spriteWidth= 800
const spriteHeight= 1198
let gameFrame = 0
let stagger = 0

const staggerFrame = 2

const myImg = document.getElementById('myImg')

function animate(){
    if((stagger % staggerFrame)==0){
            ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
            let frameX = spriteWidth*(gameFrame % 4)
            let frameY = spriteHeight*3
            ctx.drawImage(myImg, frameX,frameY, spriteWidth, spriteHeight,0,0, CANVAS_WIDTH, CANVAS_HEIGHT)
            gameFrame++
            
        }
        stagger++
    requestAnimationFrame(animate)
    
    }
      

animate()