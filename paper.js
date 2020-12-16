class Paper {
constructor (x,y,radius){
    var options = {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
this.radius=30;
    this.body=Bodies.circle(x,y,radius,options);
}

display(){
var pos=this.body.position;
push ();
fill ("salmon");
translate(pos.x,pos.y);
ellipseMode(RADIUS)
ellipse(0,0,this.radius,this.radius)
pop ();
}
}