import { describe, expect, it } from "vitest";
import {raquelMaxOfThree} from './raquelMaxOfThree'

describe('Función raquelMaxOfThree', () => {

    it('raquelMaxOfThree Devuelve a, cuando a es mayor que b y c.', () => {
        expect(raquelMaxOfThree(6,4,3)).toBe(6); 
    });

    it('raquelMaxOfThree Devuelve b, cuando b es mayor que c y a.', () => {
        expect(raquelMaxOfThree(6,7,3)).toBe(7); 
    });

    it('raquelMaxOfThreeDevuelve c, cuando c es mayor que a y b.', () => {
        expect(raquelMaxOfThree(6,7,8)).toBe(8); 
    });

    it('raquelMaxOfThree Devuelve c, cuando a menor que c y c mayor b.', () => {
        expect(raquelMaxOfThree(5,7,8)).toBe(8); 
    });
});