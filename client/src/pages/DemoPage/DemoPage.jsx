import { useRef, useEffect, useState } from "react";
import { Form } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [showStartPopup, setShowStartPopup] = useState(true);
  const [showEndPopup, setShowEndPopup] = useState(false);
  const [toastShown, setToastShown] = useState(false); // Track if toast has been shown
  const scoreRef = useRef(score);
  const animationIdRef = useRef(null);
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
  let alienArray = [];
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
    alienArray = [];
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

  function detectCollision(a, b) {
    return (
      a.x < b.x + b.width &&
      a.x + a.width > b.x &&
      a.y < b.y + b.height &&
      a.y + a.height > b.y
    );
  }

  function update() {
    if (gameOver) {
      return;
    }
    animationIdRef.current = requestAnimationFrame(update);
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
    // Bullets
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
          setScore((prevScore) => {
            const newScore = prevScore + 100;
            scoreRef.current = newScore;
            return newScore;
          });
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
      setScore((prevScore) => {
        const newScore = prevScore + alienColumns * alienRows * 100;
        scoreRef.current = newScore; // Update the reference
        return newScore;
      });
      alienColumns = Math.min(alienColumns + 1, columns / 2 - 2);
      alienRows = Math.min(alienRows + 1, rows - 4);
      if (alienVelocityX > 0) {
        alienVelocityX += 0.2;
      } else {
        alienVelocityX -= 0.2;
      }
      createAliens();
      bulletArray = [];
    }
    context.fillStyle = "white";
    context.font = "16px courier";
    context.fillText(`Score: ${scoreRef.current}`, 5, 20);
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

  function resetGame() {
    setScore(0);
    scoreRef.current = 0;
    setGameOver(false);
    setToastShown(false); // Reset the toastShown state
    alienRows = 2;
    alienColumns = 3;
    alienVelocityX = 1;
    ship.x = shipX;
    ship.y = shipY;
    createAliens();
    bulletArray = [];

    const context = contextRef.current;
    if (context) {
      context.clearRect(0, 0, boardWidth, boardHeight);
    }

    animationIdRef.current = requestAnimationFrame(update);
  }

  useEffect(() => {
    document.addEventListener("keydown", moveShip);
    document.addEventListener("keyup", shoot);
    return () => {
      document.removeEventListener("keydown", moveShip);
      document.removeEventListener("keyup", shoot);
    };
  }, []);

  useEffect(() => {
    const handleTouchMove = (e) => {
      const touchX = e.touches[0].clientX;
      if (touchX < window.innerWidth / 2 && ship.x - shipVelocityX >= 0) {
        moveShip({ code: "ArrowLeft" });
      } else if (
        touchX >= window.innerWidth / 2 &&
        ship.x + shipVelocityX + ship.width <= boardWidth
      ) {
        moveShip({ code: "ArrowRight" });
      }
    };

    const handleTouchStart = (e) => {
      if (e.touches.length === 2) {
        shoot({ code: "Space" });
      }
    };

    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchstart", handleTouchStart);

    return () => {
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchstart", handleTouchStart);
    };
  }, [gameOver]);

  function handleGameOver() {
    cancelAnimationFrame(animationIdRef.current);
    setShowEndPopup(true);
  }

  function startGame() {
    setShowStartPopup(false);
    resetGame();
  }

  function restartGame() {
    window.location.reload();
  }

  useEffect(() => {
    if (gameOver) {
      handleGameOver();
    }
  }, [gameOver]);

  useEffect(() => {
    if (scoreRef.current >= 15000 && !toastShown) {
      toast.success("🏆🎉 Vous avez gagné un jeton! 🎉🏆");
      setToastShown(true); 
    }
  }, [score]); // Run this effect whenever the score changes

  return (
    <main>
      <h1>Retrouvez Space Invaders dans nos salles d'arcade !</h1>
      <section className="game-container">
        <canvas ref={canvasRef} aria-label="Espace de jeu Space Invaders" />
        {showStartPopup && (
          <aside className="popup">
            <section
              className="popup-content"
              aria-labelledby="popup debut de partie"
            >
              <h2>Bienvenue sur Space Invaders</h2>
              <button type="button" onClick={startGame}>
                Commencer la partie
              </button>
            </section>
          </aside>
        )}
        {showEndPopup && (
          <aside className="popup">
            <section
              className="popup-content"
              aria-labelledby="popup fin de partie"
            >
              <h2>Game Over</h2>
              <p>Score final: {score}</p>
              <Form method="post">
                <input type="hidden" name="score" value={score} />
                <button type="submit" onClick={restartGame}>
                  Enregistrer le score
                </button>
              </Form>
            </section>
          </aside>
        )}
        <section
          className="touch-controls"
          aria-labelledby="bouttons de controle jeu mobile"
        >
          <button
            type="button"
            onTouchStart={() => moveShip({ code: "ArrowLeft" })}
          >
            Gauche
          </button>
          <button type="button" onTouchStart={() => shoot({ code: "Space" })}>
            Tirer
          </button>
          <button
            type="button"
            onTouchStart={() => moveShip({ code: "ArrowRight" })}
          >
            Droite
          </button>
        </section>
      </section>
    </main>
  );
}

export default DemoPage;
