const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
]

const labirintSize = 700
const labirintHeight = (labirintSize*71.4285714)/100
let divWidth = labirintSize/21
let divHeight = labirintSize/21

const labirintSection = document.querySelector('#labirint-section')
labirintSection.style.width = `${labirintSize}px`
labirintSection.style.height = `${labirintHeight}px`

const playerBox = document.getElementById("player-box")
playerBox.style.width = `${labirintSize/21}px`
playerBox.style.height = `${labirintSize/21}px`
playerBox.style.top = `${labirintHeight*(9/15)}px`


const createLabirint = () => {
    for(let i = 0; i < map.length; i++){
        for(let j = 0; j < map[i].length; j++){
            if (map[i][j] === 'W'){
                const wall = document.createElement('div')
                labirintSection.appendChild(wall)
                wall.className = 'labirintWall'
                wall.style.width = `${divWidth}px`
                wall.style.height = `${divHeight}px`
            }
            if (map[i][j] === 'S'){
                const wall = document.createElement('div')
                labirintSection.appendChild(wall)
                wall.className = 'labirintBegin'
                wall.style.width = `${divWidth}px`
                wall.style.height = `${divHeight}px`
            }
            if (map[i][j] === 'F'){
                const wall = document.createElement('div')
                labirintSection.appendChild(wall)
                wall.className = 'labirintEnd'
                wall.style.width = `${divWidth}px`
                wall.style.height = `${divHeight}px`
            }
            if (map[i][j] === ' '){
                const wall = document.createElement('div')
                labirintSection.appendChild(wall)
                wall.className = 'labirintFloor'
                wall.style.width = `${divWidth}px`
                wall.style.height = `${divHeight}px`
            }
        }
    }
}
createLabirint()


const movePlayerBox = () => {
    let boxTop = labirintHeight*(9/15);
    let boxLeft = 0;

    document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if (keyName === 'ArrowDown'){
        boxTop += labirintSize/21
    }
    if (keyName === 'ArrowUp'){
        boxTop -= labirintSize/21
    }
    if (keyName === 'ArrowLeft'){
        boxLeft -= labirintSize/21
    }
    if (keyName === 'ArrowRight'){
        boxLeft += labirintSize/21
    }

    playerBox.style.top = boxTop + "px"
    playerBox.style.left = boxLeft + "px"
    })
}
movePlayerBox()