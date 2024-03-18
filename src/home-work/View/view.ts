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
class View {
  private canvas: HTMLCanvasElement = document.getElementById('Funciones') as HTMLCanvasElement;
  private context: CanvasRenderingContext2D = this.canvas.getContext('2d')!;
  
  /**
   * Constructor de la clase View
   * Se encarga de inicializar el lienzo y de dibujar un eje cartesiano en el 
  */
  constructor() {
    // console.log('Constructor is executing...');
    // alert('Constructor is executing...');
    this.dibujaEjeCartesiano();
  }

  /**
  * Dibuja los ejes X e Y de un sistema de coordenadas cartesiano en un canvas.
  */
  private dibujaEjeCartesiano() {
    const origenX = this.canvas.width / 2;
    const origenY = this.canvas.height / 2;
    const escalaX = 50;
    const escalaY = 50;
    const numTicksX = 50;
    const numTicksY = 20;
    const LONGITUD_LINEA = 5;
    const TEXT_OFFSET = 8;
  
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
    for (let i = 0; i < numTicksX; i++) {
      const tickX = origenX + (i - numTicksX / 2) * escalaX;
      const valueX = (i - numTicksX / 2); 
  
      this.context.beginPath();
      this.context.moveTo(tickX, origenY - LONGITUD_LINEA);
      this.context.lineTo(tickX, origenY + LONGITUD_LINEA);
      this.context.stroke();
  
      this.context.font = "10px Arial";
      this.context.fillStyle = "black";
      this.context.fillText(valueX.toString(), tickX - 3, origenY + 20);
    }
  
    // Rayas en el eje Y
    for (let i = 0; i < numTicksY; i++) {
      const tickY = origenY + (i - numTicksY / 2) * escalaY;
      const valueY = (numTicksY / 2 - i); 
  
      this.context.beginPath();
      this.context.moveTo(origenX - LONGITUD_LINEA, tickY);
      this.context.lineTo(origenX + LONGITUD_LINEA, tickY);
      this.context.stroke();
  
      this.context.font = "10px Arial";
      this.context.fillStyle = "black";
      this.context.fillText(valueY.toString(), origenX - TEXT_OFFSET * 2, tickY + TEXT_OFFSET / 2);  
    }
  }

  /**
   * Dibuja la función seno en el canvas utilizando el contexto proporcionado.
   */
  dibujaSeno(amplitud = 1, periodo = 1, desfase= 0) {
    const funcionSeno = new Seno(amplitud, periodo, desfase);
    funcionSeno.representarFuncion(this.canvas, this.context);
  }

  /**
   * Dibuja la función coseno en el canvas utilizando el contexto proporcionado.
   */
  dibujaCoseno(amplitud = 1, periodo = 1, desfase= 0) {
    const funcionCoseno = new Coseno(amplitud, periodo, desfase);
    funcionCoseno.representarFuncion(this.canvas, this.context);
  }

  /**
   * Dibuja la función exponencial en el canvas utilizando el contexto proporcionado.
   */
  dibujaExponencial(amplitud = 1, base = 1, desfase= 0) {
    const funcionExp = new Exponencial(amplitud, base, desfase);
    funcionExp.representarFuncion(this.canvas, this.context);
  }

  /**
   * Dibuja la función raíz cuadrada en el canvas utilizando el contexto proporcionado.
   */
  dibujaRaiz(amplitud = 1, desplazamientoVertical = 0, desfase= 0) {
    const funcionSqrt = new Raiz(amplitud, desplazamientoVertical, desfase);
    funcionSqrt.representarFuncion(this.canvas, this.context);
  }
}
