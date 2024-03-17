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
 * Clase que representa a la funcion del sen(x)
 */
var Seno = /** @class */ (function (_super) {
    __extends(Seno, _super);
    /**
     * Constructor de la clase `Seno`.
     *
     * @param {number} amplitud - Amplitud de la función seno.
     * @param {number} periodo - Periodo de la función seno.
     * @param {number} desfase - Desfase horizontal de la función seno.
    */
    function Seno(amplitud, periodo, desfase) {
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
    * Devuelve la amplitud de la función seno.
    * @returns {number} - Amplitud de la función seno.
    */
    Seno.prototype.getAmplitud = function () {
        return this.amplitud;
    };
    /**
     * Devuelve el periodo de la función seno.
     * @returns {number} - Periodo de la función seno.
     */
    Seno.prototype.getPeriodo = function () {
        return this.periodo;
    };
    /**
     * Devuelve el desfase horizontal de la función seno.
     * @returns {number} - Desfase horizontal de la función seno.
     */
    Seno.prototype.getDesfase = function () {
        return this.desfase;
    };
    /**
     * Evalúa la función seno en un valor x específico.
     * @param {number} x - Valor de entrada para la función seno.
     * @returns {number} - Valor de la función seno en el punto x.
     */
    Seno.prototype.evaluar = function (valorIntroducido) {
        return this.amplitud * Math.sin(2 * Math.PI * (valorIntroducido - this.desfase) / this.periodo);
    };
    /**
     * Devuelve una representación gráfica de la función seno.
     */
    Seno.prototype.representarFuncion = function (canvas, context) {
        // ---------------------------------- Corregir --------------------------------------
        var scaleX = 2;
        var scaleY = 50;
        var desfase = this.desfase * Math.PI / 2;
        context.beginPath();
        context.strokeStyle = 'blue';
        context.lineWidth = 2;
        for (var x = 0; x < canvas.width; x++) {
            var radians = (x / canvas.width) * this.periodo * 2 * Math.PI * scaleX;
            var y = canvas.height / 2 - this.amplitud * Math.sin(radians + desfase) * scaleY;
            if (x === 0) {
                context.moveTo(x, y);
            }
            else {
                context.lineTo(x, y);
            }
        }
        context.stroke();
    };
    return Seno;
}(Funciones));
