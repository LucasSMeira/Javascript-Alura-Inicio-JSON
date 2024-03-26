

const pessoaOriginal = {
    id: 1,
    nome: "Fax",
    idade: 21,
}

let pessoaDeepCopy = {};

function copiarObjeto(obj) {
    pessoaDeepCopy = JSON.parse(JSON.stringify(obj));
    pessoaDeepCopy.id = 2;
    pessoaDeepCopy.nome = "Lucas";
    return pessoaDeepCopy;
}

copiarObjeto(pessoaOriginal);
console.log(pessoaOriginal);
console.log(pessoaDeepCopy);