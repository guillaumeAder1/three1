<template>
    <div id="container"></div>
</template>

<script>
import {
  PerspectiveCamera,
  Scene,
  BoxGeometry,
  MeshNormalMaterial,
  Mesh,
  WebGLRenderer
} from 'three';

export default {
  name: 'ThreeTest',
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null
    }
  },
  methods: {
    init: function() {
      let container = document.getElementById('container');

      this.camera = new PerspectiveCamera(70, container.clientWidth/container.clientHeight, 0.01, 10);
      this.camera.position.z = 1;

      this.scene = new Scene();

      let geometry = new BoxGeometry(0.2, 0.2, 0.2);
      let material = new MeshNormalMaterial();

      this.mesh = new Mesh(geometry, material);
      this.scene.add(this.mesh);

      this.renderer = new WebGLRenderer({antialias: true});
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(this.renderer.domElement);

    },
    animate: function() {
      requestAnimationFrame(this.animate);
      this.mesh.rotation.x += 0.01;
      this.mesh.rotation.y += 0.02;
      this.renderer.render(this.scene, this.camera);
    }
  },
  mounted() {
    this.init();
    this.animate();
  }
}
</script>

<style scoped>
#container{
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>