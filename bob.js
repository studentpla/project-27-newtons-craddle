class Bob {
    constructor (x, y, radius) {
    var options = {
      density : 0.5,
      isStatic : false
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    this.x = x;
    this.y = y;
    World.add(world,this.body);
    }
     
    display () {
      var pos = this.body.position;
      push ();
      translate(pos.x,pos.y);
      ellipseMode(RADIUS);
      fill(255,0,254);
      ellipse(0,0,this.radius,this.radius);
      pop();
    
    }
    }
  