import { describe, expect, it } from "vitest";
import {isApproved} from './isApproved'

describe('Función isApproved', () => {

    it('isApproved nota fuera del rango', () => {
        expect(isApproved(-5)).toBe(null); //menor a 0
        expect(isApproved(11)).toBe(null); //mayor a 10
    });

    it('isApproved nota entre 0 y 4.9 (suspendido)', () => {
        expect(isApproved(4.9)).toBe(false);
    });

    it('isApproved nota entre 5 y 10 (aprobado)', () => {
        expect(isApproved(8)).toBe(true);
    });

});