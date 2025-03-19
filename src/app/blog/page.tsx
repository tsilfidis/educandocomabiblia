import { db } from "@/lib/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";

const Blog = async () => {
  const postagens = await db.postagens.findMany({
    orderBy: { createdAt: "desc" },
  });
  if (!postagens) {
    return notFound();
  }
  return (
    <div className="my-4">
      <h2 className="bg-quaternary text-primary text-center text-2xl p-4 rounded-xl font-bold mb-4">
        Blog
      </h2>
      <ul>
        {postagens.map((postagem) => (
          <li
            key={postagem.id}
            className={`border-b border-[#525989] mb-4 rounded-xl shadow-md ${
              Number(postagem.id) / 2 == 0 ? "bg-secondary" : ""
            } p-4`}
          >
            <Image
              src={postagem.imagemUrl}
              alt={postagem.titulo}
              width={800}
              height={400}
              priority={true}
            />
            <h3 className="text-lg font-semibold">{postagem.titulo}</h3>
            <p className="text-gray-600">{postagem.subtitulo}</p>
            <p>{postagem.texto}</p>
            <p className="text-sm text-gray-500">Autor: {postagem.autor}</p>
          </li>
        ))}
      </ul>
    </div>
  );
  console.log(postagens);
};

export default Blog;
