// Canviar propietats a diferents imatges d’un mateix document.
// Crear un element amb 12 imatges. Poden ser imatges repetides si no vols perdre temps.
// Fica totes les imatges amb el mateix height i weight
// Fica a 3 imatges la classe A, a 3 la classe B i 3 la clase C i 3 D, no les fiquis a imatges seguides, sinò que 
// intercala.
// Amb la funció getElementsByClassName, seleccionar els elements amb la clase A i aplicali a la propietat border ,
// el valor “5px solid yellow”, si no funciona, pues  “5px solid #00F”. Recorrer totes les posicions utilitzant el  for of.
// Els de la classe B, utilitzar “3px dotted red”.
// El primer de la clase B, fica-li border-radius que desitgis però sol al primer
// Amb la funció querySelectorAll, agafa tots els elements de la classe D, i fica-li un tipus de border diferent i que 
// tingui border-radius, però utilitzant foreach

// cambiar img base (grandària i marge)
const img_total = document.getElementsByTagName('img');
for (let imagen of img_total) {
  imagen.style.width = '200px';
  imagen.style.height = '300px';
  imagen.style.margin = '10px';
}

// mètode per aplicar els estils amb dos parametres d'entrada
function aplicarEstilo(elementos, estilo) {
    for (const elemento of elementos) {
      elemento.style.border = estilo;
    }
}

const elementosA = document.getElementsByClassName('A');
const elementosB = document.getElementsByClassName('B');
const elementosC = document.getElementsByClassName('C');
const elementosD = document.querySelectorAll('.D');

aplicarEstilo(elementosA, '5px solid yellow');
aplicarEstilo(elementosB, '3px dotted red');
// i de pas (estil de C)
aplicarEstilo(elementosC, '6px double orange')

// canviar el border radius de només el primer element de B (per posició)
elementosB[0].style.borderRadius = '20%';

elementosD.forEach(elemento => {
    elemento.style.border = '3px dashed pink';
    elemento.style.borderRadius = '10px';
});