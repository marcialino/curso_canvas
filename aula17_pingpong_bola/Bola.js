

class Bola{
    constructor (ctx){
        this.ctx=ctx
        this.movendo=false
        this.dirx=0 /*direção x e y*/
        this.diry=0
        this.vel=3
        this.largura=20
        this.altura=20
        this.x=this.y=(this.ctx.canvas.width/2)-(this.largura/2)
        this.y=(this.ctx.canvas.height/2)-(this.altura/2)
    }

    iniciar(){
        this.movendo=true
        this.dirx=-1
        this.diry=(Math.random()*10 > 5 ? -1 : 1)
    }
    gerenciar(){
        if(this.movendo){
            this.x+=(this.dirx*this.vel)
            this.y+=(this.diry*this.vel)
    
            /*Colisão com a borda direito, inverte a posição*/
            if(this.x>=(this.ctx.canvas.width-this.largura))
            this.dirx=-1

            /*Colisão com a borda esquerda, inverte a posição*/ 
            if(this.x<= 0)
                this.dirx=1

            /*Colisão com a borda inferior, inverte a posição*/
            if(this.y>=(this.ctx.canvas.height-this.altura))
            this.diry=-1

            /*Colisão com a borda superior, inverte a posição*/ 
            if(this.y<= 0)
                this.diry=1     

        }
    }
    desenhar(){
        this.gerenciar()
        this.ctx.fillStyle='#000'
        this.ctx.fillRect(this.x, this.y, this.largura, this.altura)
    }
}
