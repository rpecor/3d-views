// key function to control cube position
function Action() {
    self = this;

    self.leftPressed = false;
    self.rightPressed = false;
    self.upPressed = false;
    self.downPressed = false;

    function handleKeyEvent(e, isKeyDown) {
        if(e.keyCode == 65) {
            self.leftPressed = isKeyDown;
        }

        if(e.keyCode == 68) {
            self.rightPressed = isKeyDown;
        }

        if(e.keyCode == 87) {
            self.upPressed = isKeyDown;
        }

        if(e.keyCode == 83) {
            self.downPressed = isKeyDown;
        }
        if(e.keyCode == 38) {
            self.forwardPressed = isKeyDown;
        }
        if(e.keyCode == 40) {
            self.backwardPressed = isKeyDown;
        }
    }

    document.addEventListener("keydown", function(e) {handleKeyEvent(e, true)});
    document.addEventListener("keyup", function(e) {handleKeyEvent(e, false)});
    
    var mouse = {x:0,y:0};
    var cameraMoves = {x:0,y:0,z:-0.1,move:false,speed:0.1};
    function mouseMove(e){
        
        camera.position.x += Math.max(Math.min((e.clientX - mouse.x) * 0.01, cameraMoves.speed), -cameraMoves.speed);
        camera.position.y += Math.max(Math.min((mouse.y - e.clientY) * 0.01, cameraMoves.speed), -cameraMoves.speed);
        
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        
        }
        window.addEventListener('mousemove', mouseMove);
}