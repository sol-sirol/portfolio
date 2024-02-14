import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';
//@ts-ignore
import { OrbitControls } from 'https://unpkg.com/three@0.112/examples/jsm/controls/OrbitControls.js';

import { SceneUtils } from '../utils';

export const RubikCubic = ({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.CanvasHTMLAttributes<HTMLCanvasElement>,
  HTMLCanvasElement
>) => {
  const cubicCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    initCubic();
  }, []);

  useEffect(() => {
    const cubeControlButtonRevers = document.querySelector(
      '.cube-control__reverse-button'
    );

    cubeControlButtonRevers?.addEventListener(
      'click',
      turnItInTheOppositeDirection
    );
    return () =>
      cubeControlButtonRevers?.removeEventListener(
        'click',
        turnItInTheOppositeDirection
      );
  }, []);

  const turnItInTheOppositeDirection = () => {
    const cubeControlButtonRevers = document.querySelector(
      '.cube-control__reverse-button'
    );
    cubeControlButtonRevers?.classList.toggle('reversOn');
  };

  const initCubic = () => {
    let canvas_1 = cubicCanvasRef.current;
    const container = document.querySelector('.canvas-container');
    const cubeControlButton = document.querySelectorAll(
      '.cube-control__button'
    );
    const cubeControlButtonRevers = document.querySelector(
      '.cube-control__reverse-button'
    );
    let shiftDown;

    if (
      !cubeControlButtonRevers ||
      !canvas_1 ||
      !container ||
      !cubeControlButton
    )
      return;

    // Создаём рендерер
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas_1,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(canvas_1.clientWidth, canvas_1.clientHeight);

    // Создаём сцену
    const scene = new THREE.Scene();
    // scene.background = new THREE.Color(0x204550);

    //@ts-ignore
    // window.scene = scene;
    // Создаём камеру
    const camera = new THREE.PerspectiveCamera(
      60,
      canvas_1.clientWidth / canvas_1.clientHeight,
      1,
      10000
    );
    camera.position.set(-200, 200, 250);

    // Создаём управление камерой

    // console.log(new THREE)

    const orbit = new OrbitControls(camera, container); //

    orbit.autoRotate = true;
    orbit.enableDamping = true;
    orbit.dampingFactor = 0.5;
    //orbit.enableKeys = false;
    orbit.enablePan = false;
    orbit.enableZoom = false;

    // Добавляем немнго света
    scene.add(new THREE.AmbientLight(0xf7f7f7));

    // Запускаем перерисовку
    void (function animate() {
      TWEEN.update();
      // orbit.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    })();

    void (function initializeCube() {
      // Создаём константу-размер малого кубика
      const SIZE_OF_PIECE = 65;
      const SIZE_OF_PIECE_WITH_GAPS = SIZE_OF_PIECE * 1.02;
      // Создаём константы для сторон
      const FRONT = 'front',
        BACK = 'back',
        TOP = 'top',
        BOTTOM = 'bottom',
        LEFT = 'left',
        RIGHT = 'right';

      const cube3x3 = new Array(26).fill(null).map(() => ({
        colors: new Array(6).fill(''),
        position: new Array(3).fill(0),
      }));

      void (function initialize3x3() {
        //@ts-ignore
        getSide(FRONT, cube3x3).forEach(({ colors, position }, index) => {
          colors[0] = 'white' + '-' + index;
          position[0] = 1;
        });
        //@ts-ignore
        getSide(BACK, cube3x3).forEach(({ colors, position }, index) => {
          colors[1] = 'orange' + '-' + index;
          position[0] = -1;
        });
        //@ts-ignore
        getSide(TOP, cube3x3).forEach(({ colors, position }, index) => {
          colors[2] = 'yellow' + '-' + index;
          position[1] = 1;
        });
        //@ts-ignore
        getSide(BOTTOM, cube3x3).forEach(({ colors, position }, index) => {
          colors[3] = 'blue' + '-' + index;
          position[1] = -1;
        });
        //@ts-ignore
        getSide(LEFT, cube3x3).forEach(({ colors, position }, index) => {
          colors[4] = 'red' + '-' + index;
          position[2] = 1;
        });
        //@ts-ignore
        getSide(RIGHT, cube3x3).forEach(({ colors, position }, index) => {
          colors[5] = 'green' + '-' + index;
          position[2] = -1;
        });
      })();

      function getSide(
        side: string,
        array: {
          colors: any[];
          position: any[];
        }[]
      ) {
        switch (side) {
          case FRONT:
            return array.slice(0, 9);
          case BACK:
            return array.slice(17);
          case TOP:
            return [
              ...array.slice(0, 3),
              ...array.slice(9, 12),
              ...array.slice(17, 20),
            ];
          case BOTTOM:
            return [
              ...array.slice(6, 9),
              ...array.slice(14, 17),
              ...array.slice(23, 26),
            ];
          case LEFT:
            return [
              array[0],
              array[3],
              array[6],
              array[9],
              array[12],
              array[14],
              array[17],
              array[20],
              array[23],
            ];
          case RIGHT:
            return [
              array[2],
              array[5],
              array[8],
              array[11],
              array[13],
              array[16],
              array[19],
              array[22],
              array[25],
            ];

          default:
            return 'left';
        }
      }

      const createPiece = (function () {
        const loader = new THREE.TextureLoader();

        const BLACK_MATERIAL = new THREE.MeshBasicMaterial({ color: 0x000000 });

        const RED_MATERIAL: any[] = [],
          WHITE_MATERIAL: any[] = [],
          ORANGE_MATERIAL: any[] = [],
          YELLOW_MATERIAL: any[] = [],
          GREEN_MATERIAL: any[] = [],
          BLUE_MATERIAL: any[] = [];

        for (let i = 1; i < 10; i++) {
          BLUE_MATERIAL.push(
            new THREE.MeshBasicMaterial({
              map: loader.load(
                new URL(`../images/cubic/blue/${i}.jpg`, import.meta.url).href
              ),
            })
          );
          RED_MATERIAL.push(
            new THREE.MeshBasicMaterial({
              map: loader.load(
                new URL(`../images/cubic/red/${i}.jpg`, import.meta.url).href
              ),
            })
          );
          YELLOW_MATERIAL.push(
            new THREE.MeshBasicMaterial({
              map: loader.load(
                new URL(`../images/cubic/yellow/${i}.jpg`, import.meta.url).href
              ),
            })
          );
          WHITE_MATERIAL.push(
            new THREE.MeshBasicMaterial({
              map: loader.load(
                new URL(`../images/cubic/white/${i}.jpg`, import.meta.url).href
              ),
            })
          );
          GREEN_MATERIAL.push(
            new THREE.MeshBasicMaterial({
              map: loader.load(
                new URL(`../images/cubic/green/${i}.jpg`, import.meta.url).href
              ),
            })
          );
          ORANGE_MATERIAL.push(
            new THREE.MeshBasicMaterial({
              map: loader.load(
                new URL(`../images/cubic/orange/${i}.jpg`, import.meta.url).href
              ),
            })
          );
        }

        const pieceGeometry = new THREE.BoxGeometry(
          SIZE_OF_PIECE,
          SIZE_OF_PIECE,
          SIZE_OF_PIECE
        );

        // function mapColor(color) {
        //   switch (color) {
        //     case 'white':
        //       return WHITE_MATERIAL;
        //     case 'orange':
        //       return ORANGE_MATERIAL;
        //     case 'green':
        //       return GREEN_MATERIAL;
        //     case 'red-1':
        //       return new_RED_MATERIAL[0];
        //     case 'yellow':
        //       return YELLOW_MATERIAL;
        //     case 'blue':
        //       return BLUE_MATERIAL;
        //     default:
        //       return BLACK_MATERIAL;
        //   }
        // } // Убрать

        function mapColor2(color: string) {
          for (let i = 0; i < 9; i++) {
            switch (color) {
              case `white-${i}`:
                return WHITE_MATERIAL[i];
              case `orange-${i}`:
                return ORANGE_MATERIAL[i];
              case `green-${i}`:
                return GREEN_MATERIAL[i];
              case `red-${i}`:
                return RED_MATERIAL[i];
              case `yellow-${i}`:
                return YELLOW_MATERIAL[i];
              case `blue-${i}`:
                return BLUE_MATERIAL[i];
            }
          }
          switch (color) {
            default:
              return BLACK_MATERIAL;
          }
        }

        return (colors: any) =>
          new THREE.Mesh(pieceGeometry, colors.map(mapColor2));
      })();

      const allPieces: THREE.Mesh<
        THREE.BoxGeometry,
        any,
        THREE.Object3DEventMap
      >[] = [];
      cube3x3.forEach(({ colors, position: [x, y, z] }) => {
        const smallPiece = createPiece(colors);
        smallPiece.position.set(
          SIZE_OF_PIECE_WITH_GAPS * x,
          SIZE_OF_PIECE_WITH_GAPS * y,
          SIZE_OF_PIECE_WITH_GAPS * z
        );
        allPieces.push(smallPiece);
        scene.add(smallPiece);
      });

      void (function controller() {
        const control = new THREE.Object3D();
        //@ts-ignore
        window.control = control;
        //@ts-ignore
        window.pieces = allPieces;

        scene.add(control);
        const tween = new TWEEN.Tween({ delta: 0 });
        tween.to({ delta: 1 }, 350);
        //@ts-ignore
        let axis, clockwise;
        const ninetyDegrees = Math.PI / 2;
        const rotatingSide: THREE.Mesh<
          THREE.BoxGeometry,
          any,
          THREE.Object3DEventMap
        >[] = [];
        tween.onStart(() => {
          control.rotation.set(0, 0, 0);
          control.updateMatrixWorld(true);
          rotatingSide.forEach((box) => {
            box.updateMatrixWorld(true);
            //@ts-ignore
            SceneUtils.attach(box, scene, control);
          });
        });
        //@ts-ignore
        tween.onUpdate(({ delta }) => {
          //@ts-ignore
          control.rotation[axis] = ninetyDegrees * clockwise * delta;
        });
        //@ts-ignore
        tween.onComplete((tick) => {
          control.updateMatrixWorld(true);
          rotatingSide.forEach((box) => {
            box.updateMatrixWorld(true);

            SceneUtils.detach(box, scene, control);
          });
          rotatingSide.length = 0;
          tick.delta = 0;
        });

        window.addEventListener(
          'keydown',
          function handleKeyDown({ keyCode, shiftKey }) {
            if (tween.isPlaying()) return;

            if (cubeControlButtonRevers.classList.contains('reversOn')) {
              shiftDown = true;
            } else {
              shiftDown = false;
            }

            //clockwise = shiftKey ? -1 : 1;
            clockwise = shiftDown || shiftKey ? -1 : 1;

            let filtered;
            switch (keyCode) {
              case 81: // q
                axis = 'x';
                filtered = allPieces.filter(
                  ({ position: { x } }) => x > SIZE_OF_PIECE
                );
                filtered.forEach((item) => rotatingSide.push(item));
                tween.start();
                break;
              case 65: // a
                axis = 'x';
                filtered = allPieces.filter(
                  ({ position: { x } }) => x < -SIZE_OF_PIECE
                );
                filtered.forEach((item) => rotatingSide.push(item));
                tween.start();
                break;
              case 87: // w
                axis = 'y';
                filtered = allPieces.filter(
                  ({ position: { y } }) => y > SIZE_OF_PIECE
                );
                filtered.forEach((item) => rotatingSide.push(item));
                tween.start();
                break;
              case 83: // s
                axis = 'y';
                filtered = allPieces.filter(
                  ({ position: { y } }) => y < -SIZE_OF_PIECE
                );
                filtered.forEach((item) => rotatingSide.push(item));
                tween.start();
                break;
              case 69: // e
                axis = 'z';
                filtered = allPieces.filter(
                  ({ position: { z } }) => z > SIZE_OF_PIECE
                );
                filtered.forEach((item) => rotatingSide.push(item));
                tween.start();
                break;
              case 68: // d
                axis = 'z';
                filtered = allPieces.filter(
                  ({ position: { z } }) => z < -SIZE_OF_PIECE
                );
                filtered.forEach((item) => rotatingSide.push(item));
                tween.start();
                break;
            }
          }
        );

        cubeControlButton.forEach((e) => {
          e.addEventListener('click', () => {
            if (tween.isPlaying()) return;

            if (cubeControlButtonRevers.classList.contains('reversOn')) {
              shiftDown = true;
            } else {
              shiftDown = false;
            }

            clockwise = shiftDown ? -1 : 1;

            let filtered;
            switch (e.innerHTML) {
              case 'q': // q
                axis = 'x';
                //@ts-ignore
                filtered = allPieces.filter(
                  ({ position: { x } }) => x > SIZE_OF_PIECE
                );
                //@ts-ignore
                filtered.forEach((item) => rotatingSide.push(item));
                tween.start();
                break;
              case 'a': // a
                axis = 'x';
                //@ts-ignore
                filtered = allPieces.filter(
                  ({ position: { x } }) => x < -SIZE_OF_PIECE
                );
                //@ts-ignore
                filtered.forEach((item) => rotatingSide.push(item));
                tween.start();
                break;
              case 'w': // w
                axis = 'y';
                //@ts-ignore
                filtered = allPieces.filter(
                  ({ position: { y } }) => y > SIZE_OF_PIECE
                );
                //@ts-ignore
                filtered.forEach((item) => rotatingSide.push(item));
                tween.start();
                break;
              case 's': // s
                axis = 'y';
                //@ts-ignore
                filtered = allPieces.filter(
                  ({ position: { y } }) => y < -SIZE_OF_PIECE
                );
                //@ts-ignore
                filtered.forEach((item) => rotatingSide.push(item));
                tween.start();
                break;
              case 'e': // e
                axis = 'z';
                //@ts-ignore
                filtered = allPieces.filter(
                  ({ position: { z } }) => z > SIZE_OF_PIECE
                );
                //@ts-ignore
                filtered.forEach((item) => rotatingSide.push(item));
                tween.start();
                break;
              case 'd': // d
                axis = 'z';
                //@ts-ignore
                filtered = allPieces.filter(
                  ({ position: { z } }) => z < -SIZE_OF_PIECE
                );
                //@ts-ignore
                filtered.forEach((item) => rotatingSide.push(item));
                tween.start();
                break;
            }
          });
        });
      })();
    })();
  };

  return (
    <canvas id="canvas_1" ref={cubicCanvasRef} className={className} {...props}>
      ОЙ, что-то пошло не так, и ваш браузер не поддерживает тег canvas!
    </canvas>
  );
};
