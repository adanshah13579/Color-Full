export default function PhoneFrame({ children }) {
  return (
    <div
      className="relative w-[280px] h-[580px] rounded-[36px] bg-[#2d2d2d] p-[10px] shadow-xl mx-auto"
      aria-hidden
    >
      <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[88px] h-[22px] bg-[#2d2d2d] rounded-full z-20" />
      <div className="relative w-full h-full rounded-[26px] overflow-hidden bg-white flex flex-col">
        {children}
      </div>
    </div>
  );
}
