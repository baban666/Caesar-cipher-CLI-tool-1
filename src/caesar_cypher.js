const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
const ENCRYPTION = 'encryption';

/**
 * Encrypt/decrypt a given text by the Caesar's cypher.
 *
 * @param {string} text - A piece of a text, which we would like to encrypt or to decrypt.
 * @param {number} shift - The parameter of the Caesar's cypher.
 * @param {string} mode - If mode = 'encryption', then we encrypt the text; otherwise we decrypt the text
 */
const cryptoSystem = (text, shift, mode = ENCRYPTION) => {
    if (mode !== ENCRYPTION) {
        shift *= -1;
    }
    return text.split('').map(symbol => {
        const lowerCaseOfSymbol = symbol.toLowerCase();

        // find an index of the symbol in the array <alphabet>,
        // if the symbol is an english letter.
        const index = alphabet.indexOf(lowerCaseOfSymbol);
        if (index >= 0) {
            const isLowerCase = symbol === lowerCaseOfSymbol; // whether the symbol is in the lower registry
            let shiftedIndex = (index + shift) % alphabet.length;
            if (shiftedIndex < 0) {
                shiftedIndex += alphabet.length;
            }
            let image = alphabet[shiftedIndex];
            if (!isLowerCase) {
                image = image.toUpperCase();
            }
            return image;
        } else {
            return symbol;
        }
    }).join('');
};

module.exports = {cryptoSystem};
