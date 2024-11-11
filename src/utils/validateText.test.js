import { describe, expect, it } from "vitest";
import {validateText} from './validateText'

describe('Función validateText', () => {

    it('validateText vacío', () => {
        expect(validateText("")).toBe(false);
    });

    it('validateText solo números', () => {
        expect(validateText(123456)).toBe(false);
    });

    it('validateText caracteres especiales', () => {
        expect(validateText("qwer@t")).toBe(false);
    });

    it('validateText longitud fuera de rango', () => {
        expect(validateText("abc")).toBe(false); //menor 6 caracteres
        expect(validateText("abcdefghijk")).toBe(false); //mayor 10 caracteres

    });

    it('validateText longitud entre 6-10 caracteres', () => {
        expect(validateText("abcdef")).toBe(true);
    });

});