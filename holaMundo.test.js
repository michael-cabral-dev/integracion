const holaMundo = require('./holaMundo');

test('Debe devolver "¡Hola, Mundo!"', () => {
    expect(holaMundo()).toBe("¡Hola, Mundo!");
});