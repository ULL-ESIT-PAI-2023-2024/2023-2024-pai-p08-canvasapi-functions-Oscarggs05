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
class Coseno extends Funciones {
  
  /**
   * Constructor de la clase `Coseno`.
   *
   * @param {number} amplitud - Amplitud de la función coseno.
   * @param {number} periodo - Periodo de la función coseno.
   * @param {number} desfase - Desfase horizontal de la función coseno.
  */
  constructor(private amplitud: number = 1, private periodo: number = 1, private desfase: number = 1) {
    super();
    this.amplitud = amplitud;
    this.periodo = periodo * (2 * Math.PI);
    this.desfase = desfase;
  }

  /**
  * Devuelve la amplitud de la función coseno.
  * @returns {number} - Amplitud de la función coseno.
  */
  getAmplitud() {
    return this.amplitud;
  }

  /**
   * Devuelve el periodo de la función coseno.
   * @returns {number} - Periodo de la función coseno.
   */
  getPeriodo() {
    return this.periodo;
  }


  /**
   * Devuelve el desfase horizontal de la función coseno.
   * @returns {number} - Desfase horizontal de la función coseno.
   */
  getDesfase() {
    return this.desfase;
  }

  /**
   * Evalúa la función coseno en un valor x específico.
   * @param {number} x - Valor de entrada para la función coseno.
   * @returns {number} - Valor de la función coseno en el punto x.
   */
  evaluar(valorIntroducido: number) {
    return this.amplitud * Math.cos(2 * Math.PI * valorIntroducido / this.periodo);
  }

  /**
   * Devuelve una representación gráfica de la función coseno.
   */
  representarFuncion(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    const width = canvas.width;
    const height = canvas.height;
    const ESCALA_X = 100 / (2 * Math.PI);
    const ESCALA_Y = 100 / 2; 

    context.beginPath();
    for (let CoordenadaX = 0; CoordenadaX <= width; CoordenadaX++) {
      const valorX = CoordenadaX / ESCALA_X + this.desfase; 
      const valorY = this.evaluar(valorX) * ESCALA_Y + height / 2; 
      if (CoordenadaX === 0) {
        context.moveTo(CoordenadaX, valorY);
      } else {
        context.lineTo(CoordenadaX, valorY);
      }
    }
    context.stroke();
  }
}