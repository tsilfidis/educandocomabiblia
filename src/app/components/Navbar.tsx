import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-primary text-secondary-light h-[100px] pb-3 px-4">
      <div className="w-full flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 hover:scale-105">
          <Image
            src="/logo-EB-400px.png"
            width={80}
            height={80}
            alt="Logo educando com a bíblia"
            priority={true}
          />
          <h1 className="font-semibold">Educando com a Bíblia</h1>
        </Link>
        <div id="menu_links" className="hidden md:block">
          <ul className="flex space-x-2 text- items-center">
            <li className="p-2 hover:opacity-50 hover:scale-105">
              <Link href="/" passHref>
                Home
              </Link>
            </li>
            <li className="p-2 hover:opacity-50 hover:scale-105">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="p-2 hover:opacity-50 hover:scale-105">
              <Link href="/produtos">Produtos</Link>
            </li>
            <li className="p-2 hover:opacity-50 hover:scale-105">
              <Link href="/quem-somos">Quem Somos</Link>
            </li>
            <li className="hidden hover:opacity-50 hover:scale-105 hover:text-secondary-light">
              <Link href="/inscricoes">
                <Button
                  variant="destructive"
                  className="font-semibold rounded-2xl hover:bg-primary hover:border hover:border-secondary-light"
                >
                  Inscrições
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
