let canvas = document.getElementById('desenho1')

let ctx = canvas.getContext('2d')

/*Colocando imagem*/
let nave = new Image()
nave.src="imagens/naveweb.png"
nave.addEventListener('load', ()=>{ /*para carregar a imagem*/ 
    ctx.drawImage(nave, 120,80, 100, 200); /*desenhar a imagem, nas posições x e y*. Nas dimensões largura:200 e altura: 300*/

  })
/*Recorte de imagens, parâmetros:
imagem, 
XiniRecorte: posição inicial em x do recorte
YinRecorte: posição incial em y, do recorte
Lrecorte: largura do recorte;
arecorte: altura do recorte;
posx e posy: posição x e y da imagem;
Limagem e Aimagem: largura e altura da imagem.

*/ 
  let cores =new Image()
  cores.src="imagens/coresweb.png"
  cores.addEventListener('load', ()=>{
    ctx.drawImage(cores, 0, 0)
  }) 






    
    

