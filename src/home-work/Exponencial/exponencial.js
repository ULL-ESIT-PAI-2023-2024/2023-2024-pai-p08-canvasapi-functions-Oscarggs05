/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Oscar Garcia Gonzalez
 * @since March 29 2022
 * @desc funcionamiento con la clase main
*/
///<reference path='../Funciones/funciones.ts'/>
///<reference path='../View/view.ts'/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Clase que representa a la función exponencial
 */
var Exponencial = /** @class */ (function (_super) {
    __extends(Exponencial, _super);
    /**
     * Constructor de la clase `Exponencial`.
     *
     * @param {number} amplitud - Amplitud de la función exponencial.
     * @param {number} base - Base de la función exponencial.
     * @param {number} desfase - Desfase horizontal de la función exponencial.
    */
    function Exponencial(amplitud, base, desfase) {
        if (amplitud === void 0) { amplitud = 1; }
        if (base === void 0) { base = Math.E; }
        if (desfase === void 0) { desfase = 0; }
        var _this = _super.call(this) || this;
        _this.amplitud = amplitud;
        _this.base = base;
        _this.desfase = desfase;
        _this.amplitud = amplitud;
        _this.base = base;
        _this.desfase = desfase;
        return _this;
    }
    /**
    * Devuelve la amplitud de la función exponencial.
    * @returns {number} - Amplitud de la función exponencial.
    */
    Exponencial.prototype.getAmplitud = function () {
        return this.amplitud;
    };
    /**
     * Devuelve la base de la función exponencial.
     * @returns {number} - Base de la función exponencial.
     */
    Exponencial.prototype.getBase = function () {
        return this.base;
    };
    /**
     * Devuelve el desfase horizontal de la función exponencial.
     * @returns {number} - Desfase horizontal de la función exponencial.
     */
    Exponencial.prototype.getDesfase = function () {
        return this.desfase;
    };
    /**
     * Evalúa la función exponencial en un valor x específico.
     * @param {number} x - Valor de entrada para la función exponencial.
     * @returns {number} - Valor de la función exponencial en el punto x.
     */
    Exponencial.prototype.evaluar = function (valorIntroducido) {
        return this.amplitud * Math.pow(this.base, valorIntroducido - this.desfase);
    };
    /**
     * Devuelve una representación gráfica de la función exponencial.
     */
    Exponencial.prototype.representarFuncion = function (canvas, context) {
        var width = canvas.width;
        var height = canvas.height;
        var scaleX = 100; // Escala para ajustar el ancho del canvas
        var scaleY = 100; // Escala para ajustar la altura del canvas
        context.beginPath();
        for (var x = 0; x <= width; x++) {
            var valorX = x / scaleX + this.desfase; // Valor x escalado con el desfase
            var valorY = height - this.evaluar(valorX) * scaleY; // Valor y escalado y invertido para que la función crezca hacia arriba
            if (x === 0) {
                context.moveTo(x, valorY);
            }
            else {
                context.lineTo(x, valorY);
            }
        }
        context.stroke();
    };
    return Exponencial;
}(Funciones));
