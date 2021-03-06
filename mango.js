class mango
{
	constructor(x,y,r)
	{
		var options={
            isStatic:true,
            restitution:0,
            friction:1			
			}
		this.x=x;
		this.y=y;
        this.r=r
        this.image = loadImage("mango.png")
		this.body=Bodies.circle(this.x,this.y,this.r, options);
 		World.add(world, this.body);

	}
	display()
	{
			var groundPos=this.body.position;		
			push()
			translate(groundPos.x, groundPos.y);
            rotate(this.body.angle)
			//strokeWeight(4);
			fill(128,128,128)
            ellipseMode(CENTER);
            imageMode(CENTER);
            image(this.image,0,0,this.r*2,this.r*2)
			pop()
			
	}

}
