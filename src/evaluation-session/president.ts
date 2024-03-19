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

class President {
  /**
   * Constructor privado para evitar inicializar otros presidentes
   */
  private constructor(private presidentName: string) {
    this.presidentName = presidentName;
  }

  /**
   * Metodo que devuelve el presidente
   */
  static getPresident(): President {
    return new President('Biden');
  }

  /**
   * Getter del nombre del presidente
   */
  getName() {
    return this.presidentName;
  }
}