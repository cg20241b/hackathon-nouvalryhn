uniform vec3 lightPosition;
uniform vec3 baseColor;
uniform float ambientIntensity;

varying vec3 vNormal;
varying vec3 vPosition;

void main() {
    // Ambient
    vec3 ambient = baseColor * ambientIntensity;
    
    // Diffuse
    vec3 lightDir = normalize(lightPosition - vPosition);
    float diff = max(dot(vNormal, lightDir), 0.0);
    vec3 diffuse = diff * baseColor;
    
    // Specular (Plastic)
    vec3 viewDir = normalize(-vPosition);
    vec3 halfDir = normalize(lightDir + viewDir);
    float spec = pow(max(dot(vNormal, halfDir), 0.0), 32.0);
    vec3 specular = vec3(0.5) * spec;
    
    vec3 finalColor = ambient + diffuse + specular;
    gl_FragColor = vec4(finalColor, 1.0);
}