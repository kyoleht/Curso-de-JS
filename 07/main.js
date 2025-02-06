// switch case COMPLETO (anotar no caderno)

const IMC_STATUS_DICT = {
    UNDERWEIGHT: 'UNDERWEIGHT',
    REGULAR: 'REGULAR',
    OVERWEIGHT: 'OVERWEIGHT',
    OBESITY: 'OBESITY'
} 

function getAnalyzeDetail(analyzeIMC) {
    return {
        [IMC_STATUS_DICT.UNDERWEIGHT]: 'Abaixo do peso',
        [IMC_STATUS_DICT.REGULAR]: 'Na Média',
        [IMC_STATUS_DICT.OVERWEIGHT]: 'Acima do peso',
        [IMC_STATUS_DICT.OBESITY]: 'Obesidade'
    } [analyzeIMC] || 'Falha ao encontrar IMC';
}

function analyzeIMC(imc) {
    if (imc < 18.5) {
        return IMC_STATUS_DICT.UNDERWEIGHT;
    } else if (imc >= 18.5 && imc < 25) {
        return IMC_STATUS_DICT.REGULAR;
    } else if (imc >= 25 && imc < 30) {
        return IMC_STATUS_DICT.OVERWEIGHT;
    } else {
        return IMC_STATUS_DICT.OBESITY;
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
    let imcDetail = getAnalyzeDetail(imcAnalysis);

    return {
        name: person.name,
        result, 
        imc: imc.toFixed(2),
        isHealthy,
        analyzeIMC: imcAnalysis,
        getAnalyzeDetail: imcDetail
    }

}

const person = {
    name: 'Jessica',
    height: 155,
    weight: 55
}


console.log(calculateIMC(person));