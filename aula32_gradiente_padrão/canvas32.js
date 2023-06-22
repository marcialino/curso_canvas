let canvas = document.getElementById('desenho1')

let ctx = canvas.getContext('2d')

let padrao1= new Image()
let padrao2= new Image()

padrao1.src='imagens/padrao1.jpg'

padrao2.src='imagens/padrao2.jpg'

padrao1.onload=()=>{
    let ptrn=ctx.createPattern(padrao1, 'repeat')
    ctx.fillStyle=ptrn
    ctx.fillRect(0,0,300,300);
    
}
padrao2.onload=function () { 
  let ptrn = ctx.createPattern(padrao2, 'repeat')
  ctx.fillStyle = ptrn
  ctx.fillRect(350,0,300,300)
 }
