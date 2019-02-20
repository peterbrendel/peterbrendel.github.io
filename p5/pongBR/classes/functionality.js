class Functionality {

    constructor(color, alfa){
        this.color = color;
        this.alfa = alfa;
    }

    draw(){

        if(this instanceof Player){
            // console.log(this);
            push();
            translate(this.x,this.y);
            rotate(this.angle);
            fill(this.color);
            rect(0, 0, this.w, this.h);
            pop();

        }else if(this instanceof Ball){
            // console.log(this);
            fill(this.color, this.alfa);
            ellipse(this.x, this.y, this.r);

        }
    }

    playSound(){

        if(this instanceof Ball){

        }
    }
}
