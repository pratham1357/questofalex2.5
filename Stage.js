class Stage {
    constructor(x,y,width,height){  
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        //this.image = loadImage()
        World.add(world,this.body);
    }
    display(){
        var position = this.body.position;
        push ();
        translate(position.x,position.y);
        imageMode(CENTER);
       // image(this.image, 0, 0, this.width, this.height);
        pop ();
    }

}