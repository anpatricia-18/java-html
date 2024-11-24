// Si utilitem aquest codi:
// 		var cuadre = document.getElementById(“XXX”)
// 	despres d’aquesta linea, a la variable cuadre te el element que tingui la id XXX, per exemple si executes la linea 
// 		console.log(cuadre)
// veuras que cuadre conte tot el element del html (el seu codi) i si tingues dins més elements també els tindria.
// A partir de llavors pots modificar o afegir propietats. Per exemple si fiquem:
//      cuadre.style.fontSize = '32px';
// Aprofitant això, afegeix als 3 div’s que tens a un li canvies el color del text, al segon li canvies el backgroundcolor, 
//i al tercer li fas els dos canvis, apart de canviar-li el tamany de la font.
// Obtenir referències als divs
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');

div1.style.color = 'pink';
div2.style.backgroundColor = 'grey';
div3.style.color = 'blue';
div3.style.backgroundColor = 'green';
div3.style.fontSize = '20px';
