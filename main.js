import './style.css';
import * as THREE from 'three';
import { Scene } from './src/scene/scene.js';
import { Controls } from './src/utils/controls.js';
import { createAlphabetMaterial, createDigitMaterial, createLightCubeMaterial } from './src/materials/shaderMaterials.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';

// Import shaders
import vertexShader from './src/shaders/vertexShader.glsl';
import alphabetFragmentShader from './src/shaders/alphabetFragmentShader.glsl';
import digitFragmentShader from './src/shaders/digitFragmentShader.glsl';
import lightCubeFragmentShader from './src/shaders/lightCubeFragmentShader.glsl';

class App {
    constructor() {
        this.scene = new Scene();
        this.setupObjects();
        this.controls = new Controls(this.scene.camera, this.lightCube);
        this.animate();
    }

    setupObjects() {
        // Create light cube
        const cubeGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
        const cubeMaterial = createLightCubeMaterial(vertexShader, lightCubeFragmentShader);
        this.lightCube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        this.scene.scene.add(this.lightCube);

        // Create text meshes (you'll need to load a font first)
        const loader = new FontLoader();
        loader.load('https://threejs.org/examples/fonts/gentilis_bold.typeface.json', (font) => {
            // Alphabet mesh
            const alphabetGeometry = new TextGeometry('Y', {
                font: font,
                size: 1,
                height: 0.2,
            });
            const alphabetMaterial = createAlphabetMaterial(
                vertexShader,
                alphabetFragmentShader,
                '#32A899',
                this.lightCube.position,
                0.289
            );
            const alphabetMesh = new THREE.Mesh(alphabetGeometry, alphabetMaterial);
            alphabetMesh.position.x = -2.5;
            this.scene.scene.add(alphabetMesh);

            // Digit mesh
            const digitGeometry = new TextGeometry('9', {
                font: font,
                size: 1,
                height: 0.2,
            });
            const digitMaterial = createDigitMaterial(
                vertexShader,
                digitFragmentShader,
                '#CD5766',
                this.lightCube.position,
                0.289
            );
            const digitMesh = new THREE.Mesh(digitGeometry, digitMaterial);
            digitMesh.position.x = 2;
            this.scene.scene.add(digitMesh);
        });
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.scene.render();
    }
}

new App();