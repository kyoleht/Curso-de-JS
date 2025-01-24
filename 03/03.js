// função para calculo de imc

const conversionFactor = 0.01;

function calculateIMC(person) {
    height = person.height;
    weight = person.weight;

    height *= conversionFactor;

    let imc = weight / (height * height);

    let result = "The result of your IMC is: " + imc
    let isHealthy = true;

    return {
        name: person.name,
        result, 
        imc,
        isHealthy
    }

}

const person = {
    name: 'Jessica',
    height: 155,
    weight: 55
}

console.log(calculateIMC(person));


    

