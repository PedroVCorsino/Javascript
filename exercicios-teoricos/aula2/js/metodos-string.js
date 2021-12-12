// metodos comuns de strings
const email = 'laracroft@email.com';

const lastIndexOfA = email.lastIndexOf('a');
console.log(lastIndexOfA);

const emailSlice = email.slice(4, 9);
console.log(emailSlice, email);

const emailReplace = email.replace('laracroft', 'chun-li');
console.log(emailReplace, email);