import * as THREE from 'three';

export const SceneUtils = {
    detach: function (
      child: THREE.Mesh<THREE.BoxGeometry, any, THREE.Object3DEventMap>,
      scene: THREE.Scene,
      parent: THREE.Object3D<THREE.Object3DEventMap>
    ) {
      child.applyMatrix4(parent.matrixWorld);
      parent.remove(child);
      scene.add(child);
    },
  
    attach: function (
      child: THREE.Mesh<THREE.BoxGeometry, any, THREE.Object3DEventMap>,
      scene: THREE.Scene,
      parent: THREE.Object3D<THREE.Object3DEventMap>
    ) {
      // child.applyMatrix(new THREE.Matrix4().getInverse(parent.matrixWorld));
      child.applyMatrix4(new THREE.Matrix4().invert());
  
      scene.remove(child);
      parent.add(child);
    },
  };