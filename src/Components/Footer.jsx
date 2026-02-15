const Footer = () => {
    return(
        <div className="w-full h-[117px] bg-[#f1642f] pt-[30px] gap-[70px] text-#0b2037 main-font-black text-[25px] flex  justify-center ">
            <div className="group">
          <div className="bg-[url('/public/Valic.png')] w-[70px] h-[70px] absolute bg-cover z-[3]  left-[40px] top-[865px] transition-transform duration-2000 ease-in-out group-hover:translate-y-[45px]"></div>
          <div className="bg-[url('/public/Paint.png')] bg-cover w-[70px] h-[10px] absolute z-[2]  left-[34px] top-[858px] will-change-height transition-all duration-2000 ease-in-out group-hover:h-[60px]"></div>
        </div>
            <ul className=" drop-shadow-[4px_4px_0_rgba(255,204,153,1)] transition-all duration-600 ease-in-out hover:scale-105" style={{ WebkitTextStroke: '1px black' }}>@mihajuli</ul>
            <ul className=" drop-shadow-[4px_4px_0_rgba(255,204,153,1)] transition-all duration-600 ease-in-out hover:scale-105" style={{ WebkitTextStroke: '1px black' }}>
              <a href="https://github.com/MishlenDDR" className="">
              <span className="text-[20px]">GitHub-</span>MishlenDDR</a>
            </ul>
            <ul className=" drop-shadow-[4px_4px_0_rgba(255,204,153,1)] transition-all duration-600 ease-in-out hover:scale-105" style={{ WebkitTextStroke: '1px black' }}>KryshokShitya@yandex.ru</ul>
            <ul className=" drop-shadow-[4px_4px_0_rgba(255,204,153,1)] transition-all duration-600 ease-in-out hover:scale-105" style={{ WebkitTextStroke: '1px black' }}>Aim at the roller</ul>
            
          </div>
    )
}
export default Footer