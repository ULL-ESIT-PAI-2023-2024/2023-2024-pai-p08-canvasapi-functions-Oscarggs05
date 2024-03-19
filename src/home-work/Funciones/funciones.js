/**class
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Oscar Garcia Gonzalez
 * @since March 29 2022
 * @desc funcionamiento con la clase main
*/
/**
 * Clase abstracta Figura que define un método abstracto getArea().
 */
var Funciones = /** @class */ (function () {
    function Funciones() {
    }
    /**
     * Evalúa la función raíz cuadrada en un valor específico.
     * @param {number} valorIntroducido - Valor de entrada para la función raíz cuadrada.
     */
    Funciones.prototype.evaluar = function (valorIntroducido) {
        return -1;
    };
    /**
     * Representa gráficamente la función raíz cuadrada en el canvas proporcionado.
     * @param {HTMLCanvasElement} canvas - Elemento canvas donde se dibujará la función.
     * @param {CanvasRenderingContext2D} context - Contexto 2D del canvas.
     */
    Funciones.prototype.representarFuncion = function (canvas, context) {
        return;
    };
    return Funciones;
}());
