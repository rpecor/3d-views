
function Action() {
    self = this;

    self.isAnyKeyDown = false;

    function handleKeyEvent(e, isKeyDown) {
        self.isAnyKeyDown = isKeyDown
    }

    document.addEventListener("keydown", function(e) {handleKeyEvent(e, true)});
    document.addEventListener("keyup", function(e) {handleKeyEvent(e, false)});
}