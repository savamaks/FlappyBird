const imgURL = "https://i.ibb.co/Q9yv5Jk/flappy-bird-set.png";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = imgURL;

const SPEED = 3.1;

// ширина и высота птицы
const sizeBird = [51, 36];
const sizePipeUp = [78, 500];
const sizePipeDown = [78, 500];

let index = 0;

let birdUp = 200;
let birdTimeUp = 0;
let acceleration = 0;

const render = () => {
    index += 0.3;

    const backgroudX = -((index * SPEED) % canvas.width);

    const bgSource = {
        x: 0,
        y: 0,
        width: canvas.width,
        height: canvas.height,
    };

    const bgPartOneResult = {
        x: backgroudX + canvas.width,
        y: 0,
        width: canvas.width,
        height: canvas.height,
    };

    const bgPartTwoResult = {
        x: backgroudX,
        y: 0,
        width: canvas.width,
        height: canvas.height,
    };

    ctx.drawImage(
        img,

        bgSource.x,
        bgSource.y,
        bgSource.width,
        bgSource.height,

        bgPartOneResult.x,
        bgPartOneResult.y,
        bgPartOneResult.width,
        bgPartOneResult.height
    );

    ctx.drawImage(
        img,

        bgSource.x,
        bgSource.y,
        bgSource.width,
        bgSource.height,

        bgPartTwoResult.x,
        bgPartTwoResult.y,
        bgPartTwoResult.width,
        bgPartTwoResult.height
    );

    // изображение птицы, которое копируем
    // из изображения-источника
    const birdSource = {
        x: 432,
        y: Math.floor((index % 9) / 3) * sizeBird[1],
        width: sizeBird[0],
        height: sizeBird[1],
    };
    console.log()
    // будет расположена на Canvas
    const birdResult = {
        x: canvas.width / 2 - sizeBird[0] / 2,
        y: birdUp,
        width: sizeBird[0],
        height: sizeBird[1],
    };
    // изображение трубы, которое копируем
    // из изображения-источника
    const pipeUpSource = {
        x: 432,
        y: 105,
        width: sizePipeUp[0],
        height: sizePipeUp[1],
    };
    // координаты, по которым птица

    const pipeUpResult = {
        x: backgroudX + canvas.width ,
        y: -200,
        width: sizePipeUp[0],
        height: sizePipeUp[1],
    };
    const pipeDownSource = {
        x: 510,
        y: 105,
        width: sizePipeUp[0],
        height: sizePipeUp[1],
    };

    const pipeDownResult = {
        x: backgroudX + canvas.width,
        y: 500,
        width: sizePipeUp[0],
        height: sizePipeUp[1],
    };

    ctx.drawImage(
        img,

        birdSource.x,
        birdSource.y,
        birdSource.width,
        birdSource.height,

        birdResult.x,
        birdResult.y,
        birdResult.width,
        birdResult.height
    );
    ctx.drawImage(
        img,

        pipeUpSource.x,
        pipeUpSource.y,
        pipeUpSource.width,
        pipeUpSource.height,

        pipeUpResult.x,
        pipeUpResult.y,
        pipeUpResult.width,
        pipeUpResult.height
    );
    ctx.drawImage(
        img,

        pipeDownSource.x,
        pipeDownSource.y,
        pipeDownSource.width,
        pipeDownSource.height,

        pipeDownResult.x,
        pipeDownResult.y,
        pipeDownResult.width,
        pipeDownResult.height
    );
    // if (birdTimeUp < 0) {
    //     birdUp += 3 * acceleration

    // } else {
    //     birdUp -=20 * acceleration
    // }
    // acceleration += 0.05
    // birdTimeUp -= 5

    window.requestAnimationFrame(render);
};

img.onload = render;

document.addEventListener("keydown", (e) => {
    if (e.keyCode === 32) {
        birdTimeUp = 60;
        acceleration = 0;
    }
});
