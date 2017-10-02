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

var geometry2 = new THREE.BoxGeometry( 1, 4, 2 );
var material2 = new THREE.MeshLambertMaterial( { color: 0xF3FFE2 } );
// cube object is made of geometry and material
var cube = new THREE.Mesh( geometry, material );
var cube2 = new THREE.Mesh(geometry2 , material2);
scene.add( cube, cube2 );

camera.position.z = 9;
camera.position.y = 3;
camera.position.x = 4;

// Random cubes
var randoms = [];
initCubes(50);
function initCubes(n){  
    
    
        for (var i=0; i<n; i++) {
    
    
            randoms[i] = makeRandom();      
            createCube(randoms[i].x, randoms[i].y, randoms[i].z, randoms[i].width, randoms[i].height, randoms[i].depth);
    
    
        }//for
    
    
    }//initCubes()
    
    function makeRandom(){
    
        var x = Math.floor(Math.random() * 20 -10);
        var y = Math.floor(Math.random() * 20 -10);
        var z = Math.floor(Math.random() * -50);
    
        var width = Math.ceil(Math.random() * 6);
        var height = Math.ceil(Math.random() * 6);
        var depth = 2;
    
        return {x:x, y:y, z:z, width:width, height:height, depth:depth};
    
    }   // makeRandom()
    
    
    function createCube(x,y,z,width,height,depth){
    
        var geometry = new THREE.BoxGeometry( width, height, depth );
    
        var cube = new THREE.Mesh(geometry);
        scene.add(cube);
        cube.position.set(x,y,z);
    
    }//createCube()


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