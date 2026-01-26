import Image from 'next/image';

export function LogoReveal() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-black py-16 sm:py-32 lg:py-48">
      <div className="w-full px-4">
        <Image
          src="/logo.png"
          alt="Ardenus"
          width={1920}
          height={400}
          className="h-auto w-full scale-75 object-contain sm:scale-110"
          priority
        />
      </div>
    </section>
  );
}

export default LogoReveal;
