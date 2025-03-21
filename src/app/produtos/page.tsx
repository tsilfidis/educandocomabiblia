import { formatCurrency } from "@/helpers/format-currency";
import { db } from "@/lib/prisma";
import { notFound } from "next/navigation";

const Produtos = async () => {
  const produtos = await db.produtos.findMany();
  if (!produtos) {
    return notFound();
  }
  return (
    <div className="mb-4 h-[70%]">
      <h2 className="bg-quaternary text-primary text-center text-2xl p-4 rounded-b-xl font-bold mb-4">
        Produtos
      </h2>
      <ul>
        {produtos.map((produto) => (
          <li
            key={produto.id}
            className="border-b border-[#525989] p-4 mb-2 rounded-xl shadow-md"
          >
            <h3 className="mb-2 text-lg font-semibold">{produto.nome}</h3>
            <p className="text-justify">{produto.descricao}</p>
            <p className="font-semibold">{formatCurrency(produto.preco)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Produtos;
