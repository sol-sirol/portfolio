import { PropertiesType } from "../types";

export class Particle {
  ctx: CanvasRenderingContext2D;
  properties: PropertiesType
  x: number
  y: number 
  velocityX: number
  velocityY: number
  life: number
  ff: number
  w: number
  h: number


  constructor(ctx: CanvasRenderingContext2D, w: number, h: number, properties: PropertiesType) {
    this.ctx = ctx;
    this.properties = properties;
    this.w = w;
    this.h = h;
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.velocityX =
      Math.random() * (properties.particleMaxVelocity * 2) -
      properties.particleMaxVelocity;
    this.velocityY =
      Math.random() * (properties.particleMaxVelocity * 2) -
      properties.particleMaxVelocity;
    this.life = Math.random() * properties.particleLife * 60;
    this.ff = Math.random() * 4.5;
    this.ff < 1.8 ? (this.ff = 1.8) : (this.ff = this.ff);
  }
  position() {
    (this.x + this.velocityX > this.w && this.velocityX > 0) ||
    (this.x + this.velocityX < 0 && this.velocityX < 0)
      ? (this.velocityX *= -1)
      : this.velocityX;
    (this.y + this.velocityY > this.h && this.velocityY > 0) ||
    (this.y + this.velocityY < 0 && this.velocityY < 0)
      ? (this.velocityY *= -1)
      : this.velocityY;
    this.x += this.velocityX;
    this.y += this.velocityY;
  }
  reDraw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.ff, 0, Math.PI * 2);
    this.ctx.closePath();
    this.ctx.fillStyle = this.properties.particleColor;
    this.ctx.fill();
  }
  reCalculateLife() {
    if (this.life < 1) {
      this.x = Math.random() * this.w;
      this.y = Math.random() * this.h;
      this.velocityX =
        Math.random() * (this.properties.particleMaxVelocity * 2) -
        this.properties.particleMaxVelocity;
      this.velocityY =
        Math.random() * (this.properties.particleMaxVelocity * 2) -
        this.properties.particleMaxVelocity;
      this.life = Math.random() * this.properties.particleLife * 60;
    }
    this.life--;
  }
}

