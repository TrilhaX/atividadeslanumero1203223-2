let produtos =  [
    { nome: "Produto 1", preco: 100 }, 
    { nome: "Produto 2", preco: 200 }, 
    { nome: "Produto 3", preco: 300 }
];

let comdesconto = produtos.map(produto => ({
    nome: produto.nome,
    preco: produto.preco * 0.9
}));

comdesconto.forEach(produto => {
    console.log(produto.preco);
});