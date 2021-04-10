class Spyder{
    constructor(x,y){
        var options = {
            isStatic:true

        }
        this.image = loadImage("Images/npc1.PNG");
        this.spyder = Bodies.rectangle(x, y, 20, 20, options);
        World.add(world, this.spyder);
    }
    display(){
        var pos = this.spyder.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 50,50);
    };
}