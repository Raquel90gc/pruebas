import { describe, expect, it } from "vitest";
import {div} from './div'

describe('Función div', () => {

    it('div debe ser una función', () => {
        expect(typeof div).toBe('function'); //Es una función
    });

    it('div comprobación de las divisiones', () => {
        expect(div(2,2)).toBe(1); //número positivo entre dos números positivos
        expect(div(-1,-1)).toBe(1); //dos números negativos enteros debe dar un número positivo.
        expect(div(6,-3)).toBe(-2); //un número positivo y otro negativo debe dar un número negativo
    });

});