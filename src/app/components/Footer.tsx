import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-4 rounded-t-2xl">
      <div className="flex flex-col justify-between md:flex-row md:gap-4">
        <div className="flex flex-col mx-auto text-sm sm:items-start sm:flex-row sm:gap-40">
          <div className="flex flex-col mb-4 items-center sm:items-start">
            <h1 className="font-bold text-xl mb-2">Endereço</h1>
            <p>Rua André Pace, 428</p>
            <p>Campo Grande - MS, 7086030, Brasil</p>
            <a
              href="mailto:educandocomabiblia@gmail.com"
              className="mt-2 hover:scale-105 hover:opacity-50"
            >
              educandocomabiblia@gmail.com
            </a>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="font-bold text-xl mb-2">Legislação</h1>
            <Link
              href="/termos-de-uso"
              className="hover:scale-105 hover:opacity-50"
            >
              Termos de uso e serviço
            </Link>
            <Link href="#" className="hover:scale-105 hover:opacity-50">
              Políticas de privacidade
            </Link>
            <Link href="#" className="hover:scale-105 hover:opacity-50">
              Considerações Importantes
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-quaternary font-semibold px-4 py-3 flex flex-col items-center mt-4 sm:flex-row sm:justify-between">
        <div>© 2023 Educando com a Bíblia</div>
        <div className="sm:flex items-center gap-2">
          <p className="hidden font-semibold sm:block">Sigam-nos:</p>
          <div className=" flex gap-2 md:mt-0 justify-center items-center sm:justify-between">
            <a
              href="https://www.facebook.com/educandocomabiblia"
              target="_blank"
              className="hover:scale-110 hover:opacity-80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 28.87 28.87"
                width="30"
                height="30"
              >
                <g data-name="Layer 2">
                  <g data-name="Layer 1">
                    <rect
                      width="28.87"
                      height="28.87"
                      fill="#525989"
                      rx="6.48"
                      ry="6.48"
                      className="color4c76be svgShape"
                    />
                    <path
                      fill="#ffffff"
                      fillRule="evenodd"
                      d="M16.86 9.29h1.65V6.76c-.26 0-.53-.06-.8-.08h-1.49a3.65 3.65 0 0 0-2.1.65 3.15 3.15 0 0 0-1.27 2.1 7.39 7.39 0 0 0-.09 1.08v1.91h-2.41v2.81h2.4v7.07h2.93v-7.08h2.39l.37-2.83h-2.78v-2c.05-.83.54-1.08 1.2-1.1z"
                      className="colorfff svgShape"
                    />
                  </g>
                </g>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/educandocomabiblia"
              target="_blank"
              className="hover:scale-110 hover:opacity-80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 28.87 28.87"
                width="30"
                height="30"
              >
                <defs>
                  <linearGradient
                    id="a"
                    x1="-1.84"
                    x2="32.16"
                    y1="30.47"
                    y2="-3.03"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0"
                      stopColor="#525989"
                      className="stopColorfed576 svgShape"
                    />
                  </linearGradient>
                </defs>
                <g data-name="Layer 2">
                  <g data-name="Layer 1">
                    <rect
                      width="28.87"
                      height="28.87"
                      fill="url(#a)"
                      rx="6.48"
                      ry="6.48"
                    />
                    <g data-name="&amp;lt;Group&amp;gt;">
                      <path
                        fill="#ffffff"
                        d="M10 5h9c.2.1.5.1.7.2a4.78 4.78 0 0 1 3.8 3.3 8 8 0 0 1 .3 1.5v8.8a6.94 6.94 0 0 1-1.2 3.1 5.51 5.51 0 0 1-4.5 1.9h-7.5a5.49 5.49 0 0 1-3.7-1.2A5.51 5.51 0 0 1 5 18.14v-7a7.57 7.57 0 0 1 .1-1.5 4.9 4.9 0 0 1 3.8-4.3zm-3.1 9.5v3.9a3.42 3.42 0 0 0 3.7 3.7q3.9.15 7.8 0c2.3 0 3.6-1.4 3.7-3.7q.15-3.9 0-7.8a3.52 3.52 0 0 0-3.7-3.7q-3.9-.15-7.8 0a3.42 3.42 0 0 0-3.7 3.7z"
                        data-name="&amp;lt;Compound Path&amp;gt;"
                        className="colorfff svgShape"
                      />
                      <path
                        fill="#ffffff"
                        d="M9.64 14.54a4.91 4.91 0 0 1 4.9-4.9 5 5 0 0 1 4.9 4.9 4.91 4.91 0 0 1-4.9 4.9 5 5 0 0 1-4.9-4.9zm4.9-3.1a3.05 3.05 0 1 0 3 3 3 3 0 0 0-3-3z"
                        data-name="&amp;lt;Compound Path&amp;gt;"
                        className="colorfff svgShape"
                      />
                      <path
                        fill="#ffffff"
                        d="M18.34 9.44a1.16 1.16 0 0 1 1.2-1.2 1.29 1.29 0 0 1 1.2 1.2 1.2 1.2 0 0 1-2.4 0z"
                        data-name="&amp;lt;Path&amp;gt;"
                        className="colorfff svgShape"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@educandocomabiblia"
              target="_blank"
              className="hover:scale-110 hover:opacity-80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 28.87 28.87"
                width="30"
                height="30"
              >
                <g data-name="Layer 2">
                  <g data-name="Layer 1">
                    <rect
                      width="28.87"
                      height="28.87"
                      fill="#525989"
                      rx="6.48"
                      ry="6.48"
                      className="colorfd3832 svgShape"
                    />
                    <path
                      fill="#ffffff"
                      fillRule="evenodd"
                      d="M8 19.77a1.88 1.88 0 0 1-1.24-1.21c-.54-1.48-.7-7.66.34-8.88A2 2 0 0 1 8.46 9c2.79-.3 11.41-.26 12.4.1a1.94 1.94 0 0 1 1.22 1.17c.59 1.53.61 7.09-.08 8.56a1.89 1.89 0 0 1-.87.88c-1.04.52-11.75.51-13.13.06zm4.43-2.9l5-2.6-5-2.62z"
                      className="colorfff svgShape"
                    />
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
