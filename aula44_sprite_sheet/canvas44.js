let canvas = document.getElementById('desenho1')
let ctx = canvas.getContext('2d')

var ALTURA, LARGURA, VELOCIDADE = 6, maxPulos= 3, estadoAtual, record, img

/*let sprite = new Image()
sprite.src="imagens/sheet.png"


let posIniX=0
let largFundo=0
let altFundo=0

let posIniXb = 618
let posIniYb= 16
let largBola= 88
let altBola=87


sprite.addEventListener('load',()=>{
    largFundo = 600
    altFundo = 600

    ctx.drawImage(sprite, 0, 0, largFundo,altFundo,0,0,largFundo, altFundo)

    ctx.drawImage(sprite,posIniXb, posIniYb, largBola, altBola,400,20, largBola, altBola)


})*/

chao = {
    y:550,
    x:0,
    altura:50,

    atualiza:function () { 
        this.x -= VELOCIDADE

        if (this.x <= -30)
            this.x +=30
     },

     desenha:function(){
        spriteChao.desenha(this.x, this.y)
        spriteChao.desenha(this.x + spriteChao.largura, this.y)
     }
},
bloco = {
    x:50,
    y:50,
    /*altura: spriteBoneco.altura,
    largura: spriteBoneco.largura,*/
    gravidade: 1.6,
    velocidade: 0,
    forcaDoPulo:23.6,
    qntPulos:0,
    score:0,
    rotacao:0,

    vidas:3,
    colidindo: false,

    atualiza:function(){
        this.velocidade += this.gravidade
        this.y+=this.velocidade
        this.rotacao += Math.PI /180 *  VELOCIDADE

        if(this.y > chao.y - this.altura && estadoAtual != estados.perdeu){
            this.y = chao.y - this.altura
            this.qntPulos = 0
            this.velocidade = 0
        }
    },
    desenha: function () {
        ctx.save()
        ctx.translate(this.x + this.largura/2,this.y + this.altura/2)
        ctx.rotate(this.rotacao)
        spriteBoneco.desenha(-this.largura/2, -this.altura/2)
        ctx.restore()
        
      }
},

function main (){
    ALTURA = window.innerWidth
    LARGURA = window.innerHeight

    if(LARGURA >=500){
        LARGURA = 600
        ALTURA = 600
    }
    document.addEventListener('mousedown', clique)

    estadoAtual = estados.jogar
    record = localStorage.getItem('record')

    if(record == null)
        record = 0

    img = new Image()
    img.src='imagens/sheet.png'

    roda()
} 

function roda() { 
    atualiza()
    desenha()

    window.requestAnimationFrame(roda)
 }

 function atualiza() { 
    if(estadoAtual == estados.jogando)
        chao.atualiza()
        bloco.atualiza()
  }

  function desenha(){
    bg.desenha(0,0)

    ctx.fillStyle='#fff'
    ctx.font = '50px Arial'
    ctx.fillText(bloco.score, 30,68)
    ctx.fillText(bloco.vidas,540,68)

    chao.desenha()
    bloco.desenha()
    
  }

  /*main()*/
   


    
      


    


