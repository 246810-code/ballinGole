class ball{
    
      constructor(x,y,radius){

        
      var   options={

        'isStatic':true
      };
this.body=Bodies.circle(x,y,radius,options);

this.radius=radius
World.add(world,this.body)

 
      }
      ballStop()
    {    
     Matter.Body.setStatic(this.body,false); 
    }

display(){
var pos=this.body.position
ellipseMode(RADIUS);
    ellipse(pos.x,pos.y,this.radius,this.radius)
   
}




}
