import { describe, expect, it } from "vitest";
import {isWorkday} from './isWorkday'

describe('Función isWorkday', () => {

    it('isWorkday dia laboral', () => {
        expect(isWorkday('lunes')).toBe(true);
        expect(isWorkday('martes')).toBe(true); 
        expect(isWorkday('miércoles')).toBe(true); 
        expect(isWorkday('jueves')).toBe(true); 
        expect(isWorkday('viernes')).toBe(true);      
    });

    it('isWorkday dia no laboral', () => {
        expect(isWorkday('sábado')).toBe(false);
        expect(isWorkday('domingo')).toBe(false);
    });

    it('isWorkday eso no es un día', () => {
        expect(isWorkday('sadfadfh')).toBe(false);
    });

});