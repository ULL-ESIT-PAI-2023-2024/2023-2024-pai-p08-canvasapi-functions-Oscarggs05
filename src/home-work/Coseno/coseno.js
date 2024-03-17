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
 * Clase que representa a la función del cos(x)
 */
var Coseno = /** @class */ (function (_super) {
    __extends(Coseno, _super);
    /**
     * Constructor de la clase `Coseno`.
     *
     * @param {number} amplitud - Amplitud de la función coseno.
     * @param {number} periodo - Periodo de la función coseno.
     * @param {number} desfase - Desfase horizontal de la función coseno.
    */
    function Coseno(amplitud, periodo, desfase) {
        if (amplitud === void 0) { amplitud = 1; }
        if (periodo === void 0) { periodo = 2 * Math.PI; }
        if (desfase === void 0) { desfase = 1; }
        var _this = _super.call(this) || this;
        _this.amplitud = amplitud;
        _this.periodo = periodo;
        _this.desfase = desfase;
        _this.amplitud = amplitud;
        _this.periodo = periodo;
        _this.desfase = desfase;
        return _this;
    }
    /**
    * Devuelve la amplitud de la función coseno.
    * @returns {number} - Amplitud de la función coseno.
    */
    Coseno.prototype.getAmplitud = function () {
        return this.amplitud;
    };
    /**
     * Devuelve el periodo de la función coseno.
     * @returns {number} - Periodo de la función coseno.
     */
    Coseno.prototype.getPeriodo = function () {
        return this.periodo;
    };
    /**
     * Devuelve el desfase horizontal de la función coseno.
     * @returns {number} - Desfase horizontal de la función coseno.
     */
    Coseno.prototype.getDesfase = function () {
        return this.desfase;
    };
    /**
     * Evalúa la función coseno en un valor x específico.
     * @param {number} x - Valor de entrada para la función coseno.
     * @returns {number} - Valor de la función coseno en el punto x.
     */
    Coseno.prototype.evaluar = function (valorIntroducido) {
        return this.amplitud * Math.cos(2 * Math.PI * (valorIntroducido - this.desfase) / this.periodo);
    };
    /**
     * Devuelve una representación gráfica de la función coseno.
     */
    Coseno.prototype.representarFuncion = function (canvas, context) {
        var width = canvas.width;
        var height = canvas.height;
        var scaleX = 100 / (2 * Math.PI); // Escala para ajustar el periodo al ancho del canvas
        var scaleY = 100 / 2; // Escala para ajustar la amplitud al alto del canvas
        context.beginPath();
        for (var x = 0; x <= width; x++) {
            var valorX = x / scaleX + this.desfase; // Valor x escalado con el desfase
            var valorY = this.evaluar(valorX) * scaleY + height / 2; // Valor y escalado con la amplitud y desplazado al centro vertical del canvas
            if (x === 0) {
                context.moveTo(x, valorY);
            }
            else {
                context.lineTo(x, valorY);
            }
        }
        context.stroke();
    };
    return Coseno;
}(Funciones));