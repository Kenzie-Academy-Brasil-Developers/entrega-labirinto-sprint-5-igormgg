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

const labirintSize = 1000
let divWidth = labirintSize/21
let divHeight = labirintSize/21

const labirintSection = document.querySelector('#labirint-section')
labirintSection.style.width = `${labirintSize}px`





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
            wall.className = 'labirintSpace'
            wall.style.width = `${divWidth}px`
            wall.style.height = `${divHeight}px`
        }
    }
}