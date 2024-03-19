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
var Taylor = /** @class */ (function (_super) {
    __extends(Taylor, _super);
    /**
     * Constructor de la clase `Seno`.
     *
     * @param {number} cantidadNumerosAproximacion - numeros usados en la aproximacion del seno
    */
    function Taylor(cantidadNumerosAproximacion) {
        if (cantidadNumerosAproximacion === void 0) { cantidadNumerosAproximacion = 1; }
        var _this = _super.call(this) || this;
        _this.cantidadNumerosAproximacion = cantidadNumerosAproximacion;
        _this.cantidadNumerosAproximacion = cantidadNumerosAproximacion;
        return _this;
    }
    /**
    * Devuelve la amplitud de la función seno.
    * @returns {number} - Amplitud de la función seno.
    */
    Taylor.prototype.getCantidadNumerosAproximacion = function () {
        return this.cantidadNumerosAproximacion;
    };
    /**
     * Evalúa la función seno en un valor x específico.
     * @param {number} x - Valor de entrada para la función seno.
     * @returns {number} - Valor de la función seno en el punto x.
     */
    Taylor.prototype.evaluar = function (valorIntroducido) {
        if (this.cantidadNumerosAproximacion === 1) {
            return valorIntroducido;
        }
        var resultadoEvaluado = valorIntroducido;
        var factorial = 1;
        for (var i = 2; i <= this.cantidadNumerosAproximacion; i++) {
            factorial *= i;
            var operacion = 0; // 0 = Resta | 1 = Suma
            if (!(i % 2 === 0)) {
                if (operacion === 0) {
                    resultadoEvaluado = resultadoEvaluado - (Math.pow(valorIntroducido, i) / factorial);
                    operacion = 1;
                }
                else if (operacion === 1) {
                    resultadoEvaluado = resultadoEvaluado + (Math.pow(valorIntroducido, i) / factorial);
                    operacion = 0;
                }
            }
            else {
                if (operacion === 0) {
                    operacion = 1;
                }
                else if (operacion === 1) {
                    operacion = 0;
                }
            }
        }
        return -resultadoEvaluado;
    };
    /**
     * Devuelve una representación gráfica de la función seno.
     */
    Taylor.prototype.representarFuncion = function (canvas, context) {
        var width = canvas.width;
        var height = canvas.height;
        var ESCALA_X = 50;
        var ESCALA_Y = 50;
        context.beginPath();
        for (var CoordenadaX = 0; CoordenadaX <= width; CoordenadaX++) {
            var valorX = (CoordenadaX - width / 2) / ESCALA_X;
            var valorY = this.evaluar(valorX) * ESCALA_Y + height / 2;
            if (CoordenadaX === 0) {
                context.moveTo(CoordenadaX, valorY);
            }
            else {
                console.log(CoordenadaX, valorY);
                context.lineTo(CoordenadaX, valorY);
            }
        }
        context.stroke();
    };
    return Taylor;
}(Funciones));
