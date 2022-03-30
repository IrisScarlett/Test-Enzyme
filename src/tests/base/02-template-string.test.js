import '@testing-library/jest-dom';

import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe de retornar hola Hasu', () => { 
        const nombre = 'Hasu';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre);
     })

     //getSaludo debe de retornar Hola Onyx si no hay argumento nombre
     
     test('getSaludo debe de retornar Hola Onyx si no hay argumento nombre ', () => { 
         const saludo = getSaludo();

         expect(saludo).toBe('Hola Onyx');
     })
})