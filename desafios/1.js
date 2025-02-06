// Crie um objeto que mapeia códigos de status HTTP para mensagens.

let message = 403;

const errorMessages = {
    200: 'OK',
    404: 'Not Found',
    408: 'Expired',
    504: 'Gateway Timeout',
    503: 'Offline Service',
    403: 'Danger'
};

console.log(errorMessages[message]);

// Escreva uma função que recebe um código e retorna a mensagem correspondente.

function codError(message) {
    return {
        202: 'OK',
        404: 'Not Found',
        408: 'Expired',
        504: 'Gateway Timeout',
        503: 'Offline Service',
        403: 'Danger'
    } [message] || 'Falha ao tentar se conectar à Internet';
}

console.log(codError(404));
