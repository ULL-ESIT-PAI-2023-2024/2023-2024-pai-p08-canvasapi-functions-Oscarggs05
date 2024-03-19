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

const main1 = function (): void {
  const president: President = President.getPresident();
  console.log(president.getName());
  const anotherPresident: President = President.getPresident();
  console.log(anotherPresident.getName());
  // You can't do this:
  // const oneMorePresident = new President('Trump');
}

main1();
