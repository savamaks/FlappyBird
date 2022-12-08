





let line = document.querySelector('.line')
let posMouseX;
let posMouseY;
let click = true;
const posLine = (elem) => {
    let box = elem.getBoundingClientRect()
    return{
        left: box.left,
        width: box.width,
        height: box.height,
    }
}

const moveSlider = (elem) => {
    return coords = posLine(elem)
    
}

moveSlider(line)

const moveMouse =  (e) => {

    line.style.position = 'absolute'
    line.style.left = e.pageX  - coords.left + 'px'
    line.style.top = e.pageY - coords.top  + 'px'

}
const activeMove = ()=>{
    move()
if(click === false ) {
console.log('ok')
    document.removeEventListener('mousemove',moveMouse)
    clicked(true)

}   else   {
    clicked(false)
}
}


const clicked = (el) => {
    return click = el;
}

const move =() => {
    document.addEventListener('mousemove',moveMouse)
}


line.addEventListener('click', activeMove)









// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");




// function getPos(elem) {

//     const box = elem.getBoundingClientRect()

//     return {
//         top: box.top,
//         left: box.left
//     }

// }




// let coords = getPos(canvas)




// canvas.addEventListener('mousedown', (e) => {
//     ctx.beginPath()

//     ctx.moveTo(e.pageX - coords.left, e.pageY - coords.top)
//     console.log(e.pageX, e.pageY)
// })
// canvas.addEventListener('mousemove', (e) => {
//     ctx.lineTo(e.pageX - coords.left, e.pageY - coords.top)

// })
// canvas.addEventListener('mouseup', (e) => {
//     console.log(e.pageX - coords.left, e.pageY - coords.top)
//     ctx.stroke();
//     ctx.closePath();

// })


