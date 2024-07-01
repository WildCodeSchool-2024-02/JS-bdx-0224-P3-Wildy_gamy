import { useRef, useEffect, useState } from "react";
import shipImg from "../../assets/images/space-invaders-assets/ship.png";
import alienMagenta from "../../assets/images/space-invaders-assets/alien-magenta.png";
import alienCyan from "../../assets/images/space-invaders-assets/alien-cyan.png";
import alienYellow from "../../assets/images/space-invaders-assets/alien-yellow.png";
import alienDefault from "../../assets/images/space-invaders-assets/alien.png";
import "./demoPage.scss";

function DemoPage() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const shipImgRef = useRef(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const tileSize = 32;
  const rows = 16;
  const columns = 16;
  const boardWidth = tileSize * columns;
  const boardHeight = tileSize * rows;
  const shipWidth = tileSize * 2;
  const shipHeight = tileSize;
  const shipX = (tileSize * columns) / 2 - tileSize;
  const shipY = tileSize * rows - tileSize * 2;
  const ship = {
    x: shipX,
    y: shipY,
    width: shipWidth,
    height: shipHeight,
  };
  const shipVelocityX = tileSize;
  const alienImages = [alienMagenta, alienCyan, alienYellow, alienDefault];
  const alienArray = [];
  const alienWidth = tileSize * 2;
  const alienHeight = tileSize;
  const alienX = tileSize;
  const alienY = tileSize;
  let alienRows = 2;
  let alienColumns = 3;
  let alienCount = 0;
  let alienVelocityX = 1;
  let bulletArray = [];
  const bulletVelocityY = -10;
  useEffect(() => {
    const board = canvasRef.current;
    board.width = boardWidth;
    board.height = boardHeight;
    contextRef.current = board.getContext("2d");
    shipImgRef.current = new Image();
    shipImgRef.current.src = shipImg;
    shipImgRef.current.onload = () => {
      contextRef.current.drawImage(
        shipImgRef.current,
        ship.x,
        ship.y,
        ship.width,
        ship.height
      );
    };
  }, []);

  function createAliens() {
    for (let c = 0; c < alienColumns; c += 1) {
      for (let r = 0; r < alienRows; r += 1) {
        const randomIndex = Math.floor(Math.random() * alienImages.length);
        const alienImgObj = new Image();
        alienImgObj.src = alienImages[randomIndex];
        const alien = {
          img: alienImgObj,
          x: alienX + c * alienWidth,
          y: alienY + r * alienHeight,
          width: alienWidth,
          height: alienHeight,
          alive: true,
        };
        alienArray.push(alien);
      }
    }
    alienCount = alienArray.length;
  }
  // Bullets
  function detectCollision(a, b) {
    return (
      a.x < b.x + b.width &&
      a.x + a.width > b.x &&
      a.y < b.y + b.height &&
      a.y + a.height > b.y
    );
  }

  function update() {
    requestAnimationFrame(update);
    if (gameOver) {
      return;
    }
    const context = contextRef.current;
    context.clearRect(0, 0, boardWidth, boardHeight);
    // Ship
    context.drawImage(
      shipImgRef.current,
      ship.x,
      ship.y,
      ship.width,
      ship.height
    );
    // Aliens
    for (let i = 0; i < alienArray.length; i += 1) {
      const alien = alienArray[i];
      if (alien.alive) {
        alien.x += alienVelocityX;
        if (alien.x + alien.width >= boardWidth || alien.x <= 0) {
          alienVelocityX *= -1;
          alien.x += alienVelocityX * 2;
          for (let j = 0; j < alienArray.length; j += 1) {
            alienArray[j].y += alienHeight;
          }
        }
        context.drawImage(
          alien.img,
          alien.x,
          alien.y,
          alien.width,
          alien.height
        );
        if (alien.y >= ship.y) {
          setGameOver(true);
        }
      }
    }

    
    for (let i = 0; i < bulletArray.length; i += 1) {
      const bullet = bulletArray[i];
      bullet.y += bulletVelocityY;
      context.fillStyle = "red";
      context.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
      for (let j = 0; j < alienArray.length; j += 1) {
        const alien = alienArray[j];
        if (!bullet.used && alien.alive && detectCollision(bullet, alien)) {
          bullet.used = true;
          alien.alive = false;
          alienCount -= 1;
          setScore((prevScore) => prevScore + 100);
        }
      }
    }
    while (
      bulletArray.length > 0 &&
      (bulletArray[0].used || bulletArray[0].y < 0)
    ) {
      bulletArray.shift();
    }
    if (alienCount === 0) {
      setScore((prevScore) => prevScore + alienColumns * alienRows * 100);
      alienColumns = Math.min(alienColumns + 1, columns / 2 - 2);
      alienRows = Math.min(alienRows + 1, rows - 4);
      if (alienVelocityX > 0) {
        alienVelocityX += 0.2;
      } else {
        alienVelocityX -= 0.2;
      }
      alienArray.length = 0; // Clear the array
      bulletArray = [];
      createAliens();
    }
    context.fillStyle = "white";
    context.font = "16px courier";
    context.fillText(score, 5, 20);
  }
  function moveShip(e) {
    if (gameOver) {
      return;
    }
    if (e.code === "ArrowLeft" && ship.x - shipVelocityX >= 0) {
      ship.x -= shipVelocityX;
    } else if (
      e.code === "ArrowRight" &&
      ship.x + shipVelocityX + ship.width <= boardWidth
    ) {
      ship.x += shipVelocityX;
    }
  }
 
  function shoot(e) {
    if (gameOver) {
      return;
    }
    if (e.code === "Space") {
      const bullet = {
        x: ship.x + (shipWidth * 15) / 32,
        y: ship.y,
        width: tileSize / 8,
        height: tileSize / 2,
        used: false,
      };
      bulletArray.push(bullet);
    }
  }
 
  useEffect(() => {
    createAliens();
    document.addEventListener("keydown", moveShip);
    document.addEventListener("keyup", shoot);
    requestAnimationFrame(update);
    return () => {
      document.removeEventListener("keydown", moveShip);
      document.removeEventListener("keyup", shoot);
    };
  }, []);
  return (
    <>
      <h1>Retrouvez Space Invaders dans nos salles d'arcade !</h1>
      <section className="game-container">
        <canvas ref={canvasRef} />
      </section>
    </>
  );
}
export default DemoPage;









