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
 * Clase que representa a la función raíz cuadrada.
 */
var Raiz = /** @class */ (function (_super) {
    __extends(Raiz, _super);
    /**
     * Constructor de la clase `Raiz`.
     *
     * @param {number} amplitud - Amplitud de la función raíz cuadrada.
     * @param {number} desplazamientoVertical - Desplazamiento vertical de la función raíz cuadrada.
     * @param {number} desfase - Desfase horizontal de la función raíz cuadrada.
     */
    function Raiz(amplitud, desplazamientoVertical, desfase) {
        if (amplitud === void 0) { amplitud = 1; }
        if (desplazamientoVertical === void 0) { desplazamientoVertical = 0; }
        if (desfase === void 0) { desfase = 0; }
        var _this = _super.call(this) || this;
        _this.amplitud = amplitud;
        _this.desplazamientoVertical = desplazamientoVertical;
        _this.desfase = desfase;
        _this.amplitud = amplitud;
        _this.desplazamientoVertical = desplazamientoVertical;
        _this.desfase = desfase;
        return _this;
    }
    /**
     * Devuelve la amplitud de la función raíz cuadrada.
     * @returns {number} - Amplitud de la función raíz cuadrada.
     */
    Raiz.prototype.getAmplitud = function () {
        return this.amplitud;
    };
    /**
     * Devuelve el desplazamiento vertical de la función raíz cuadrada.
     * @returns {number} - Desplazamiento vertical de la función raíz cuadrada.
     */
    Raiz.prototype.getDesplazamientoVertical = function () {
        return this.desplazamientoVertical;
    };
    /**
     * Devuelve el desfase horizontal de la función raíz cuadrada.
     * @returns {number} - Desfase horizontal de la función raíz cuadrada.
     */
    Raiz.prototype.getDesfase = function () {
        return this.desfase;
    };
    /**
     * Evalúa la función raíz cuadrada en un valor x específico.
     * @param {number} x - Valor de entrada para la función raíz cuadrada.
     * @returns {number} - Valor de la función raíz cuadrada en el punto x.
     */
    Raiz.prototype.evaluar = function (numeroEvaluar) {
        return this.amplitud * Math.sqrt(numeroEvaluar - this.desfase) + this.desplazamientoVertical;
    };
    /**
     * Devuelve una representación gráfica de la función raíz cuadrada.
     */
    Raiz.prototype.representarFuncion = function (canvas, context) {
        var width = canvas.width;
        var height = canvas.height;
        var scaleX = 100 / (2 * Math.PI);
        var scaleY = 100 / 2;
        context.beginPath();
        for (var x = width / 2; x <= width; x++) {
            var valorX = (x - width / 2) / scaleX + this.desfase;
            var valorY = -this.evaluar(valorX) * scaleY + height / 2;
            if (x === width / 2) {
                context.moveTo(x, valorY);
            }
            else {
                context.lineTo(x, valorY);
            }
        }
        context.stroke();
    };
    return Raiz;
}(Funciones));
