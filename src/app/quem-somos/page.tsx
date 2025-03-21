import Image from "next/image";

const QuemSomos = () => {
  return (
    <div className="flex flex-col items-center my-4 h-[70%]">
      <h1 className="bg-quaternary w-full text-primary text-center text-2xl p-4 rounded-xl font-bold mb-4">
        Quem Somos
      </h1>
      <div className=" px-4 relative w-min-[400px] h-min-[400px]">
        <Image
          src="https://storage.googleapis.com/production-hostgator-brasil-v1-0-0/660/991660/fz3WecwB/43012d558c0d4693b9eb36e02bc27065"
          alt="Quem Somos"
          width={400}
          height={400}
          className="rounded-xl bg-slate-300 shadow-md"
          priority={true}
        />
      </div>
      <p className="text-justify p-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vitae
        facere, eum rerum incidunt et quis nemo itaque explicabo praesentium,
        enim, sit nam dolorem dignissimos consequatur? Necessitatibus nulla
        magni praesentium? Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Optio dolor qui a ab omnis, porro corrupti deserunt, rem similique
        consequuntur reprehenderit voluptates necessitatibus odit blanditiis est
        nemo doloribus sequi nobis.
      </p>
    </div>
  );
};

export default QuemSomos;
