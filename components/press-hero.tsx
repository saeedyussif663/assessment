import { MoveUpRight } from 'lucide-react';
import Link from 'next/link';

export default function PressHero() {
  return (
    <div className="relative overflow-hidden bg-[#F8F9FE] py-7 w-full px-6">
      <div className="">
        <h1 className="text-[#0D2C65] text-4xl font-medium md:font-bold  md:max-w-[725px] md:text-7xl">
          Latest news and media from around the world
        </h1>

        <p className="mt-6 text-2xl text-[#6E80A3] md:max-w-[580px] ">
          Please write to us at media@bomba.co if you have a media enquiry.
          We'll do our best to get back to you as soon as possible.
        </p>

        <div className="mt-4">
          <Link
            href="#"
            className="w-fit border-b border-[#2668EC] text-[#2668EC] py-4 flex items-center gap-2"
          >
            Get press kit
            <MoveUpRight size={16} />
          </Link>
        </div>
      </div>

      {/* illustrations */}
      <img
        src="/topleft.png"
        alt="topleft illustration"
        className="hidden md:block z-10 absolute top-0 left-0 opacity-10"
      />

      <img
        src="/topright.png"
        alt="topright illustration"
        className="block z-20 opacity-15 absolute top-0 -right-52 md:-right-14 md:opacity-50"
      />

      <img
        src="/bottomcenter.png"
        alt="bottomcenter illustration"
        className="block z-10 opacity-15 absolute -bottom-12 md:right-64"
      />
    </div>
  );
}
