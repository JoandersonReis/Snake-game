
const screen = document.getElementById("squad")
const context = screen.getContext("2d")


const screenWidth = screenHeight = 600

const snake = {
  color: "#fff",
  squadLength: screenWidth / 30,
  bodyLength: [[20, 20], [40, 20]],
  bodyLengthNumber: 2,
  speedX: 20,
  speedY: 20,
  direction: "right"
}


const apple = {
  color: "red",
  pos: [120, 120],
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
    if(i < 1) {
      if(snake.direction == "right") {
        snake.bodyLength[i][0] = snake.bodyLength[i][0] + snake.speedX
      } else if(snake.direction == "left") {
        snake.bodyLength[i][0] =  snake.bodyLength[i][0] - snake.speedX
        snake.bodyLength[i][1] = snake.bodyLength[i][1]
      } else if(snake.direction == "down") {
        snake.bodyLength[i][1] = snake.bodyLength[i][1] + snake.speedY
        snake.bodyLength[i][0] = snake.bodyLength[i][0]
      } else if(snake.direction == "up") {
        snake.bodyLength[i][1] = snake.bodyLength[i][1] - snake.speedY
        snake.bodyLength[i][0] = snake.bodyLength[i][0]
      }
    } else {
      if(snake.direction == "right") {
        snake.bodyLength[i][0] = snake.bodyLength[i - 1][0] + snake.speedX
        snake.bodyLength[i][1] = snake.bodyLength[i - 1][1]
      } else if(snake.direction == "left") {
        snake.bodyLength[i][0] =  snake.bodyLength[i - 1][0] + snake.speedX
        snake.bodyLength[i][1] = snake.bodyLength[i - 1][1]
      } else if(snake.direction == "down") {
        snake.bodyLength[i][1] = snake.bodyLength[i - 1][1] + snake.speedY
        snake.bodyLength[i][0] =  snake.bodyLength[i - 1][0]
      } else if(snake.direction == "up") {
        snake.bodyLength[i][1] = snake.bodyLength[i - 1][1] - snake.speedY
        snake.bodyLength[i][0] =  snake.bodyLength[i - 1][0]
      }
    }
  }
}

function eatApple() {
  if(snake.bodyLength[0][0] == apple.pos[0][0] && snake.bodyLength[0][1] == apple.pos[0][1]) {
    snake.bodyLength = [...snake.bodyLength, [snake.bodyLength[snake.bodyLengthNumber - 1][0] - 20, snake.bodyLength[snake.bodyLengthNumber - 1][1] - 20]]
    console.log("Pegou")
  }
}

function changeSnakeDirection(direction) {
  if(direction == "ArrowUp") {
    snake.direction = "up"
  } else if(direction == "ArrowDown") {
    snake.direction = "down"
  } else if(direction == "ArrowRight") {
    snake.direction = "right"
  } else {
    snake.direction = "left"
  }
}

window.addEventListener("keydown", (e) => {
  changeSnakeDirection(e.key)
})


function game() {
  context.fillStyle = "#111"
  context.clearRect(0, 0, screenWidth, screenHeight)
  context.fillRect(0, 0, screenWidth, screenHeight)
  
  context.fillStyle = apple.color
  context.fillRect(apple.pos[0], apple.pos[1], apple.length, apple.length)
  
  drawSnake()
  moveSnake()
  eatApple()

}



setInterval(game, 60)


