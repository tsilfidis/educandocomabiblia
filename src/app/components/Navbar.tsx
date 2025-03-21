import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-primary text-secondary-light h-[100px] pb-3 px-4">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image
            src="/logo-EB-400px.png"
            width={80}
            height={80}
            alt="Logo educando com a bíblia"
            priority={true}
          />
          <h1 className="font-semibold">Educando com a Bíblia</h1>
        </div>
        <div id="menu_links" className="hidden md:block">
          <ul className="flex space-x-2 text- items-center">
            <li>
              <Link
                href="/"
                passHref
                className="hover:border border-secondary-light rounded-2xl p-2"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:border hover:border-secondary-light rounded-2xl p-2"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/produtos"
                className="hover:border border-secondary-light rounded-2xl p-2"
              >
                Produtos
              </Link>
            </li>
            <li>
              <Link
                href="/quem-somos"
                className="hover:border border-secondary-light rounded-2xl p-2"
              >
                Quem Somos
              </Link>
            </li>
            <li className="hidden">
              <Link href="/inscricoes">
                <Button
                  variant="destructive"
                  className="font-semibold rounded-2xl hover:border hover:border-secondary-light"
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
