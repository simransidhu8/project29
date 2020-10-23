class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
     
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    
    display(){
        
        
        if(this.sling.bodyA){
            var posA = this.sling.bodyA.position;
            var posB = this.pointB;
            push();
            stroke("white");
            if(posA.x < 220){
              strokeWeight(7);
              line(posA.x-20, posA.y, posB.x-10, posB.y);
              line(posA.x-20, posA.y, posB.x+30, posB.y-3);
              
            } else {
                line(posA.x+25, posA.y, posB.x-10, posB.y);
                line(posA.x+25, posA.y, posB.x+30, posB.y-3);
                
            }
            
            pop();
        }
    }
    
}