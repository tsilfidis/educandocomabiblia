import { db } from "@/lib/prisma";
import { notFound } from "next/navigation";

const Home = async () => {
  const postagens = await db.postagens.findMany({ where: { destaque: true } });
  if (!postagens) {
    return notFound();
  }
  return (
    <div className="flex flex-col h-[800px] my-4">
      <h1 className="bg-quaternary text-primary text-center text-2xl p-4 rounded-xl font-bold mb-4">
        Destaques
      </h1>
      <ul>
        {postagens.map((post) => (
          <li
            key={post.id}
            className="border border-[#525989] p-4 mb-2 rounded-xl shadow-md"
          >
            <h3 className="text-lg font-semibold">{post.titulo}</h3>
            <p className="text-gray-600">{post.subtitulo}</p>
            <p>{post.texto}</p>
            <p className="text-sm text-gray-500">Autor: {post.autor}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
