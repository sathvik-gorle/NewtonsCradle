class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options={
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x: this.offsetX, y:this.offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(2);
        stroke("black");
        fill(0);

        var pointA1 = pointA.x;
        var pointB1 = pointA.y;

        var PointX2 = pointB.x+this.offsetX;
        var PointY2 = pointB.y+this.offsetY;

        line(pointA1, pointB1, PointX2, PointY2);
    }
}
