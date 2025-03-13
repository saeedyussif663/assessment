import Featurecard from './feature-card';

export default function Features() {
  return (
    <section className="mt-20 w-full px-6">
      <article className="max-w-[1047px] mx-auto">
        <h2 className="hidden md:block text-[#0D2C65] text-4xl font-semibold md:text-center border-t border-[#6E80A3] pt-10">
          The Bomba app help our users send & receive money, swap currencies
          across borders and pay bills, safely, conveniently, cheaply and on
          time.{' '}
        </h2>

        <h2 className="text-[#0D2C65] md:hidden text-3xl font-semibold md:text-center border-t border-[#6E80A3] pt-10">
          The Bomba app is all you need to send money both at home and abroad
        </h2>

        <p className="mt-4 text-lg text-[#6E80A3] md:text-center max-w-[712px] mx-auto">
          We are customer centric and focused on offering values to you that
          enable you achieve your financial needs.
        </p>
      </article>

      <article className="mt-20 flex mx-auto max-w-screen-2xl flex-row flex-wrap gap-6 justify-between 2xl:justify-center 2xl:gap-40 items-center">
        <div className="flex flex-col gap-10">
          <Featurecard
            header="Swap"
            title="Peer to peer marketplace"
            desc="Transact with light speed using Bomba Express. You can send funds at Bomba’s exchange rates to family and friends from the UK & US to 20 African countries."
            backgroundColor="rgba(240,237,254,1)"
            img="/swap.png"
            small={true}
          />
          <Featurecard
            header="Express"
            title="Take the express lane"
            desc="Transact with light speed using Bomba Express. You can send funds at Bomba’s exchange rates to family and friends from the UK & US to 20 African countries."
            backgroundColor="rgba(229,250,245,1)"
            img="/express.png"
            small={false}
            hide="large"
          />
          <Featurecard
            header="Refer & Earn"
            title="Make money while you refer"
            desc="Bomba allows you to earn passively through its platform. Refer your friends and family to use Bomba and earn up to £140"
            backgroundColor="rgba(241,242,246,1)"
            img="/refer.png"
            small={false}
          />
        </div>
        <div className="flex flex-col gap-10">
          <Featurecard
            header="Express"
            title="Take the express lane"
            desc="Transact with light speed using Bomba Express. You can send funds at Bomba’s exchange rates to family and friends from the UK & US to 20 African countries."
            backgroundColor="rgba(229,250,245,1)"
            img="/express.png"
            small={false}
            hide="small"
          />
          <Featurecard
            header="Bomba Connect"
            title="Deals from top brands"
            desc="With Bomba Connect, you can pay for and access goods and services from some of the best and trusted brands - at the best rates and with minimal wait time - all within the Bomba App.  "
            backgroundColor="rgba(253, 244, 239, 1)"
            img="/bomba.png"
            small={true}
            comingSoon
          />
        </div>
      </article>
    </section>
  );
}
