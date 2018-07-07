class Functionality {

    constructor(color, alfa){
        this.color = color;
        this.alfa = alfa;
    }

    draw(){

        if(this instanceof Player){
            // console.log(this);
            fill(this.color);
            rect(this.x, this.y, this.w, this.h);

        }else if(this instanceof Ball){
            // console.log(this);
            fill(this.color, this.alfa);
            ellipse(this.x, this.y, this.r);

        }
    }
}
