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
}