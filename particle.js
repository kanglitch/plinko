function Particle(x,y,r) {
    var options = {
        restitution: 0.5,
        friction: 0
    }
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;
    World.add(world, this.body);


}

Particle.prototype.show = function(){
    fill(255);
    stroke(255);
    var pos = this.body.postion;
    push();
  translate(pos.x, pos.y)
    ellipse(0,0, this.r * 2);
    pop();
}
