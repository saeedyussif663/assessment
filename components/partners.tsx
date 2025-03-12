const images = [
  '/VFD.png',
  '/Thunes.png',
  '/Truelayer.png',
  '/AccessBank.png',
  '/Rail.png',
  '/Truenarrative.png',
  '/Paga.png',
  '/Solid.png',
  '/IdentityPass.png',
];

export default function Partners() {
  return (
    <section className="px-6 mt-28 flex flex-col gap-5 md:flex-row justify-between">
      <article>
        <h3 className="text-[#0D2C65] text-6xl font-medium max-w-[518px]">
          Trusted partners worldwide
        </h3>

        <p className="mt-14 text-lg text-[#6E80A3] max-w-[433px]">
          We're partners with countless major organisations around the globe
        </p>
      </article>

      <article className="grid grid-cols-2 gap-y-4 gap-x-3.5 md:grid-cols-3">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={img}
            className="grayscale hover:grayscale-0 transition-all duration-500 ease-in"
          />
        ))}
      </article>
    </section>
  );
}
