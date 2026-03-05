// Exemplo de strings em JavaScript

// 1. Strings usando aspas simples
let singleQuoteString = 'Esta é uma string com aspas simples.';
console.log(singleQuoteString);

// 2. Strings usando aspas duplas
let doubleQuoteString = "Esta é uma string com aspas duplas.";
console.log(doubleQuoteString);

// 3. Strings usando template literals (crases) - permite interpolação e múltiplas linhas
let name = "Mundo";
let templateLiteralString = `Olá, ${name}!
Esta é uma string
de múltiplas linhas.`;
console.log(templateLiteralString);

// 4. Concatenação de strings
let part1 = "Olá";
let part2 = " ";
let part3 = "JavaScript";
let concatenatedString = part1 + part2 + part3;
console.log(concatenatedString);

// 5. Propriedade length
let exampleString = "Hello";
console.log("Tamanho da string:", exampleString.length);

// 6. Acessando caracteres específicos
console.log("Primeiro caractere:", exampleString[0]);
console.log("Segundo caractere:", exampleString[1]);

// 7. charAt()
console.log("Caractere no índice 1 (charAt):", exampleString.charAt(1));

// 8. indexOf() e lastIndexOf()
let searchString = "Hello World, welcome to the World!";
console.log("Primeira ocorrência de 'World':", searchString.indexOf("World"));
console.log("Última ocorrência de 'World':", searchString.lastIndexOf("World"));
console.log("Ocorrência de 'JavaScript' (não encontrada):", searchString.indexOf("JavaScript"));

// 9. slice()
console.log("Slice (índice 0 a 5):", searchString.slice(0, 5));
console.log("Slice (índice 6 em diante):", searchString.slice(6));
console.log("Slice (últimos 6 caracteres):", searchString.slice(-6));

// 10. substring()
console.log("Substring (índice 0 a 5):", searchString.substring(0, 5));
// console.log("Substring (últimos 6 caracteres) - não funciona com negativos:", searchString.substring(-6)); // Isso causaria um comportamento diferente do slice

// 11. replace()
let newString = searchString.replace("World", "JavaScript");
console.log("String com primeira substituição:", newString);
let replaceAllString = searchString.replace(/World/g, "Planeta"); // Usando regex para substituir todas as ocorrências
console.log("String com todas as substituições:", replaceAllString);

// 12. toUpperCase() e toLowerCase()
console.log("Maiúsculas:", exampleString.toUpperCase());
console.log("Minúsculas:", exampleString.toLowerCase());

// 13. trim()
let paddedString = "   String com espaços   ";
console.log("String original com espaços:", paddedString);
console.log("String sem espaços (trim):", paddedString.trim());

// 14. split()
let sentence = "Isso é uma frase de exemplo.";
let words = sentence.split(" ");
console.log("Array de palavras:", words);
let chars = exampleString.split("");
console.log("Array de caracteres:", chars);
