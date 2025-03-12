import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function Navbar({ bg }: { bg?: string }) {
  return (
    <nav
      className={`${bg} w-full flex  items-center gap-5 justify-end md:justify-center pb-5 md:border-b border-[#6E80A3] text-[#6E80A3] font-medium text-lg`}
    >
      <div className="hidden md:flex w-full items-center gap-5 justify-end md:justify-center">
        <Link href="#" className="flex items-center gap-1.5">
          Features
          <ChevronDown size={18} color="#63C57B" className="mt-1" />
        </Link>
        <Link href="#">Press</Link>
        <Link href="#" className="flex items-center gap-1.5">
          Company
          <ChevronDown size={18} color="#63C57B" className="mt-1" />
        </Link>
      </div>
      <div className="flex md:hidden flex-col gap-2.5 cursor-pointer px-6">
        <div className="h-px  w-12 border-[2.5px]  border-[#233375] rounded-full"></div>
        <div className="h-px  w-12 border-[2.5px]  border-[#233375] rounded-full"></div>
      </div>
    </nav>
  );
}
