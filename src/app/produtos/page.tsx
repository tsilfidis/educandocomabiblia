const Produtos = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Produtos</h2>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id} className="border p-4 mb-2 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">{produto.nome}</h3>
            <p>{produto.descricao}</p>
            <p className="text-green-500">R$ {produto.preco.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Produtos;
