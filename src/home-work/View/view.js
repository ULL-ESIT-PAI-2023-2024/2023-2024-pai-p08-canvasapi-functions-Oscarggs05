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
    Funciones.prototype.representarFuncion = function (canvas, context) {
    };
    return Funciones;
}());
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
        if (desfase === void 0) { desfase = 0; }
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
        // Definir el rango del eje X
        var xMin = -this.periodo / 2 + this.desfase;
        var xMax = this.periodo / 2 + this.desfase;
        // Definir el paso para dibujar puntos
        var paso = 0.1;
        context.beginPath();
        context.strokeStyle = 'black';
        for (var x = xMin; x <= xMax; x += paso) {
            var y = this.amplitud * Math.sin((2 * Math.PI / this.periodo) * (x - this.desfase));
            var canvasX = (x - xMin) / (xMax - xMin) * canvas.width;
            var canvasY = canvas.height / 2 - y; // Invertir la coordenada Y para que el origen esté arriba
            if (x === xMin) {
                context.moveTo(canvasX, canvasY);
            }
            else {
                context.lineTo(canvasX, canvasY);
            }
        }
        context.stroke();
        context.save();
        context.fillStyle = 'black';
        context.beginPath();
        context.rect(40, 60, 100, 100);
        context.fill();
        context.stroke();
        context.restore();
    };
    return Seno;
}(Funciones));
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
///<reference path='../Seno/seno.ts'/>
/**
 * @classdesc A class to represent multiple figures
 */
var View = /** @class */ (function () {
    /**
     * Constructor de la clase View
     * Se encarga de inicializar el lienzo y de dibujar un eje cartesiano en el
    */
    function View() {
        this.canvas = document.getElementById('Funciones');
        this.context = this.canvas.getContext('2d');
        // console.log('Constructor is executing...');
        // alert('Constructor is executing...');
        this.dibujaEjeCartesiano();
    }
    /**
    * Dibuja los ejes X e Y de un sistema de coordenadas cartesiano en un canvas.
    */
    View.prototype.dibujaEjeCartesiano = function () {
        var origenX = this.canvas.width / 2;
        var origenY = this.canvas.height / 2;
        var escalaX = 50;
        var escalaY = 50;
        var numTicksX = 50;
        var numTicksY = 20;
        var LONGITUD_LINEA = 5;
        // Limpia
        this.context.fillStyle = 'white';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        // Eje X
        this.context.strokeStyle = 'black';
        this.context.beginPath();
        this.context.moveTo(0, origenY);
        this.context.lineTo(this.canvas.width, origenY);
        this.context.stroke();
        // Eje Y
        this.context.beginPath();
        this.context.moveTo(origenX, 0);
        this.context.lineTo(origenX, this.canvas.height);
        this.context.stroke();
        // Rayas en el eje X
        for (var i = 0; i < numTicksX; i++) {
            var tickX = origenX + (i - numTicksX / 2) * escalaX;
            this.context.beginPath();
            this.context.moveTo(tickX, origenY - LONGITUD_LINEA);
            this.context.lineTo(tickX, origenY + LONGITUD_LINEA);
            this.context.stroke();
        }
        // Rayas en el eje Y
        for (var i = 0; i < numTicksY; i++) {
            var tickY = origenY + (i - numTicksY / 2) * escalaY;
            this.context.beginPath();
            this.context.moveTo(origenX - LONGITUD_LINEA, tickY);
            this.context.lineTo(origenX + LONGITUD_LINEA, tickY);
            this.context.stroke();
        }
    };
    View.prototype.dibujaSeno = function () {
        var funcionSeno = new Seno();
        funcionSeno.representarFuncion(this.canvas, this.context);
    };
    return View;
}());
///<reference path='view.ts'/>
var main = function () {
    var vista = new View();
    vista.dibujaSeno();
};
main();
