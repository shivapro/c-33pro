class Snow{
    constructor(){
        this.x=random(0,800);
        this.y=random(0,400); 
        this.image=loadImage("snow4.webp");
      

    }
    update(){
        this.y=this.y+1;
        if(this.y>400){
             this.x=random(0,800);
             this.y=random(0,400); 
        }
        
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.x,this.y,50,50);


    }




}