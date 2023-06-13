let canvas = document.getElementById('desenho1')
let ctx = canvas.getContext('2d')

function desenha(){

    /*Desenhando o aro. Define> posição x e y, ângulo inicial e final, 
    sentido: true para horário, false para anti-horário
    ângulo em radiano = (pi/180) x angulo em grau. no local do ângulo coloque esta fórmula. Exemplo: grau zero em radiano = (Math.PI/180)x0 */ 
    
    ctx.fillStyle = '#000'
    ctx.arc(100, 100, 100, (Math.PI/180)*0, (Math.PI/180)*90, true)
    ctx.fill()
    
    ctx.beginPath() /*começar outro círculo*/
    ctx.fillStyle ='#f00'
    ctx.arc(100, 100, 100, (Math.PI/180)*0, (Math.PI/180)*90, false)
    
    ctx.fill()
}

desenha()