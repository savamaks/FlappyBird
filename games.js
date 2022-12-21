class Config {
    speed = 3.1;
    index = 0.3;

    bgSource = {
        x: 0,
        y: 0,
        width: 431,
        height: 768,
    };

    bgPartOneResult = {
        x: 0,
        y: 0,
        width: canvas.width,
        height: canvas.height,
    };

    bgPartTwoResult = {
        x: 0,
        y: 0,
        width: canvas.width,
        height: canvas.height,
    };
}

class Game {
    constructor() {
        this.config = new Config();

        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.img = new Image();
        this.img.src = "https://i.ibb.co/Q9yv5Jk/flappy-bird-set.png";
        this.index = this.config.index;
        this.speed = this.config.speed;
        this.backgroudX;
    }
    draw() {
        this.index += 0.3;
        this.backgroudX = -((this.index * this.speed) % this.canvas.width);
        // console.log(backgroudX);

        this.ctx.drawImage(
            this.img,

            this.config.bgSource.x,
            this.config.bgSource.y,
            this.config.bgSource.width,
            this.config.bgSource.height,

            this.backgroudX + this.canvas.width,
            this.config.bgPartOneResult.y,
            this.config.bgPartOneResult.width,
            this.config.bgPartOneResult.height
        );

        this.ctx.drawImage(
            this.img,

            this.config.bgSource.x,
            this.config.bgSource.y,
            this.config.bgSource.width,
            this.config.bgSource.height,

            this.backgroudX,
            this.config.bgPartTwoResult.y,
            this.config.bgPartTwoResult.width,
            this.config.bgPartTwoResult.height
        );
        window.requestAnimationFrame(this.draw.bind(this));
    }
}

let game = new Game();

game.draw();