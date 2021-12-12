const postTitle = 'É bolacha ou biscoito?';
const postAuthor = 'Fulano';
const postComents = 15;

// usando concatenação
const postMessage = 'O post "' + postTitle + '" foi criado por ' + postAuthor + ' e possui ' + postComents + ' comentários.';

console.log(postMessage);

// usando template string
const postMessage2 = `O post "${postTitle}" foi criado por ${postAuthor} e possui ${postComents} comentários.`;

console.log(postMessage2);

// criando templates HTML
const html = `
    <h2>${postTitle}</h2>
    <p>${postAuthor}</p>
    <span> Esse post tem ${postComents} Comentarios </span>
`;

document.getElementById('post').innerHTML = html;   // colocando o html dentro da div com id post

