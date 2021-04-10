class Wind{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.image = loadImage("Images/p1.PNG");
        this.wind = Bodies.rectangle(x,y, 50, 50, options);
        World.add(world, this.wind);

    }
    display(){
        var pos = this.wind.position;
        pos.x = mouseX;
        pos.y = mouseY;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 30, 50);
    };
}