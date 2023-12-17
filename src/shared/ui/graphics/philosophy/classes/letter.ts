import { Mouse } from './mouse';

export class Letter {
  x: number;
  y: number;
  originalX: number;
  originalY: number;
  vx: number;
  vy: number;
  letter: string;
  color: string;
  friction: number;
  springFactor: number;
  font: string;

  constructor(
    x: number,
    y: number,
    letter: string,
    font: string,
    color?: string
  ) {
    this.x = x || 0;
    this.y = y || 0;
    this.originalX = x;
    this.originalY = y;
    this.vx = 0;
    this.vy = 0;
    this.letter = letter || '';
    this.color = color || '#ff0000';
    this.friction = 0.9;
    this.springFactor = 0.01;
    this.font = font || "normal 16px 'Raleway'";
  }

  think(mouse: Mouse) {
    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;

    const dist = Math.sqrt(dx * dx + dy * dy);

    // interaction
    if (dist < 30) {
      const angle = Math.atan2(dy, dx); //?

      const tx = mouse.x + Math.cos(angle) * 30;
      const ty = mouse.y + Math.sin(angle) * 30;

      this.vx += tx - this.x;
      this.vy += ty - this.y;
    }

    // spring back
    const dx1 = -(this.x - this.originalX);
    const dy1 = -(this.y - this.originalY);

    this.vx += dx1 * this.springFactor;
    this.vy += dy1 * this.springFactor;
    // friction
    this.vx *= this.friction;
    this.vy *= this.friction;

    // actual move
    this.x += this.vx;
    this.y += this.vy;
  }

  setPos(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.font = this.font;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.letter, this.x, this.y);
    ctx.restore();
  }
}
