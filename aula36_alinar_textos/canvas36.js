let canvas = document.getElementById('desenho1')
let ctx = canvas.getContext('2d')

let texto ='CFB Cursos - Curso Canvas - Alinhamento de textos'

/*Configurando o texto, o que vai mudar é os pontos de alinhamentos, em relação a lateral esquerda*/ 
ctx.font='20px arial'
ctx.fillStyle='#008'
ctx.fillText(texto, 0, 100)

let texto1 ='CFB Cursos - JQuery'

/*Configurando o texto, o que vai mudar é os pontos de alinhamentos, em relação ao centro do canvas*/ 

ctx.font='20px arial'
ctx.fillStyle='#008'
ctx.textAlign='center'
ctx.fillText(texto1, 500, 200)


let texto2 ='CFB Cursos - JavaScript'

/*Configurando o texto, o que vai mudar é os pontos de alinhamentos. O ponto da direita vai para o centro do canvas*/ 

ctx.font='20px arial'
ctx.fillStyle='#008'
ctx.textAlign='right'
ctx.fillText(texto2, 300, 300);

