// utilizando if else para calculo de imc

function analyzeIMC(imc) {
    if (imc < 18.5) {
        return "UNDERWEIGHT";
    } else if (imc >= 18.5 && imc < 25) {
        return "REGULAR";
    } else if (imc >= 25 && imc < 30) {
        return "OVERWEIGHT";
    } else {
        return "OBESITY";
    }
}

const conversionFactor = 0.01;

function calculateIMC(person) {
    height = person.height;
    weight = person.weight;

    height *= conversionFactor;

    let imc = weight / (height * height);

    let result = "The result of your IMC is: " + imc.toFixed(2);
    let isHealthy = true;
    let imcAnalysis = analyzeIMC(imc);

    return {
        name: person.name,
        result, 
        imc: imc.toFixed(2),
        isHealthy,
        analyzeIMC: imcAnalysis 
    }

}

const person = {
    name: 'Jessica',
    height: 155,
    weight: 55
}


console.log(calculateIMC(person));



    

