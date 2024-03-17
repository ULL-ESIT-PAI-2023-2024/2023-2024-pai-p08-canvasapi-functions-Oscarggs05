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
class Seno extends Funciones {
  
  /**
   * Constructor de la clase `Seno`.
   *
   * @param {number} amplitud - Amplitud de la función seno.
   * @param {number} periodo - Periodo de la función seno.
   * @param {number} desfase - Desfase horizontal de la función seno.
  */
  constructor(private amplitud: number = 1, private periodo: number = 2 * Math.PI , private desfase: number = 0) {
    super();
    this.amplitud = amplitud;
    this.periodo = periodo;
    this.desfase = desfase;
  }

  /**
  * Devuelve la amplitud de la función seno.
  * @returns {number} - Amplitud de la función seno.
  */
  getAmplitud() {
    return this.amplitud;
  }

  /**
   * Devuelve el periodo de la función seno.
   * @returns {number} - Periodo de la función seno.
   */
  getPeriodo() {
    return this.periodo;
  }


  /**
   * Devuelve el desfase horizontal de la función seno.
   * @returns {number} - Desfase horizontal de la función seno.
   */
  getDesfase() {
    return this.desfase;
  }

  /**
   * Evalúa la función seno en un valor x específico.
   * @param {number} x - Valor de entrada para la función seno.
   * @returns {number} - Valor de la función seno en el punto x.
   */
  evaluar(valorIntroducido: number) {
    return this.amplitud * Math.sin(2 * Math.PI * (valorIntroducido - this.desfase) / this.periodo);
  }

  /**
   * Devuelve una representación gráfica de la función seno.
   */
  representarFuncion(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {





    // No dibuja bien pero dibuja


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
        } else {
            context.lineTo(canvasX, canvasY);
        }
    }

    context.stroke();


















    context.save()
    context.fillStyle = 'black'

    context.beginPath()
    context.rect(40, 60,100 ,100)
    context.fill()
    context.stroke()
    context.restore()
  }
}
