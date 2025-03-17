const Footer = () => {
  return (
    <footer className="bg-primary text-white p-4 mt-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="text-center text-sm">
          <p>
            <strong>CNPJ:</strong> 00.000.000/0000-00
          </p>
          <p>
            <strong>Razão Social:</strong> Nome da Empresa
          </p>
          <p>
            <strong>Endereço:</strong> Rua Exemplo, 123 - Cidade
          </p>
          <p>
            <strong>Email:</strong> contato@empresa.com
          </p>
          <p>
            <strong>Telefone:</strong> (00) 0000-0000
          </p>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0 justify-between">
          <a href="#" className="hover:opacity-80">
            🔗 Facebook
          </a>
          <a href="#" className="hover:opacity-80">
            🔗 Instagram
          </a>
          <a href="#" className="hover:opacity-80">
            🔗 YouTube
          </a>
          <a href="#" className="hover:opacity-80">
            🔗 LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
