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
class Exponencial extends Funciones {
  
  /**
   * Constructor de la clase `Exponencial`.
   *
   * @param {number} amplitud - Amplitud de la función exponencial.
   * @param {number} base - Base de la función exponencial.
   * @param {number} desfase - Desfase horizontal de la función exponencial.
  */
  constructor(private amplitud: number = 1, private base: number = Math.E, private desfase: number = 0) {
    super();
    this.amplitud = amplitud;
    this.base = base;
    this.desfase = desfase;
  }

  /**
  * Devuelve la amplitud de la función exponencial.
  * @returns {number} - Amplitud de la función exponencial.
  */
  getAmplitud() {
    return this.amplitud;
  }

  /**
   * Devuelve la base de la función exponencial.
   * @returns {number} - Base de la función exponencial.
   */
  getBase() {
    return this.base;
  }


  /**
   * Devuelve el desfase horizontal de la función exponencial.
   * @returns {number} - Desfase horizontal de la función exponencial.
   */
  getDesfase() {
    return this.desfase;
  }

  /**
   * Evalúa la función exponencial en un valor x específico.
   * @param {number} x - Valor de entrada para la función exponencial.
   * @returns {number} - Valor de la función exponencial en el punto x.
   */
  evaluar(valorIntroducido: number) {
    return this.amplitud * Math.pow(this.base, valorIntroducido - this.desfase);
  }

  /**
   * Devuelve una representación gráfica de la función exponencial.
   */
  representarFuncion(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    const width = canvas.width;
    const height = canvas.height;
    const scaleX = 50; // Escala para ajustar el ancho del canvas
    const scaleY = 50; // Escala para ajustar la altura del canvas
  
    context.beginPath();
  
    // Calculamos la coordenada x del centro del lienzo
    const centroX = width / 2;
  
    for (let x = 0; x <= width; x++) {
      const valorX = (x - centroX) / scaleX + this.desfase; // Valor x escalado y ajustado al centro
      const valorY = height / 2 - this.evaluar(valorX) * scaleY; // Valor y escalado e invertido
      if (x === 0) {
        context.moveTo(x, valorY);
      } else {
        context.lineTo(x, valorY);
      }
    }
  
    context.stroke();
  }
}
