import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-primary text-white p-4 shadow-md fixed">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Minha Empresa</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" passHref>
              Home
            </Link>
          </li>
          <li>
            <Link href="/quem-somos">Quem Somos</Link>
          </li>
          <li>
            <Link href="/produtos" className="hover:underline">
              Produtos
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/inscricoes" className="hover:underline">
              Inscrições
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
