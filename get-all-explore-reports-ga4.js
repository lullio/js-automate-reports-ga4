//textos
document.querySelectorAll(".dimension-chip-list form > div.concept-chip.draggable:not(.movable) span").forEach(val => console.log(val.textContent.replace(/\n|\r|\s{2,}/gi, '')))
// get rows and columns
document.querySelectorAll(".with-row-controls  .concept-chips.padding  .movable.draggable span")



function getTabData(){
/* store all dimensions texts in Array, String and StringRegex to other script
// get all dimensions elements
document.querySelectorAll(".dimension-chip-list form > div.concept-chip.draggable:not(.movable) span")
*/


let allDimensionsStrRegex = "", allDimensionsStr = "", allDimensionsArr = [];
document.querySelectorAll(".dimension-chip-list form > div.concept-chip.draggable:not(.movable) span").forEach(val =>  {
  allDimensionsStr += val.textContent.replace(/\n|\r|\s{2,}/gi, '') + ","
  allDimensionsStrRegex += val.textContent.replace(/\n|\r|\s{2,}/gi, '') + "|";
  allDimensionsArr.push(val.textContent.replace(/\n|\r|\s{2,}/gi, ''))
})
// remover o último | da allDimensionsStrRegex
allDimensionsStrRegex = allDimensionsStrRegex.replace(/\|$/gi, '')
// remover o último , da allDimensionsStr
allDimensionsStr = allDimensionsStr.replace(/\,$/gi, '')




/* store all metrics texts in Array, String and StringRegex to other script
// get all metrics  elements
document.querySelectorAll(".metric-chip-list form > div.concept-chip.draggable:not(.movable) span")
*/
let allMetricsStrRegex = "", allMetricsStr = "", allMetricsArr = [];
document.querySelectorAll(".metric-chip-list form > div.concept-chip.draggable:not(.movable) span").forEach(val =>  {
  allMetricsStr += val.textContent.replace(/\n|\r|\s{2,}/gi, '') + ","
  allMetricsStrRegex += val.textContent.replace(/\n|\r|\s{2,}/gi, '') + "|";
  allMetricsArr.push(val.textContent.replace(/\n|\r|\s{2,}/gi, ''))
})
// remover o último | da allMetricsStrRegex
allMetricsStrRegex = allMetricsStrRegex.replace(/\|$/gi, '')
// remover o último , da allMetricsStr
allMetricsStr = allMetricsStr.replace(/\,$/gi, '')



/* get only rows
// get all rows  elements
document.querySelectorAll(".with-row-controls")[0].querySelectorAll('.concept-chips.padding  .movable.draggable span')
*/

// store all rows texts in Array, String and StringRegex to other script
let allRowsStrRegex = "", allRowsStr = "", allRowsArr = [];
document.querySelectorAll(".with-row-controls")[0].querySelectorAll('.concept-chips.padding  .movable.draggable span').forEach(val =>  {
  allRowsStr += val.textContent.replace(/\n|\r|\s{2,}/gi, '') + ","
  allRowsStrRegex += val.textContent.replace(/\n|\r|\s{2,}/gi, '') + "|";
  allRowsArr.push(val.textContent.replace(/\n|\r|\s{2,}/gi, ''))
})
// remover o último | da allRowsStrRegex
allRowsStrRegex = allRowsStrRegex.replace(/\|$/gi, '')
// remover o último , da allRowsStr
allRowsStr = allRowsStr.replace(/\,$/gi, '')


/* get only columns
// get all columns elements
document.querySelectorAll(".with-row-controls")[1].querySelectorAll('.concept-chips.padding  .movable.draggable span')
*/


// store all columns texts in Array, String and StringRegex to other script
let allColumsStrRegex = "", allColumsStr = "", allColumsArr = [];
document.querySelectorAll(".with-row-controls")[1].querySelectorAll('.concept-chips.padding  .movable.draggable span').forEach(val =>  {
  allColumsStr += val.textContent.replace(/\n|\r|\s{2,}/gi, '') + ","
  allColumsStrRegex += val.textContent.replace(/\n|\r|\s{2,}/gi, '') + "|";
  allColumsArr.push(val.textContent.replace(/\n|\r|\s{2,}/gi, ''))
})
// remover o último | da allColumsStrRegex
allColumsStrRegex = allColumsStrRegex.replace(/\|$/gi, '')
// remover o último , da allColumsStr
allColumsStr = allColumsStr.replace(/\,$/gi, '')

/* get only values
// get all values  elements
document.querySelectorAll('.with-cell-type-control .concept-chips.padding .droppable-element .concept-chip-container span');
*/

// store all values texts in Array, String and StringRegex to other script
let allValuesStrRegex = "", allValuesStr = "", allValuesArr = [];
document.querySelectorAll('.with-cell-type-control .concept-chips.padding .droppable-element .concept-chip-container span').forEach(val =>  {
  allValuesStr += val.textContent.replace(/\n|\r|\s{2,}/gi, '') + ","
  allValuesStrRegex += val.textContent.replace(/\n|\r|\s{2,}/gi, '') + "|";
  allValuesArr.push(val.textContent.replace(/\n|\r|\s{2,}/gi, ''))
})
// remover o último | da allValuesStrRegex
allValuesStrRegex = allValuesStrRegex.replace(/\|$/gi, '')
// remover o último , da allValuesStr
allValuesStr = allValuesStr.replace(/\,$/gi, '')


/*
var filtrar = "corresponde exatamente a,contém,começa com,termina com,corresponde à RegEx,não corresponde exatamente a,não contém,não começa com,não termina com,não corresponde à RegEx"
var arrFiltrar = filtrar.split(',');

var arr;
arrFiltrar.forEach((val, i) =>{
    if(allFiltersArr[0].search(val) !== -1){
        console.log(allFiltersArr[0] + "i : " + i)
        arr = allFiltersArr[0].split(val);
        arr.splice(1,0,val)
    }
})
var newArr = arr.map(val => val.trim())
*/


// store all filters texts in Array, String and StringRegex to other script
let allFiltersStrRegex = "", allFiltersStr = "", allFiltersArr = [];
document.querySelectorAll('filter-chip-list-settings-adapter .concept-chip span').forEach(val =>  {
  allFiltersStr += val.textContent.replace(/\n|\r|\s{2,}/gi, '') + ","
  allFiltersStrRegex += val.textContent.replace(/\n|\r|\s{2,}/gi, '') + "|";
  allFiltersArr.push(val.textContent.replace(/\n|\r|\s{2,}/gi, ''))
})
// remover o último | da allFiltersStrRegex
allFiltersStrRegex = allFiltersStrRegex.replace(/\|$/gi, '')
// remover o último , da allFiltersStr
allFiltersStr = allFiltersStr.replace(/\,$/gi, '')

/*	COLLECT ALL FILTERS IN AN ARRAY
// get all filters
 document.querySelectorAll('filter-chip-list-settings-adapter .concept-chip span')
*/
var filtrar = "corresponde exatamente a,contém,começa com,termina com,corresponde à RegEx,não corresponde exatamente a,não contém,não começa com,não termina com,não corresponde à RegEx";
var oficial = [];
var arrFiltrar = filtrar.split(',');
// array dos filtros, qtd de filtros que existem / texto inteiro dos filtros
allFiltersArr.forEach((val1, i1) => {
//console.log(val1.split());
// array filtrar, que é todas variantes, contém, começa com,etc...
arrFiltrar.forEach((val2, i2) => {
    // se encontrar alguma variante dentro do texto completo do filtro
    if(val1.search(val2) !== -1){
        //alert(val1, val2);
        // vai inserir um array dentro do array oficial
        oficial.push(val1.split(val2)); // split na variante contém, começa com, etc
        // vai inserir a variante "contém, começa com, etc.." na segunda posição do array
        oficial[i1].splice(1,0,val2);
        // apagar espaços do texto do array
        
    }
    //console.log(val1 + "\n" + val2);
})

})

/*  CAPTURAR O NOME DA TAB ATIVA - TOP
*/
var tabName = document.querySelector('.step-name input').getAttribute('aria-label');


/*
   FINAL DATA / STORE EVERYTHING IN AN OBJECT
*/

// para guardar o backup de tudo
let tabData = {
    dimensoes: {
        arr: allDimensionsArr,
        str: allDimensionsStr,
		    strRegex: allDimensionsStrRegex
    },
    metricas: {
        arr: allMetricsArr, 
        str: allMetricsStr,
		strRegex: allMetricsStrRegex
    },
    linhas: {
        arr: allRowsStr, 
        str: allRowsStr,
		strRegex: allRowsStrRegex
    },
    colunas: {
        arr: allColumsStr, 
        str: allColumsStr,
		strRegex: allColumsStrRegex
    },
    valores: {
        arr: allValuesArr, 
        str: allValuesStr,
		strRegex: allValuesStrRegex
    },
    filtros: {
        arr: allFiltersArr, 
        str: allFiltersStr,
		strRegex: allFiltersStrRegex,
		oficial: oficial
    },
    tabName: tabName
}
return tabData;
}

// get all tabs
document.querySelectorAll('.cdk-drag.step-wrapper .step-tab')
let i = 0;
let allTabsData = []; // array de objs / todas tabs
// allTabsData.push(getTabData());
var tabs = document.querySelectorAll('.cdk-drag.step-wrapper .step-tab')

async function td(){
   for(tab of tabs){
         await delay(2000);
         allTabsData.push(getTabData());
         console.log("Executed after 5 second wait");
         // allTabsData[i].push(tab.textContent)
         await delay(2000);
         tab.click()
         console.log("Executed after 10 seconds wait");
         i++;
   }
}td()

console.log("Executed after the 1st log and before the 2 delays");


function delay(milliseconds){
   return new Promise(resolve => {
       setTimeout(resolve, milliseconds);
   });
}
async function init(){
   await delay(5000);
   console.log("Executed after 5 second wait");
   // val.click()
   // await delay(5000);
   // console.log("Executed after 10 seconds wait");
}