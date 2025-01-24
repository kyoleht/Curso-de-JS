let hora = 21;
let name = 'Rafael';

if (hora <= 12) {
    console.log('Bom dia, ' + name)
} else if (hora >= 13 || hora < 19) {
    console.log('Boa tarde, ' + name)
} else if (hora >= 19) {
    console.log('Boa noite, ' + name)
} else {
    console.log('Hora não definida!')
}