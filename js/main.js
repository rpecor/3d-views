//setting scene and camera 
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var action = new Action();

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
        
// creating materials for the cube
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x0f00ff } );
        
// cube object is made of geometry and material
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

var render = function () {
    requestAnimationFrame( render );

    if (action.isAnyKeyDown) {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.04;
    }

        renderer.render(scene, camera);
    };

render();