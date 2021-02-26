class Treasure
{
    constructor(x, y)
    {
        this.sprite = createSprite(x, y, 10, 10);
    }

    update(){
        if(this.sprite.isTouching(player.sprite)){
            this.sprite.destroy();
            clear();
            for(var i = 0; i < allSprites.length; i++){
                allSprites.get(i).destroy();
            }
            noLoop();
        }
    }
}