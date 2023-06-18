class Pad{

    constructor(ctx,teclado){
        this.ctx=ctx
        this.teclado=teclado
        this.x=0
        this.y=0
        this.vel=3
        this.largura=20
        this.altura=100
        
        
    }
    atualizar(){
        
        if(this.teclado.esquerda){
            if(this.x > 0)
            this.x-= this.vel
        }
        if(this.teclado.direita){
             if(this.x < this.ctx.canvas.width-this.largura)
            this.x+=this.vel
        }
        if(this.teclado.cima){
            if(this.y > 0)
             this.y-=this.vel
        }
        if(this.teclado.baixo){
            if(this.y < this.ctx.canvas.height - this.altura)
            this.y+=this.vel
        }
    }
    
    desenhar(){
        this.atualizar()
        this.ctx.fillStyle='#00f'  
        this.ctx.rect= (this.x, this.y, this.largura, this.altura)
        this.ctx.clearRect(100,100,100,100)
        
  
          
        
    }
    
}