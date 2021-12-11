// strings
console.log('Hello World');

const email = 'pedro@email.com.br';
console.log(email);
// concatendo strings
const firstName = 'Pedro Vinicius';
const lastName = 'Corsino dos Santos';
const fullName = firstName + ' ' + lastName;

console.log(fullName);

// acessando caracteres de uma string
console.log(fullName[2]); // javascrip é 0-based

// comprimento de uma string
console.log(fullName.length); // espaços em branco tbm contam

// metodos de string
console.log(fullName.toUpperCase()); // mano o github copilot ja sabia haha
console.log(fullName.toLowerCase());
console.log(fullName.substring(0, 5)); // a partir do indice 0, pega 5 caracteres
console.log(fullName.split(' ')); // separa a string por espaço
console.log(fullName.replace('Pedro', 'Joao')); // substitui o que estiver na string
console.log(fullName.includes('Pedro')); // verifica se a string existe
console.log(fullName.includes('Pedro', 10)); // verifica se a string existe a partir do indice 10
console.log(fullName.indexOf('Pedro')); // retorna o indice da string
console.log(fullName.indexOf('Pedro', 10)); // retorna o indice da string a partir do indice 10
console.log(fullName.lastIndexOf('Pedro')); // retorna o indice da string
console.log(fullName.lastIndexOf('Pedro', 10)); // retorna o indice da string a partir do indice 10
console.log(fullName.charAt(2)); // retorna o caractere na posição 2
console.log(fullName.charCodeAt(2)); // retorna o codigo do caractere na posição 2
console.log(fullName.startsWith('Pedro')); // verifica se a string começa com o que está sendo passado
console.log(fullName.endsWith('Santos')); // verifica se a string termina com o que está sendo passado
console.log(fullName.includes('Pedro')); // verifica se a string existe
console.log(fullName.includes('Pedro', 10)); // verifica se a string existe a partir do indice 10
console.log(fullName.repeat(2)); // repete a string
console.log(fullName.trim()); // retira os espaços em branco
console.log(fullName.trimStart()); // retira os espaços em branco do inicio
console.log(fullName.trimEnd()); // retira os espaços em branco do fim
console.log(fullName.padStart(20, 'Pedro')); // adiciona o que está sendo passado ao inicio da string
console.log(fullName.padEnd(20, 'Pedro')); // adiciona o que está sendo passado ao fim da string
console.log(fullName.repeat(2)); // repete a string