export class Mouse {
  x: number;
  y: number;

  constructor(canvas: HTMLCanvasElement) {
    this.x = 0;
    this.y = 0;

    canvas.onmousemove = (e) => {
      const rect = canvas.getBoundingClientRect();

      this.x = e.clientX - rect.left;
      this.y = e.clientY - rect.top;
    };
    // canvas.touchmove = (e) => {
    //   this.x = e.clientX - rect.left;
    //   this.y = e.clientY - rect.top;
    // };
  }
}
