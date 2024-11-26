import { describe, expect, it } from "vitest";
import {fibonacci} from './fiboRaquel'

describe('Función fibonacci', () => {

    it('fiboRaquel comprobación de los tres valores', () => {
        expect(fibonacci(1)).toBe(1);
        expect(fibonacci(3)).toBe(2); 
        expect(fibonacci(10)).toBe(55); 
    });

});