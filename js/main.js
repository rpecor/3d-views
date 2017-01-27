//setting scene and camera 
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var action = new Action();

var renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x659EC7);
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Adding two lights 
var light = new THREE.AmbientLight( 0xffffff, 0.5 );
scene.add(light);  

var light2 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light2); 

// creating materials for the cube
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshLambertMaterial( { color: 0xF3FFE2 } );
        
// cube object is made of geometry and material
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

//rendering the cube movement from key presses
var render = function () {
    requestAnimationFrame( render );

    if (action.leftPressed) {
        cube.position.x -= 0.1;
    }
    if (action.rightPressed) {
        cube.position.x += 0.1;
    }
    if (action.upPressed) {
        cube.position.y += 0.1;
    }
    if (action.downPressed) {
        cube.position.y -= 0.1;
    }
    if (action.forwardPressed) {
        cube.position.z -= 0.1;
    }
    if (action.backwardPressed) {
        cube.position.z += 0.1;
    }
        renderer.render(scene, camera);
    };

requestAnimationFrame(render);