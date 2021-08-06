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

const labirintSize = 750
const labirintHeight = (labirintSize*71.4285714)/100
let divWidth = labirintSize/21
let divHeight = labirintSize/21

const labirintSection = document.querySelector('#labirint-section')
labirintSection.style.width = `${labirintSize}px`
labirintSection.style.height = `${labirintHeight}px`


const createLabirint = () => {
    for(let i = 0; i < map.length; i++){
        for(let j = 0; j < map[i].length; j++){
            if (map[i][j] === 'W'){
                const wall = document.createElement('div')
                labirintSection.appendChild(wall)
                wall.className = 'labirintWall'
                wall.style.width = `${divWidth}px`
                wall.style.height = `${divHeight}px`
                wall.id = `div${i}-${j}`
            }
            if (map[i][j] === 'S'){
                const wall = document.createElement('div')
                labirintSection.appendChild(wall)
                wall.className = 'labirintBegin'
                wall.style.width = `${divWidth}px`
                wall.style.height = `${divHeight}px`
                wall.id = `div${i}-${j}`
            }
            if (map[i][j] === 'F'){
                const wall = document.createElement('div')
                labirintSection.appendChild(wall)
                wall.className = 'labirintEnd'
                wall.style.width = `${divWidth}px`
                wall.style.height = `${divHeight}px`
                wall.id = `div${i}-${j}`
            }
            if (map[i][j] === ' '){
                const wall = document.createElement('div')
                labirintSection.appendChild(wall)
                wall.className = 'labirintFloor'
                wall.style.width = `${divWidth}px`
                wall.style.height = `${divHeight}px`
                wall.id = `div${i}-${j}`
            }
        }
    }
}
createLabirint()

const createPlayer = () => {
    const startDiv = document.querySelector('#div9-0')
    const player = document.createElement('div')
    startDiv.appendChild(player)
    player.id = 'player-div'
}
createPlayer()


const movePlayerBox = () => {

    const player = document.querySelector('#player-div')
    let position = '9-0'

    document.addEventListener('keydown', (event) => {
        const keyName = event.key;

        if (keyName === 'ArrowDown'){
            let positionArray = position.split('-')
            let lin = Number(positionArray[0])
            let col = Number(positionArray[1])
            if (map[lin+1][col] === ' '){
                document.querySelector(`#div${lin+1}-${col}`).appendChild(player)
                position = `${lin+1}-${col}`
            }
        }

        if (keyName === 'ArrowUp'){
            let positionArray = position.split('-')
            let lin = Number(positionArray[0])
            let col = Number(positionArray[1])
            if (map[lin-1][col] === ' '){
                document.querySelector(`#div${lin-1}-${col}`).appendChild(player)
                position = `${lin-1}-${col}`
            }
        }

        if (keyName === 'ArrowLeft'){
            let positionArray = position.split('-')
            let lin = Number(positionArray[0])
            let col = Number(positionArray[1])
            if (map[lin][col-1] === ' '){
                document.querySelector(`#div${lin}-${col-1}`).appendChild(player)
                position = `${lin}-${col-1}`
            }
        }

        if (keyName === 'ArrowRight'){
            let positionArray = position.split('-')
            let lin = Number(positionArray[0])
            let col = Number(positionArray[1])
            if (map[lin][col+1] === ' '){
                document.querySelector(`#div${lin}-${col+1}`).appendChild(player)
                position = `${lin}-${col+1}`
            }
            if (map[lin][col+1] === 'F'){
                document.querySelector(`#div${lin}-${col+1}`).appendChild(player)
                position = `${lin}-${col+1}`
                document.querySelector('#result').innerHTML = 'You Win!'
            }
        }
    })
}
movePlayerBox()
