import * as THREE from 'three';

export function createAlphabetMaterial(vertexShader, fragmentShader, color, lightPosition, ambientIntensity) {
    return new THREE.ShaderMaterial({
        uniforms: {
            lightPosition: { value: lightPosition },
            baseColor: { value: new THREE.Color(color) },
            ambientIntensity: { value: ambientIntensity }
        },
        vertexShader,
        fragmentShader
    });
}

export function createDigitMaterial(vertexShader, fragmentShader, color, lightPosition, ambientIntensity) {
    return new THREE.ShaderMaterial({
        uniforms: {
            lightPosition: { value: lightPosition },
            baseColor: { value: new THREE.Color(color) },
            ambientIntensity: { value: ambientIntensity }
        },
        vertexShader,
        fragmentShader
    });
}

export function createLightCubeMaterial(vertexShader, fragmentShader) {
    return new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        transparent: true
    });
}