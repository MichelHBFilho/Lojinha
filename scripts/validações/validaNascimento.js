export function validaNascimento(input) {
    const dataNascimento = new Date(input.value);
    let mensagem = '';
    if (!maiorQue18(dataNascimento)) mensagem = 'Você precisa ter + de 18 para comprar comida';
    input.setCustomValidity(mensagem);
    console.log(mensagem);
}

function maiorQue18(dataNascimento) {
    const dataAtual = new Date();
    const dataMais18 = new Date(dataNascimento.getUTCFullYear() + 18, dataNascimento.getUTCMonth(), dataNascimento.getUTCDate());
    return dataAtual >= dataMais18;
}

// function validaNascimento(input) {
//     const dataNascimento = new Date('01/01/2010');
//     let mensagem = '';
//     if (!maiorQue18(dataNascimento)) mensagem = 'Você precisa ter + de 18 para comprar comida';
// }

// validaNascimento();

// function maiorQue18(dataNascimento) {
//     const dataAtual = new Date();
//     const dataMais18 = new Date(dataNascimento.getUTCFullYear() + 18, dataNascimento.getUTCMonth(), dataNascimento.getUTCDate());
//     return dataMais18 <= dataAtual;
// }