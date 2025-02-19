<script setup>
import * as THREE from 'three';

onMounted(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  scene.add( new THREE.AmbientLight( '#669bbc' ) );

  const light = new THREE.DirectionalLight( '#fdf0d5', 15 );
  light.position.set( 0.5, 0.5, 1 );
  light.castShadow = true;
  light.shadow.camera.zoom = 4; // tighter shadow map
  scene.add( light );


  const geometryBackground = new THREE.PlaneGeometry( 100, 100 );
  const materialBackground = new THREE.MeshPhongMaterial( { color: '#003049' } );

  const background = new THREE.Mesh( geometryBackground, materialBackground );
  background.receiveShadow = true;
  background.position.set( 0, 0, - 1 );
  scene.add( background );



  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshPhongMaterial( { color: '#c1121f' } );
  const cube = new THREE.Mesh( geometry, material );
  cube.castShadow = true;
  cube.receiveShadow = true;
  scene.add( cube );

  camera.position.z = 3;

  const renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.shadowMap.enabled = true;
  renderer.setSize( window.innerWidth/2, window.innerHeight/2 );
  document.querySelector('.anim-here')?.prepend( renderer.domElement );

  function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );

  }

  animate();
})

</script>

<template>
  <div>
    <h1 class="title">Hello World!</h1>
    <div class="anim-here"></div>
  </div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

.anim-here {
  width: fit-content;
  height: 90vh;
  margin: 0 auto;
}

.title {
  font-family: "Manrope", serif;
  //position: absolute;
  //top: 10px;
  width: 100%;
  text-align: center;
  z-index: 100;
  display: block;
}
</style>