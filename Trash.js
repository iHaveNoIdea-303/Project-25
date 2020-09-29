class Junk{
    constructor(x,y,radius){
        var options={
            'restitution':0.3,
            'friction':5,
            'density':0.6
        }
        this.image= loadImage("sprites/paper.png")
        this.body=Bodies.circle(x,y,radius/4,options)
        this.radius=radius
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        push()
        translate(pos.x,pos.y)
        //ellipseMode(CENTER)
        //ellipse(0,0,this.radius,this.radius) 
        imageMode(CENTER)
        image(this.image,0,0,this.radius,this.radius)
        pop()
        
    }
}