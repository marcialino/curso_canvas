let canvas = document.getElementById('desenho1')
let ctx = canvas.getContext('2d');


ctx.font='30px arial'
ctx.fillStyle='#008'
ctx.strokeText('CFB Cursos', 10, 100,100)/*o contorno da letra sai preto. o último nº se refere a largura do espaço que a palavra vai ocupar*/ 
ctx.fillText('CFB Cursos', 10, 200)/*o contorno das letras saem igual ao fillStyle*/ 

/*Usando variáveis*/
let canal = 'Aquele Sabor Digital'
let nome = 'Márcia Lino'
ctx.strokeText(canal,10,300)
ctx.fillText(nome,10,400)



