import { Component,  HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-running-man',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './running-man.component.html',
  styleUrl: './running-man.component.css'
})
export class RunningManComponent implements OnInit{

  manImages: string[] = [
    'assets/runningMan/run1.png', // Add your running stage images
    'assets/runningMan/run2.png',
    'assets/runningMan/run3.png'
  ];
  currentManImage: string;
  isRunning = false;
  isJumping = false;
  score = 0;
  scoreInterval: any;
  bombInterval: any;
  bombs: any[] = [];
  bombMoveIntervals: any[] = []; // Store bomb movement intervals here
  manPosition = { x: 20, y: 10 }; // Man's position change % wise. (800*(20%)) = 160 in css
  gameOverVisible = false;

  constructor() {
    this.currentManImage = this.manImages[0];
  }

  ngOnInit(): void {}

  startGame() {
    this.gameOverVisible = false;
    this.isRunning = true;
    this.score = 0;
    this.bombs = [];
    this.bombMoveIntervals = []; // Store bomb movement intervals here
    this.startRunning();
    this.startScore();
    this.startBombs();
  }

  startRunning() {
    let currentImageIndex = 0;
    setInterval(() => {
      if (!this.isRunning) return;
      currentImageIndex = (currentImageIndex + 1) % this.manImages.length;
      this.currentManImage = this.manImages[currentImageIndex];
    }, 100);
  }

  startScore() {
    this.scoreInterval = setInterval(() => {
      if (!this.isRunning) return;
      this.score++;
    }, 1000);
  }

  // startBombs() {
  //   this.bombInterval = setInterval(() => {
  //     if (!this.isRunning) return;
  //     const bomb = { x: 100 }; // Start at the right edge
  //     this.bombs.push(bomb);
  //     const bombMoveInterval = setInterval(() => {
  //       if (!this.isRunning) return;
  //       bomb.x -= 1; // Move left
  //       if (bomb.x < 0) {
  //         clearInterval(bombMoveInterval);
  //         this.bombs.shift();
  //       }
  //       if (this.checkCollision(bomb)) {
  //         this.gameOver();
  //       }
  //     }, 40);
  //   }, 2000);
  // }

  startBombs() {
    this.bombInterval = setInterval(() => {
      if (!this.isRunning) return;
      const bomb = { x: 100 }; // Start at the right edge (800px, adjust as per game area width)
      this.bombs.push(bomb);
      const bombMoveInterval = setInterval(() => {
        if (!this.isRunning) {
          clearInterval(bombMoveInterval);
          return;
        }
        bomb.x -= 1; // Move left
        if (bomb.x < 0) {
          clearInterval(bombMoveInterval);
          this.bombs.shift();
        }
        if (this.checkCollision(bomb)) {
          this.gameOver();
        }
      }, 40);
      this.bombMoveIntervals.push(bombMoveInterval); // Store bomb movement interval
    }, 2000);
  }

  checkCollision(bomb: any): boolean {
    const manLeft = this.manPosition.x;
    const manRight = this.manPosition.x + 10; // Man's width is 30px
    const bombLeft = bomb.x;
    const bombRight = bomb.x + 5; // Bomb's width is 5px

    const manBottom = this.isJumping ? 110 : 10;
    const manTop = manBottom + 100; // Man's height is 100px
    const bombBottom = 10; // Bomb's height is 20px (bottom position is 10px)
    const bombTop = bombBottom + 20;

    // console.log("man", manLeft, manRight, manTop, manBottom);
    // console.log("bomb", bombLeft, bombRight, bombTop, bombBottom);

    
    return manRight > bombLeft && manLeft < bombRight && manTop > bombBottom && manBottom < bombTop;
    
  }

  jump() {
    if (this.isJumping) return;
    this.isJumping = true;
  }

  endJump() {
    this.isJumping = false;
  }

  gameOver() {
    this.isRunning = false;
    clearInterval(this.scoreInterval);
    clearInterval(this.bombInterval);
    this.gameOverVisible = true;
    // alert(`Game Over! Your score is: ${this.score}`);
    this.clearAllBombIntervals();
  }

  clearAllBombIntervals() {
    this.bombMoveIntervals.forEach(interval => clearInterval(interval));
  }

  restartGame() {
    this.clearAllBombIntervals();
    this.startGame(); // Restart the game
    console.log("Restart button is clicked.")
  }

}
