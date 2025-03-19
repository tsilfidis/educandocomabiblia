import Image from "next/image";

const QuemSomos = () => {
  return (
    <div className="flex flex-col items-center my-4">
      <h1 className="bg-quaternary w-full text-primary text-center text-2xl p-4 rounded-xl font-bold mb-4">
        Quem Somos
      </h1>
      <Image
        src="https://storage.googleapis.com/production-hostgator-brasil-v1-0-0/660/991660/fz3WecwB/43012d558c0d4693b9eb36e02bc27065"
        alt="Quem Somos"
        width={400}
        height={400}
        className="rounded-full bg-slate-300 bg-cover"
        priority={true}
      />
    </div>
  );
};

export default QuemSomos;
