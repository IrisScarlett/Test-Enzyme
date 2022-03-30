describe('Aqui se realizan las pruebas de demo.test.js', () => {
    test('deben ser iguales los string', () => {

        //1. Inicializaciion
        const mensaje = 'Hola Hasu';

        //2. estimulo
        const mensaje2 = 'Hola Hasu';

        //3. Observar el comportamiento
        expect(mensaje).toBe(mensaje2);
    })
})