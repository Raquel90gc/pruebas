import { describe, expect, it } from "vitest";
import {raquel} from './raquel'

describe('Función raquel', () => {

    it('raquel es una función', () => {
        expect(typeof raquel).toBe('function'); //Es una función
    });

    it('raquel recibe un número positivo devuelve true', () => {
        expect(raquel(1)).toBe(true); 
    });

    it('raquel recibe un número negativo devuelve false', () => {
        expect(raquel(-1)).toBe(false); 
    });

    it('raquel recibe un 0 devuelve null', () => {
        expect(raquel(0)).toBe(null); 
    });

});