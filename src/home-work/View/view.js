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
        if (periodo === void 0) { periodo = 1; }
        if (desfase === void 0) { desfase = 1; }
        var _this = _super.call(this) || this;
        _this.amplitud = amplitud;
        _this.periodo = periodo;
        _this.desfase = desfase;
        _this.amplitud = amplitud;
        _this.periodo = periodo * (2 * Math.PI);
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
        return this.amplitud * Math.sin(2 * Math.PI * valorIntroducido / this.periodo);
    };
    /**
     * Devuelve una representación gráfica de la función seno.
     */
    Seno.prototype.representarFuncion = function (canvas, context) {
        var width = canvas.width;
        var height = canvas.height;
        var ESCALA_X = 100 / (2 * Math.PI);
        var ESCALA_Y = 100 / 2;
        context.beginPath();
        for (var CoordenadaX = 0; CoordenadaX <= width; CoordenadaX++) {
            var valorX = CoordenadaX / ESCALA_X + this.desfase;
            var valorY = this.evaluar(valorX) * ESCALA_Y + height / 2;
            if (CoordenadaX === 0) {
                context.moveTo(CoordenadaX, valorY);
            }
            else {
                context.lineTo(CoordenadaX, valorY);
            }
        }
        context.stroke();
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
///<reference path='../Funciones/funciones.ts'/>
///<reference path='../View/view.ts'/>
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
        if (periodo === void 0) { periodo = 1; }
        if (desfase === void 0) { desfase = 1; }
        var _this = _super.call(this) || this;
        _this.amplitud = amplitud;
        _this.periodo = periodo;
        _this.desfase = desfase;
        _this.amplitud = amplitud;
        _this.periodo = periodo * (2 * Math.PI);
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
        return this.amplitud * Math.cos(2 * Math.PI * valorIntroducido / this.periodo);
    };
    /**
     * Devuelve una representación gráfica de la función coseno.
     */
    Coseno.prototype.representarFuncion = function (canvas, context) {
        var width = canvas.width;
        var height = canvas.height;
        var ESCALA_X = 100 / (2 * Math.PI);
        var ESCALA_Y = 100 / 2;
        context.beginPath();
        for (var CoordenadaX = 0; CoordenadaX <= width; CoordenadaX++) {
            var valorX = CoordenadaX / ESCALA_X + this.desfase;
            var valorY = this.evaluar(valorX) * ESCALA_Y + height / 2;
            if (CoordenadaX === 0) {
                context.moveTo(CoordenadaX, valorY);
            }
            else {
                context.lineTo(CoordenadaX, valorY);
            }
        }
        context.stroke();
    };
    return Coseno;
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
///<reference path='../Funciones/funciones.ts'/>
///<reference path='../View/view.ts'/>
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
        if (base === void 0) { base = 1; }
        if (desfase === void 0) { desfase = 0; }
        var _this = _super.call(this) || this;
        _this.amplitud = amplitud;
        _this.base = base;
        _this.desfase = desfase;
        _this.amplitud = amplitud;
        _this.base = base * Math.E;
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
        var ESCALA_X = 50;
        var ESCALA_Y = 50;
        context.beginPath();
        var centroX = width / 2;
        for (var CoordenadaX = 0; CoordenadaX <= width; CoordenadaX++) {
            var valorX = (CoordenadaX - centroX) / ESCALA_X + this.desfase;
            var valorY = height / 2 - this.evaluar(valorX) * ESCALA_Y;
            if (CoordenadaX === 0) {
                context.moveTo(CoordenadaX, valorY);
            }
            else {
                context.lineTo(CoordenadaX, valorY);
            }
        }
        context.stroke();
    };
    return Exponencial;
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
///<reference path='../Funciones/funciones.ts'/>
///<reference path='../View/view.ts'/>
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
        return this.amplitud * Math.sqrt(numeroEvaluar) + this.desplazamientoVertical;
    };
    /**
     * Devuelve una representación gráfica de la función raíz cuadrada.
     */
    Raiz.prototype.representarFuncion = function (canvas, context) {
        var width = canvas.width;
        var height = canvas.height;
        var ESCALA_X = 100 / (2 * Math.PI);
        var ESCALA_Y = 100 / 2;
        context.beginPath();
        for (var CoordenadaX = width / 2; CoordenadaX <= width; CoordenadaX++) {
            var valorX = (CoordenadaX - width / 2) / ESCALA_X + this.desfase;
            var valorY = -this.evaluar(valorX) * ESCALA_Y + height / 2;
            if (CoordenadaX === width / 2) {
                context.moveTo(CoordenadaX, valorY);
            }
            else {
                context.lineTo(CoordenadaX, valorY);
            }
        }
        context.stroke();
    };
    return Raiz;
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
///<reference path='../Coseno/coseno.ts'/>
///<reference path='../Exponencial/exponencial.ts'/>
///<reference path='../Raiz/raiz.ts'/>
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
        var TEXT_OFFSET = 8;
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
            var valueX = (i - numTicksX / 2);
            this.context.beginPath();
            this.context.moveTo(tickX, origenY - LONGITUD_LINEA);
            this.context.lineTo(tickX, origenY + LONGITUD_LINEA);
            this.context.stroke();
            this.context.font = "10px Arial";
            this.context.fillStyle = "black";
            this.context.fillText(valueX.toString(), tickX - 3, origenY + 20);
        }
        // Rayas en el eje Y
        for (var i = 0; i < numTicksY; i++) {
            var tickY = origenY + (i - numTicksY / 2) * escalaY;
            var valueY = (numTicksY / 2 - i);
            this.context.beginPath();
            this.context.moveTo(origenX - LONGITUD_LINEA, tickY);
            this.context.lineTo(origenX + LONGITUD_LINEA, tickY);
            this.context.stroke();
            this.context.font = "10px Arial";
            this.context.fillStyle = "black";
            this.context.fillText(valueY.toString(), origenX - TEXT_OFFSET * 2, tickY + TEXT_OFFSET / 2);
        }
    };
    /**
     * Dibuja la función seno en el canvas utilizando el contexto proporcionado.
     */
    View.prototype.dibujaSeno = function (amplitud, periodo, desfase) {
        if (amplitud === void 0) { amplitud = 1; }
        if (periodo === void 0) { periodo = 1; }
        if (desfase === void 0) { desfase = 0; }
        var funcionSeno = new Seno(amplitud, periodo, desfase);
        funcionSeno.representarFuncion(this.canvas, this.context);
    };
    /**
     * Dibuja la función coseno en el canvas utilizando el contexto proporcionado.
     */
    View.prototype.dibujaCoseno = function (amplitud, periodo, desfase) {
        if (amplitud === void 0) { amplitud = 1; }
        if (periodo === void 0) { periodo = 1; }
        if (desfase === void 0) { desfase = 0; }
        var funcionCoseno = new Coseno(amplitud, periodo, desfase);
        funcionCoseno.representarFuncion(this.canvas, this.context);
    };
    /**
     * Dibuja la función exponencial en el canvas utilizando el contexto proporcionado.
     */
    View.prototype.dibujaExponencial = function (amplitud, base, desfase) {
        if (amplitud === void 0) { amplitud = 1; }
        if (base === void 0) { base = 1; }
        if (desfase === void 0) { desfase = 0; }
        var funcionExp = new Exponencial(amplitud, base, desfase);
        funcionExp.representarFuncion(this.canvas, this.context);
    };
    /**
     * Dibuja la función raíz cuadrada en el canvas utilizando el contexto proporcionado.
     */
    View.prototype.dibujaRaiz = function (amplitud, desplazamientoVertical, desfase) {
        if (amplitud === void 0) { amplitud = 1; }
        if (desplazamientoVertical === void 0) { desplazamientoVertical = 0; }
        if (desfase === void 0) { desfase = 0; }
        var funcionSqrt = new Raiz(amplitud, desplazamientoVertical, desfase);
        funcionSqrt.representarFuncion(this.canvas, this.context);
    };
    return View;
}());
///<reference path='view.ts'/>
var main = function () {
    var vista = new View();
    vista.dibujaSeno();
};
main();
