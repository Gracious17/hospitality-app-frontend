import DropdownBtns from "../dropdownHeroMenu/DropdownBtns";

const Hero = () => {
  return (
    <div
      className="relative flex items-center justify-center bg-cover bg-center  w-[100vw] h-[80vh]"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      {/* Overlay */}
      <div className="absolute   sm:w-[50%] w-[100%] md:w-[65%] lg:w-[33%] h-[8vh] rounded-t-md bg-white/40 mt-4 bottom-0 z-0"></div>

      <div className="absolute w-full h-[40vh] rounded-t-md bg-black/40 mt-4 bottom-0 "></div>
      <div className="pt-10 relative z-10">
        <h1 className="text-center font-bold tracking-normal text-lg sm:text-xl md:text-4xl lg:text-6xl xl:text-7xl leading-10 text-white font-sans">
          A piece of paradise just for you
        </h1>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-transparent text-white p-4 justify-center items-center text-center">
        <DropdownBtns />
      </div>
    </div>
  );
};

export default Hero;
