import { MoveDown, Play } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="mt-8 hidden md:flex flex-col">
      <div className="flex flex-col items-center justify-center">
        <div className="w-[298px] h-[512px] bg-[#233375] rounded-[28px] border-5 border-[#63C57B] shadow-custom"></div>

        <article>
          <div className="mt-10 flex justify-between items-end mx-6">
            <h1 className="text-[64px] font-medium text-[#0D2C65] w-[55%]">
              Multi-currency <br /> accounts for Africans
            </h1>
            <p className="text-lg text-[#233375] w-[40%] mb-6">
              Transact at home and abroad - create, send, hold and receive money
              in African and foreign currencies. Send money to and from Africa,
              seamlessly.
            </p>
          </div>
        </article>
      </div>

      <div className="mt-5 w-full border-b border-[#6E80A3]"></div>

      <div className="mx-6 mt-4 flex justify-between items-center">
        <div className="flex items-baseline gap-5">
          <p className="text-[#6E80A3]">News & Release update</p>

          <div>
            <h5 className="text-[#8C8C8C]">
              June 20, 2022 —{' '}
              <span className="text-[#2668EC]">
                Bomba now has a dollar wallet, activate your account
              </span>
            </h5>
            <h5 className="text-[#8C8C8C]">
              June 01, 2022 —{' '}
              <span className="text-[#2668EC]">
                Top 10 Summer Vacation Places In 2022
              </span>
            </h5>
          </div>
        </div>

        <Link
          href="#send_money"
          className="flex items-center gap-2 text-2xl text-[#0D2C65]"
        >
          Scroll Down <span className="text-[#63C57B]">↓</span>
        </Link>
      </div>
    </section>
  );
}

export function MobileHeroSection() {
  return (
    <section className="mt-8 flex flex-col px-6 md:hidden">
      <Image
        src={'/mobilePhone.png'}
        alt="mobile phone"
        width={236}
        height={302}
        priority
      />

      <div className="mt-10 text-[#233375]">
        <h1 className="font-semibold text-5xl">
          Multi-currency accounts for Africans
        </h1>

        <p className="mt-5">
          Transact at home and abroad - create, send, hold, receive money in
          African currencies and foreign currencies while also sending money to
          and from Africa seamlessly
        </p>

        <div className="mt-6 flex items-center gap-4">
          <div className="size-14 rounded-full bg-[#233375] flex items-center justify-center">
            <Play size={20} color="#ffffff" />
          </div>

          <p className="text-lg text-[#233375]">See how it works</p>
        </div>

        <Link href="#send_money">
          <MoveDown size={24} color="#23CE6B" className="mt-8" />
        </Link>
      </div>
    </section>
  );
}
