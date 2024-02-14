import { useEffect, useRef } from 'react';
import { Ball, Letter, Mouse } from '../classes';

export const PhilosophyCanvas = ({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.CanvasHTMLAttributes<HTMLCanvasElement>,
  HTMLCanvasElement
>) => {
  const philosophyCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const text_title = 'Философия и Ценности',
      text_1 = 'Я думаю, что все хотят одного и того же — отношений с',
      text_2 = 'человечеством, мира с метафизическим и опыта со вселенной. ',
      text_3 = 'Я пытаюсь понять эти вещи своими ценностями: подлинность,',
      text_4 = 'креативность и гостеприимство.';

    if (!philosophyCanvasRef.current) return;
    const canvas = philosophyCanvasRef.current;
    const ctx = canvas.getContext('2d');

    let canvasWidth = (canvas.width = canvas.clientWidth);
    let canvasHeight = (canvas.height = canvas.clientHeight);

    const pos = new Mouse(canvas);

    let mouse = new Ball(pos.x, pos.y, 30, '#ff0000');
    let letters: Letter[] = [];

    function drawLetters() {
      function drawLetter(row: string, rowNember: number, font: string) {
        let x = 0;
        let y = 0;

        for (let i = 0; i < row.length; i++) {
          x = 72 + (canvasWidth / 79) * i;
          y = 160 + (canvasWidth / 23.33) * rowNember;
          letters.push(new Letter(x, y, row[i], font));
        }
      }

      drawLetter(text_1, 1, `normal ${canvasWidth / 49.45}px 'Raleway'`);
      drawLetter(text_2, 2, `normal ${canvasWidth / 49.45}px 'Raleway'`);
      drawLetter(text_3, 3, `normal ${canvasWidth / 49.45}px 'Raleway'`);
      drawLetter(text_4, 4, `normal ${canvasWidth / 49.45}px 'Raleway'`);
    }
    drawLetters();
    function drawLettersTitle() {
      function drawLetterTitle(row: string, rowNember: number, font: string) {
        let x = 0;
        let y = 0;

        for (let i = 0; i < row.length; i++) {
          x = 72 + (canvasWidth / 23.33) * i;
          y = 120 + (canvasWidth / 46.66) * rowNember;
          letters.push(new Letter(x, y, row[i], font));
        }
      }

      drawLetterTitle(text_title, 0, `bold ${canvasWidth / 14.35}px 'Raleway'`);
    }
    drawLettersTitle();

    function render() {
      window.requestAnimationFrame(render);
      if (!ctx) return;

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      letters.forEach((letter) => {
        letter.think(pos);
        letter.draw(ctx);
      });
      // drawLetters();
      mouse.setPos(pos.x, pos.y);
      mouse.draw(ctx);
    }

    render();
  }, []);

  return (
    <canvas
      id="canvas-3"
      ref={philosophyCanvasRef}
      className={className}
      {...props}
    >
      ОЙ, что-то пошло не так, и ваш браузер не поддерживает тег canvas!
    </canvas>
  );
};
