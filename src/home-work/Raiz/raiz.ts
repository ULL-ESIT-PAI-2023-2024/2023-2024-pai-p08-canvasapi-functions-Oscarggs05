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
class Raiz extends Funciones {
  
  /**
   * Constructor de la clase `Raiz`.
   *
   * @param {number} amplitud - Amplitud de la función raíz cuadrada.
   * @param {number} desplazamientoVertical - Desplazamiento vertical de la función raíz cuadrada.
   * @param {number} desfase - Desfase horizontal de la función raíz cuadrada.
   */
  constructor(private amplitud: number = 1, private desplazamientoVertical: number = 0, private desfase: number = 0) {
    super();
    this.amplitud = amplitud;
    this.desplazamientoVertical = desplazamientoVertical;
    this.desfase = desfase;
  }

  /**
   * Devuelve la amplitud de la función raíz cuadrada.
   * @returns {number} - Amplitud de la función raíz cuadrada.
   */
  getAmplitud() {
    return this.amplitud;
  }

  /**
   * Devuelve el desplazamiento vertical de la función raíz cuadrada.
   * @returns {number} - Desplazamiento vertical de la función raíz cuadrada.
   */
  getDesplazamientoVertical() {
    return this.desplazamientoVertical;
  }

  /**
   * Devuelve el desfase horizontal de la función raíz cuadrada.
   * @returns {number} - Desfase horizontal de la función raíz cuadrada.
   */
  getDesfase() {
    return this.desfase;
  }

  /**
   * Evalúa la función raíz cuadrada en un valor x específico.
   * @param {number} x - Valor de entrada para la función raíz cuadrada.
   * @returns {number} - Valor de la función raíz cuadrada en el punto x.
   */
  evaluar(numeroEvaluar: number) {
    return this.amplitud * Math.sqrt(numeroEvaluar) + this.desplazamientoVertical;
  }

  /**
   * Devuelve una representación gráfica de la función raíz cuadrada.
   */
  representarFuncion(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    const width = canvas.width;
    const height = canvas.height;
    const ESCALA_X = 100 / (2 * Math.PI);
    const ESCALA_Y = 100 / 2; 
 
    context.beginPath();
    for (let CoordenadaX = width / 2; CoordenadaX <= width; CoordenadaX++) {
      const valorX = (CoordenadaX - width / 2) / ESCALA_X + this.desfase; 
      const valorY = -this.evaluar(valorX) * ESCALA_Y + height / 2; 
      if (CoordenadaX === width / 2) {
        context.moveTo(CoordenadaX, valorY);
      } else {
        context.lineTo(CoordenadaX, valorY);
      }
    }
    context.stroke();
  }  
}
