import { describe, expect, it } from "vitest";
import {multi} from './multi'

describe('Función Multiplicar', () => {

    it('Multi debe ser una función', () => {
        expect(typeof multi).toBe('function');
    });

    it('Multi debe multiplicar correctamente dos números positivos', () => {
        expect(multi(3,4)).toBe(12);
    });

    it('Multi debe multiplicar correctamente dos números negativos', () => {
        expect(multi(-3,-4)).toBe(12);
    });

    it('Multi debe multiplicar correctamente un número negativo y otro positivo', () => {
        expect(multi(-3,4)).toBe(-12);
    });
});