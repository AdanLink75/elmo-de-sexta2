function criaCartao(categoria, pergunta, resposta){
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className='cartao';
    cartao.innerHTML = `
    <div class="conteudo-cartao">
    <h3>${categoria}$</h3>
    <div class="conteudo-cartao">
        <p>${pergunta}$</p>
    </div>
    <div class="conteudo-cartao">
        <p>${resposta}$</p>
    </div>
</div>
    `
    container.appendChild(cartao)
}