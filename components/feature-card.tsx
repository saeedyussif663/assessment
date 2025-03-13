import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CardProps {
  backgroundColor: string;
  header: string;
  title: string;
  desc: string;
  img: string;
  comingSoon?: boolean;
  small: boolean;
  hide?: 'small' | 'large';
}

export default function Featurecard({
  backgroundColor,
  header,
  title,
  desc,
  img,
  comingSoon,
  small,
  hide,
}: CardProps) {
  return (
    <div
      className={`${small ? 'md:h-[700px]' : 'md:h-[800px]'} ${
        hide === 'small' && 'hidden md:block'
      } ${
        hide === 'large' && 'block md:hidden'
      }  h-[800px] relative w-full rounded-[10px] md:w-[552px] pt-6 md:pt-[50px] px-4 md:px-7`}
      style={{ backgroundColor: backgroundColor }}
    >
      {comingSoon && <img src="/coming-soon.png" alt="coming-soon" />}

      <div className="mt-2">
        <h5 className="text-[#6E80A3] text-2xl">{header}</h5>

        <h1 className="text-[#0D2C65] mt-1.5 font-bold text-3xl">{title}</h1>

        <p className="text-lg text-[#6E80A3] mt-2">{desc}</p>

        <Link
          href="#"
          className="mt-6 font-semibold w-fit text-[#2668EC] border-b border-[#2668EC] py-3 flex gap-6"
        >
          Swap now
          <ArrowRight size={14} />
        </Link>
      </div>

      <img src={img} alt={title} className="absolute right-0 bottom-0" />
    </div>
  );
}
