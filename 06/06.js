// conhecendo switch case 

const cafeteria = 'terça'

switch (cafeteria) {
    case 'segunda':
        console.log('cappuccino')
        break;
    case 'terça':
        console.log('latte')
        break;
    case 'quarta':
        console.log('mocca')
        break;
    case 'quinta':
        console.log('expresso')
        break;
    case 'sexta':
        console.log('machiatto')
        break;
    default:
        console.log('café especial na cafeteria Bugs & Deploys...')
        break;
}


// outro exemplo

const fruta = "kiwi";

switch (fruta) {
    case "banana":
    case "maça":
    case "laranja":
        console.log("fruta comum");
        break;
    case "kiwi":
    case "manga":
        console.log("fruta incomum");
        break;
    default:
        console.log("fruta desconhecida!");
}