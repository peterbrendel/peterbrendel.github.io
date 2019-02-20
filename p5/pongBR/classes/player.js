class Player extends Functionality{

    constructor(x, y, angle, color){
        super(color, 255);
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.w = 60;
        this.h = 10;
        this.upperBounds = -height/2+this.h/2;
        this.lowerBounds = height/2-this.h/2;
    }

    move(direction){
        this.y = constrain(this.y+direction, this.upperBounds, this.lowerBounds);
    }

    getData(){
        return this.y;
    }

    setData(y){
        this.y = y;
    }

}
