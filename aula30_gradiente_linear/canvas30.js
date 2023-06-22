let canvas = document.getElementById('desenho1')

let ctx = canvas.getContext('2d')
/*Quando há um deslocamento do desenho, o gradiente definido anteriormente não acompanha, tendo que ser redefinido. Para evitar isso, recomenda-se trabalhar com variáveis, assim, onde o desenho estiver, o gradiente será o mesmo.*/

let px1, py1,px2,py2
px1=0
py1=0
px2=300
py2=300

/*Linear Gradiente - na horizontal*/ 
px3=400
py3=0
px4=300
py4=300
gradiente1=ctx.createLinearGradient(px1,py1,px2,py2)/*variáveis de onde começa e onde termina o gradiente: x1, y1, x2, y2*/
gradiente1.addColorStop(0, '#f00')/*começa no ponto 1 com a cor vermelha */
gradiente1.addColorStop(1, '#ff0')/*termina com a cor amarela*/

ctx.fillStyle=gradiente1
ctx.fillRect(px1,py1,px2,py2)

/*Linear gradiente na horizontal*/ 

gradiente2=ctx.createLinearGradient(400,0,300,300)
gradiente2.addColorStop(0,'#178A29')
gradiente2.addColorStop(1,'#2AFA4A')
ctx.fillStyle=gradiente2
ctx.fillRect(px3,py3,px4,py4)



