class Ball extends Functionality {

    constructor(x, y, r, color, sound){
        super(color, 255);
        this.x = x;
        this.y = y;
        this.r = r;
        this.xSpeed = 2;
        this.ySpeed = 6;
        this.wLimit = width/2;
        this.hLimit = height/2;
        this.direction = 1;
        this.soundFx = sound;
    }

    move(scoreboard){
        this.x += this.xSpeed*this.direction;
        this.y += this.ySpeed;
        this.xSpeed = constrain(this.xSpeed+0.01, 2, 8);
        if(this.x > this.wLimit || this.x < -this.wLimit){
            this.direction*=-1;
            if(this.x > this.wLimit){
                scoreboard.update(1);
            }else{
                scoreboard.update(-1);
            }
            this.reset();
        }

        if(this.y > this.hLimit || this.y < -this.hLimit){
            this.ySpeed*=-1;
        }

    }

    checkCollision(other){

        if(this.x+this.r >= other.x-other.w/2 && this.x-this.r <= other.x+other.w/2){

            if ((this.y > other.y+other.h/2) || (this.y < other.y-other.h/2)) {
                return false;
            }else{
                this.direction*=-1; 
                return true;
            }
        }
        return false;
    }

    reset(){
        this.x = this.y = 0;
        this.ySpeed = random(3, 8) * (random(1) < 0.5 ? -1 : 1);
        this.xSpeed = 2;
    }

    getData(){
        return [this.x, this.y];
    }

    setData(arr){
        this.x = arr[0];
        this.y = arr[1];
    }


}
