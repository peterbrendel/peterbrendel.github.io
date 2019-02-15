class Scoreboard {

    constructor(){
        this.local = 0;
        this.enemy = 0;
        this.alfa = 30;
        this.color = color(255,255,255, this.alfa);
        this.wLimit = width/2-40;
        this.hLimit = height/2;
    }

    scored(team){
        switch(team){
            case 1:
            this.local++;
            break;
            case 2:
            this.enemy++;
            break;
            default:
            break;
        }
    }

    reset(){
        this.local=this.enemy=0;
    }

    show(){
        fill(this.color);
        textAlign(CENTER,CENTER);
        textSize(144);
        text(str(this.local), -width/4, 0);
        text("X", 0, 0);
        text(str(this.enemy), width/4, 0);
    }

    update(side){

        switch(side){
            case -1:
            this.local++;
            break;
            case 1:
            this.enemy++;
            break;
        }
    }

    getData(){
        return [this.local, this.enemy]; //this.alfa, this.color, this.wLimit, this.hLimit];

    }

    setData(arr){
        this.local = arr[0];
        this.enemy = arr[1];
    }

}
