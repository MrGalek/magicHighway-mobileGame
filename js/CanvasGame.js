/*******************************************************************************************************/
/* This file is the same for every game.                                                               */
/* DO NOT EDIT THIS FILE.                                                                              */
/*                                                                                                     */
/* If you need to modify the methods, then you should create a sub-class that extends from this class. */
/*                                                                                                     */
/*******************************************************************************************************/


/* Author: Derek O Reilly, Dundalk Institute of Technology, Ireland.                                                   */
/* The CanvasGame class is responsible for rendering all of the gameObjects and other game graphics on the canvas.         */
/* If you want to implement collision detection in your game, then you MUST overwrite the collisionDetection() method. */

class CanvasGame
{
    constructor()
    {
        /* render the game on the canvas */
        this.playGameLoop();
    }

    start()
    {
        for (let i = 0; i < gameObjects.length; i++)
        {
            gameObjects[i].start();
        }
    }

    playGameLoop()
    {
        this.collisionDetection();
        this.render();
        
        /* recursively call playGameLoop() */
        requestAnimationFrame(this.playGameLoop.bind(this));
    }
    
    render()
    {
        /* clear previous rendering from the canvas */
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        /* render game gameObjects on the canvas */
        for (let i = 0; i < gameObjects.length; i++)
        {
            /* Use an empty gameObject to ensure that there are no empty entries in the gameObjects[] array */
            /* This is needed because an empty entry in the gameObjects[] array will cause the program to freeze */
            if(gameObjects[i] === undefined)
            {
                gameObjects[i] = new GameObject();
            }
            
            if (gameObjects[i].isDisplayed())
            {
                gameObjects[i].render();
            }
        }

        
    }
    
    collisionDetection()
    {   
        
        for(let i=2; i<=5;i++){
            if(((gameObjects[i].x-gameObjects[1].x > -10 && gameObjects[i].x-gameObjects[1].x < 10) && (gameObjects[i].y-gameObjects[1].y > -10 && gameObjects[i].y-gameObjects[1].y < 10) || gameObjects[9].text==0)){
                for(let j=0; j<gameObjects.length; j++){
                    gameObjects[j].stop();
                }
                gameObjects[11].setText("Game Over \n Click to repeat");
                gameObjects[11].centerText();
                gameObjects[11].gameOver = true;
            } 
        }
        if(((gameObjects[10].x-gameObjects[1].x > -5 && gameObjects[10].x-gameObjects[1].x < 5) && (gameObjects[10].y-gameObjects[1].y > -5 && gameObjects[10].y-gameObjects[1].y < 5))){
            gameObjects[9].setValue(1);
            gameObjects[10].x = this.width + 1;
        }
    }
}