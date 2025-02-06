// Crie um objeto que mapeia emojis para seus significados. Depois, escreva uma função que recebe um emoji e retorna o significado correspondente.

let emoji = 1;

const emojis = {
    1: "😂 -> rindo ate chorar",
    2: "❤️ -> coração",
    3: "🔥 -> foguinho"
};

console.log(emojis[emoji]);

function emojiMeanings(emoji) {
   const emojiMap =  {
        1: "😂 -> rindo ate chorar",
        2: "❤️ -> coração",
        3: "🔥 -> foguinho"
    };

    return emojiMap[emoji] || 'Emoji não encontrado!'; 
}

console.log(emojiMeanings(3));

// outra resolução ----------------------------------

function emojiMeanings(emoji) {
    return  {
         1: "😂 -> rindo ate chorar",
         2: "❤️ -> coração",
         3: "🔥 -> foguinho"
     } [emoji] || 'Emoji não encontrado!'; 
 }

console.log(emojiMeanings(2));