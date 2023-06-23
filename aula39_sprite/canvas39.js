let canvas = document.getElementById('desenho1')
let ctx = canvas.getContext('2d')
const CANVAS_WIDTH=canvas.width=778
const CANVAS_HEIGHT=canvas.height=625
const spriteWidth= 1038
const spriteHeight= 833
let gameFrame = 0
let stagger = 0

const staggerFrame = 2

const myImg = document.getElementById('myImg')

function animate(){
    if((stagger % staggerFrame)==0){
            ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
            let frameX = spriteWidth*(gameFrame % 7)
            let frameY = spriteHeight*3
            ctx.drawImage(myImg, frameX,frameY, spriteWidth, spriteHeight,0,0, CANVAS_WIDTH, CANVAS_HEIGHT)
            gameFrame++
            
        }
        stagger++
    requestAnimationFrame(animate)
    
    }
      

animate()