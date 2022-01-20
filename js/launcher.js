class Launcher{
    constructor(){
        var options = {
            bodyA: stoneObj.body,
            pointB: {x:240, y: 420},
            length: 100,
            stiffness: 0.4,
        }

        this.launch = Constraint.create(options);
        World.add(world, this.launch);
        this.pointB= stoneObj.body; 
    }
    display(){
        strokeWeight(3);
        if (this.launch.bodyA)
            line(this.launch.bodyA.position.x, this.launch.bodyA.position.y, this.launch.pointB.x, this.launch.pointB.y);
    }

    fly(){
        this.launch.bodyA= null;
    }

    relaunch(){
        this.launch.bodyA= stoneObj.body;
    }
}