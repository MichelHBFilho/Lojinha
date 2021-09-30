(() => {
    const produtos = document.querySelectorAll(".produto");
    produtos.forEach(produto => {
        produto.addEventListener('click', () => {
            sessionStorage.setItem('produto', JSON.stringify(obtemProduto(produto)));
            window.location.href = './paginaProduto.html';
        })
    })
    function obtemProduto(produto) {
        const nome = produto.querySelector('h2').textContent;
        const preco = produto.querySelector('p').textContent;
        const imagem = produto.querySelector('img').getAttribute('src');
        const produtoObjeto = {
            nome,
            preco,
            imagem 
        }; 
        return produtoObjeto;
    }
})();