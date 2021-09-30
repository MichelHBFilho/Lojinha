(() => {
    const produtoInfo = JSON.parse(sessionStorage.getItem('produto'))
    const divTudo = document.querySelector("#todo");
    divTudo.innerHTML = `
<header>
    <h1><a href="index.html">Lojinha</a></h1>
    <p>Compre o que quiser quando quiser!</p>
</header>
<main>
    <img src="${produtoInfo.imagem}" alt="${produtoInfo.nome}">
    <h2>${produtoInfo.nome}</h2>
    <p>No valor de ${produtoInfo.preco}</p>
    <button>Comprar</button>
</main>`
    const botaoComprar = document.querySelector('button');
    botaoComprar.addEventListener('click', () => {
        window.location.href = './paginaCompra.html';
    })
})()