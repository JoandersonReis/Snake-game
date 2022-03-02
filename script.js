
const screen = document.getElementById("squad")
const context = screen.getContext("2d")


const screenWidth = screenHeight = 600

const snake = {
  color: "#fff",
  squadLength: screenWidth / 30,
  bodyLength: [[20, 20], [40, 20]],
  speedX: 20,
  speedY: 20,
  direction: "right"
}


const apple = {
  color: "red",
  pos: [200, 200],
  length: snake.squadLength
}


function drawSnake() {
  for(var i = 0; i < snake.bodyLength.length; i++) {
    context.fillStyle = snake.color
    context.fillRect(snake.bodyLength[i][0], snake.bodyLength[i][1], snake.squadLength, snake.squadLength)
  }
}

function moveSnake() {
  for(var i = 0; i < snake.bodyLength.length; i++) {
    if(snake.direction == "right" || snake.direction == "left") {
      snake.bodyLength[i][0] = snake.bodyLength[i][0] + (snake.speedX)
    } else {
      snake.bodyLength[i][1] = snake.bodyLength[i][1] + (snake.speedY)
    }
  }
}

function changeSnakeDirection(direction) {
  if(direction == "ArrowUp") {
    snake.direction = "up"
    snake.speedY = snake.speedY * (-1)
  } else if(direction == "ArrowDown") {
    snake.direction = "down"
    snake.speedY = snake.speedY * 1
  } else if(direction == "ArrowRight") {
    snake.direction = "right"
    snake.speedX = snake.speedX * 1
  } else {
    snake.direction = "left"
    snake.speedX = snake.speedX * (-1)
  }

  console.log(snake)
}

window.addEventListener("keydown", (e) => {
  changeSnakeDirection(e.key)
})


function game() {
  context.fillStyle = "#111"
  context.clearRect(0, 0, screenWidth, screenHeight)
  context.fillRect(0, 0, screenWidth, screenHeight)
  
  drawSnake()
  // moveSnake()
  
  context.fillStyle = apple.color
  context.fillRect(apple.pos[0], apple.pos[1], apple.length, apple.length)
}



setInterval(game, 60)


