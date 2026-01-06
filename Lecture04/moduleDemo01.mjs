function areaTriangle(base, height) {
    return 0.5 * base * height; /// (base * height)/2;
}

function areaCircle(radius) {
    return Math.PI * radius * radius; // Math.PI * Math.pow(radius, 2);
}

function areaSquare(wide, long) {
    return wide * long; 
}

export { areaTriangle, areaCircle, areaSquare };