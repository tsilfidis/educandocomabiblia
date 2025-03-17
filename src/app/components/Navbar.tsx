import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-primary text-white p-2 shadow-md fixed w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Image
          src="/logo-EB-400px.png"
          width={100}
          height={100}
          alt="Logo educando com a bíblia"
        />
        <h1 className="font-bold">Educando com a Bíblia</h1>
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
            <Link href="/inscricoes">
              <Button variant="destructive" className="font-semibold">
                Inscrições
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
