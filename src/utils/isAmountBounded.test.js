import { describe, expect, it } from "vitest";
import {isAmountBounded} from './isAmountBounded'

describe('Función isAmountBounded', () => {

    it('isAmountBounded valor fuera del rango', () => {
        expect(isAmountBounded(0)).toBe(false); //valor 0 
        expect(isAmountBounded(-11)).toBe(false); //valor negativo
        expect(isAmountBounded(1001)).toBe(false); //valor mayor a 1000
    });

    it('isAmountBounded valor entre 1 y 1000', () => {
        expect(isAmountBounded(999)).toBe(true);
    });

});