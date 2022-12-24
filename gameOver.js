class GameOver{
    constructor(){

    }    

    gameOver(birdX,birdY,pipeX,pipeY){
        // console.log(birdX,birdY,pipeX,pipeY)
        if(birdX === pipeX && birdY === pipeY){
            console.log('oops')
        }
    }
}