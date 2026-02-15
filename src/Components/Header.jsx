const Header = () => {
  return (
    <div className="w-full h-[200px] bg-[#ffcc99] group relative z-[1]">
      <div className="bg-[url('/public/Header2.png')] absolute inset-0 bg-cover relative z-[3] w-full h-[136px] ">
        <div className="bg-[url('/public/Header2.png')] bg-cover  relative z-[2] w-full h-[136px] transition-all duration-2000 ease-in-out group-hover:scale-y-120 group-hover:translate-y-1"></div>
        <div
          className="absolute top-[13%] left-[2%] main-font-black text-#0b2037 drop-shadow-[6px_6px_0_rgba(241,100,47,1)] z-[0] text-[200px] font-normal font-[400]  leading-none tracking-tighter whitespace-nowrap"
          style={{ WebkitTextStroke: "2px black" }}
        >
          Todo list
        </div>
      </div>
    </div>
  );
};
export default Header;
