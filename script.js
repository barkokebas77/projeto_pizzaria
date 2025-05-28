  let carrinho = [];

  function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    atualizarCarrinho();
  }

  function atualizarCarrinho() {
    const lista = document.getElementById("lista-carrinho");
    const totalSpan = document.getElementById("total");
    lista.innerHTML = "";
    let total = 0;

    carrinho.forEach((item, index) => {
      total += item.preco;
      const li = document.createElement("li");
      li.innerHTML = `${item.nome} - R$ ${item.preco.toFixed(2)} <button onclick="removerItem(${index})">Remover</button>`;
      lista.appendChild(li);
    });

    totalSpan.textContent = total.toFixed(2);
  }

  function removerItem(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
  }

  function limparCarrinho() {
    carrinho = [];
    atualizarCarrinho();
  }

  function confirmarCarrinho() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }

  carrinho = [];
  atualizarCarrinho();

  const msg = document.getElementById("mensagem-confirmacao");
  msg.style.display = "block";
  setTimeout(() => {
    msg.style.display = "none";
  }, 3000);
} 