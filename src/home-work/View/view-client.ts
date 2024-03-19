///<reference path='view.ts'/>

const main = function (): void {
  const vista = new View();
  vista.dibujaRaiz();
  vista.dibujaSeno();
  vista.dibujaTaylor(3); 
}

main();

// npx tsc view.ts 
// npx tsc --outFile view.js view-client.ts 