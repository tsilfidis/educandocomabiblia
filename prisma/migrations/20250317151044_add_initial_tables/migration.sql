-- CreateTable
CREATE TABLE "Produtos" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "imagemUrl" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Postagens" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "subtitulo" TEXT NOT NULL,
    "texto" TEXT NOT NULL,
    "imagemUrl" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "destaque" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Postagem_pkey" PRIMARY KEY ("id")
);
