import { useEffect, useRef } from 'react';
import { Particle } from '../classes';
import { PropertiesType } from '../types';
import { throttle } from '../utils';

export const WelcomeScreenBackground = ({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.CanvasHTMLAttributes<HTMLCanvasElement>,
  HTMLCanvasElement
>) => {
  const backgroundCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    initBackgroundCanvas();
  }, []);

  const initBackgroundCanvas = () => {
    let playAnimation = true;

    if (!backgroundCanvasRef.current) return;
    const canvas = backgroundCanvasRef.current;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = (canvas.width = innerWidth);
    let h = (canvas.height = innerHeight);
    let particles: Particle[] = [];
    const properties: PropertiesType = {
      bgColor: 'rgba(101, 101, 101, 1)',
      particleColor: 'rgba(255, 255, 255, 1)',
      particleRadius: 3,
      particleCount: 70,
      particleMaxVelocity: 0.5,
      lineLength: 150,
      particleLife: 6,
    };

    for (let i = 0; i < properties.particleCount; i++) {
      particles.push(new Particle(ctx, w, h, properties));
    }

    window.onresize = function () {
      (w = canvas.width = innerWidth), (h = canvas.height = innerHeight);

      particles = [];
      if (!ctx) return;
      for (let i = 0; i < properties.particleCount; i++) {
        particles.push(new Particle(ctx, w, h, properties));
      }
    };

    const mainContentWrapper = document.querySelector(
      '.simplebar-content-wrapper'
    );

    if (mainContentWrapper) {
      mainContentWrapper.addEventListener(
        'scroll',
        throttle(() => {
          const simplebarScrollbar = document.querySelector(
            '.simplebar-vertical>.simplebar-scrollbar'
          ) as HTMLElement;

          if (simplebarScrollbar) {
            const num = parseInt(
              simplebarScrollbar.style.transform.replace(/\D+/g, '')
            );

            if (+String(num).substring(2) > 1500) {
              playAnimation = false;
            } else {
              playAnimation = true;
            }
          }
        }, 300)
      );
    }

    const loop = () => {
      if (playAnimation) {
        reDrawBackground(ctx, w, h);
        reDrawParticles(particles);
        drawLines(ctx, particles, properties);
      }

      requestAnimationFrame(loop);
    };
    loop();
  };
  const reDrawBackground = (
    ctx: CanvasRenderingContext2D,
    w: number,
    h: number
  ) => {
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(0, 0, w, h);
  };
  const drawLines = (
    ctx: CanvasRenderingContext2D,

    
    particles: any[],
    properties: PropertiesType
  ) => {
    let x1, y1, x2, y2, length, opacity;
    for (const i in particles) {
      for (const j in particles) {
        x1 = particles[i].x;
        y1 = particles[i].y;
        x2 = particles[j].x;
        y2 = particles[j].y;
        length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        if (length < properties.lineLength) {
          opacity = 1 - length / properties.lineLength;
          ctx.lineWidth = 0.5;
          ctx.strokeStyle = 'rgba(255, 255, 255, ' + opacity + ')';
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.closePath();
          ctx.stroke();
        }
      }
    }
  };
  const reDrawParticles = (particles: Particle[]) => {
    for (const i in particles) {
      particles[i].reCalculateLife();
      particles[i].position();
      particles[i].reDraw();
    }
  };

  return (
    <canvas
      id="canvas-2"
      ref={backgroundCanvasRef}
      className={className}
      {...props}
    >
      ОЙ, что-то пошло не так, и ваш браузер не поддерживает тег canvas!
    </canvas>
  );
};
