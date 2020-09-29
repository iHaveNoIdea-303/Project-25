class Can{
    constructor(x,y,width,height){
        var options={
            'isStatic': true
        }
        this.image= loadImage("sprites/dustbingreen.png")
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.w=width
        this.h=height
    

        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        push()
        rectMode(CENTER)
        translate(pos.x,pos.y)
        fill("white")
        rect(0,0,this.w,this.h)
        pop()
        imageMode(CENTER)
        image(this.image,1400,555,200,200)
    }
}