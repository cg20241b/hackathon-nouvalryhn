export class Controls {
    constructor(camera, cube) {
        this.camera = camera;
        this.cube = cube;
        this.setupKeyControls();
    }

    setupKeyControls() {
        document.addEventListener('keydown', (event) => {
            switch(event.key.toLowerCase()) {
                case 'w':
                    this.cube.position.y += 0.1;
                    break;
                case 's':
                    this.cube.position.y -= 0.1;
                    break;
                case 'a':
                    this.camera.position.x -= 0.1;
                    break;
                case 'd':
                    this.camera.position.x += 0.1;
                    break;
            }
        });
    }
}