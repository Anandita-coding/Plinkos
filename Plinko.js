class Plinko{
    constructor(x,y,r){
        var options = {
            isStatic:true,
            restitution:1,
            friction:0.5,
            density:1
        }

    this.x=x;
    this.y=y;
    this.r=r;
    this.body = Bodies.circle(this.x,this.y,this.r/2,options)  
    World.add(world,this.body)
    }
    display(){
        var plinkoPos = this.body.position;
        
  
        fill (0,255,123)
        ellipse(plinkoPos.x,plinkoPos.y,this.r,this.r)
        
    }
}