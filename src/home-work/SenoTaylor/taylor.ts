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
class Taylor extends Funciones {
  
  /**
   * Constructor de la clase `Seno`.
   *
   * @param {number} cantidadNumerosAproximacion - numeros usados en la aproximacion del seno
  */
  constructor(private cantidadNumerosAproximacion: number = 1) {
    super();
    this.cantidadNumerosAproximacion = cantidadNumerosAproximacion;

  }

  /**
  * Devuelve la amplitud de la función seno.
  * @returns {number} - Amplitud de la función seno.
  */
  getCantidadNumerosAproximacion() {
    return this.cantidadNumerosAproximacion;
  }


  /**
   * Evalúa la función seno en un valor x específico.
   * @param {number} x - Valor de entrada para la función seno.
   * @returns {number} - Valor de la función seno en el punto x.
   */
  evaluar(valorIntroducido: number): number {
    if (this.cantidadNumerosAproximacion === 1) {return valorIntroducido;} 
    let resultadoEvaluado: number = valorIntroducido;
    let factorial: number = 1;
    for(let i = 2; i <= this.cantidadNumerosAproximacion; i++) {
      factorial *= i;
      let operacion: number = 0;  // 0 = Resta | 1 = Suma
      if (!(i % 2 === 0)) {
        if (operacion === 0) {
          resultadoEvaluado = resultadoEvaluado - (Math.pow(valorIntroducido, i) / factorial);
          operacion = 1;
        } else if (operacion === 1) {
          resultadoEvaluado = resultadoEvaluado + (Math.pow(valorIntroducido, i) / factorial);
          operacion = 0;
        }
      } 
    }
    return resultadoEvaluado;
  }

  /**
   * Devuelve una representación gráfica de la función seno.
   */
  representarFuncion(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    const width = canvas.width;
    const height = canvas.height;
    const ESCALA_X = 50; 
    const ESCALA_Y = 50; 

    context.beginPath();
    for (let CoordenadaX = 0; CoordenadaX <= width; CoordenadaX++) {
      const valorX = (CoordenadaX - width / 2) / ESCALA_X; 
      const valorY = -this.evaluar(valorX) * ESCALA_Y + height / 2; 
      if (CoordenadaX === 0) {
        context.moveTo(CoordenadaX, valorY);
      } else {
        console.log(CoordenadaX, valorY)
        context.lineTo(CoordenadaX, valorY);
      }
    }
    context.stroke();
  }
}
