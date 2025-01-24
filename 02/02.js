// calculo de imc e conversão de cm para m

let height = 170;
let weight = 80;

const conversionFactor = 0.01;

height *= conversionFactor;

let imc = weight / (height * height);

console.log(imc)