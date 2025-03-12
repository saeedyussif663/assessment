export default function Rounded({ fee }: { fee: number }) {
  return (
    <div className="absolute top-15 left-5 flex gap-2 items-center">
      <div className="flex items-center justify-center border-1 border-[#D1D1D1] bg-[#0A0A0A] rounded-full size-[17px]">
        <div className="w-2 h-px bg-[#23CE6B]"></div>
      </div>

      <p className="text-[#6F6F6F] text-sm">{fee} GBP Fee</p>
    </div>
  );
}
