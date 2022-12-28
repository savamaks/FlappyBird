class Config {
    speed = 3.1;
    index = 0.3;
    gravity = 50;
    canvas = {
        id: "canvas",
        x: 0,
        y: 0,
        width: 287,
        height: 510,
    };

    spritesheet = {
        width: 431,
        height: 510,
        src: "./atlas.png",
    };

    background = {
        x: 0,
        y: 0,
        width: 431,
        height: 510,
    }

    bird = {
        x: 130,
        y: 50,
        width: 34,
        height: 30,

        flapSpeed: 82,

        frames: [
            {
                x: 230,
                y: 762,
                width: 34,
                height: 30,
            },
            {
                x: 230,
                y: 814,
                width: 34,
                height: 30,
            },
            {
                x: 230,
                y: 865,
                width: 34,
                height: 30,
            },
            {
                x: 230,
                y: 814,
                width: 34,
                height: 30,
            },
        ],
    };

    pipes = {
        width: 55,
        height: 320,

        frames: [
            {
                x: 110,
                y: 646,
                width: 55,
                height: 320,
            },
            {
                x: 167,
                y: 646,
                width: 55,
                height: 320,
            },
        ],
    };
    score = {
        x: 131,
        y: 10,

        numbers: [
            {
                x: 992,
                y: 120,
                width: 24,
                height: 36,
            },
            {
                x: 272,
                y: 910,
                width: 24,
                height: 36,
            },
            {
                x: 584,
                y: 320,
                width: 24,
                height: 36,
            },
            {
                x: 613,
                y: 320,
                width: 24,
                height: 36,
            },
            {
                x: 640,
                y: 320,
                width: 24,
                height: 36,
            },
            {
                x: 668,
                y: 320,
                width: 24,
                height: 36,
            },
            {
                x: 584,
                y: 368,
                width: 24,
                height: 36,
            },
            {
                x: 613,
                y: 368,
                width: 24,
                height: 36,
            },
            {
                x: 640,
                y: 368,
                width: 24,
                height: 36,
            },
            {
                x: 668,
                y: 368,
                width: 24,
                height: 36,
            },
        ],

        tableScore: [
            {
                x: 5,
                y: 515,
                width: 232,
                height: 122,
            },
        ],
        
    };

    gameOver = {
        x: 42,
        y: 80,
        frames: [
            {
                x: 785,
                y: 118,
                width: 202,
                height: 52,
            },
        ],
    };
}
