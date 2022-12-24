class Config {

   
    speed = 3.1;
    index = 0.3;
    gravity = 50
    canvas = {
        id: "canvas",
        x: 0, 
        y: 0,
        width: 287,
        height: 510,
    };

    spritesheet = {
        width: 431,
        height: 500,
        src: "./atlas.png",
    };


    bird = {
        x: 130,
        y: 50,
        width: 35,
        height: 36,

        flapSpeed: 82,
        
        frames: [
            {
                x: 230,
                y: 762,
                w: 51,
                h: 36,
            },
            {
                x: 230,
                y: 814,
                w: 51,
                h: 36,
            },
            {
                x: 230,
                y: 865,
                w: 51,
                h: 36,
            },
            {
                x: 230,
                y: 814,
                w: 51,
                h: 36,
            },
        ],
    };

    pipes = {
        x:287,
        y:0,

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
            
        ]
    }
}
