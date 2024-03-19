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
var President = /** @class */ (function () {
    /**
     * Constructor privado para evitar inicializar otros presidentes
     */
    function President(presidentName) {
        this.presidentName = presidentName;
        this.presidentName = presidentName;
    }
    /**
     * Metodo que devuelve el presidente
     */
    President.getPresident = function () {
        return new President('Biden');
    };
    /**
     * Getter del nombre del presidente
     */
    President.prototype.getName = function () {
        return this.presidentName;
    };
    return President;
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
///<reference path='president.ts'/>
var main1 = function () {
    var president = President.getPresident();
    console.log(president.getName());
    var anotherPresident = President.getPresident();
    console.log(anotherPresident.getName());
    // You can't do this:
    // const oneMorePresident = new President('Trump');
};
main1();
